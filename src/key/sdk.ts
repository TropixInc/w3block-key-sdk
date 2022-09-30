import { W3blockKeySDKOptions, TokenCredential, isTokenCredential, Credential } from '../interfaces';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { default as jwt_decode, JwtPayload } from 'jwt-decode';
import * as datefns from 'date-fns';
import { Api } from '../key/api/api';
import { CredentialType } from '../enums';

export type ApiSecurityDataType = { bearer: string };

export class W3blockKeySDK {
  public api: Api<ApiSecurityDataType>;
  protected authToken = '';
  protected authTokenDecoded: JwtPayload | undefined;
  protected refreshTokenDecoded: JwtPayload | undefined;
  protected refreshToken = '';
  protected options: W3blockKeySDKOptions;
  protected timer: NodeJS.Timer | undefined;
  protected credential: Credential | undefined;

  protected defaultOptions: Partial<W3blockKeySDKOptions> = {
    autoRefresh: false,
    tokenExpireOffset: 5000,
  };

  constructor(options: W3blockKeySDKOptions) {
    this.options = Object.assign({}, this.defaultOptions, options);

    this.api = new Api<ApiSecurityDataType>({
      baseURL: options.baseURL || 'https://api.w3block.io',
      securityWorker: (securityData): AxiosRequestConfig => {
        if (!securityData?.bearer) {
          return {};
        }

        return {
          headers: {
            Authorization: `Bearer ${securityData?.bearer}`,
          },
        };
      },
      secure: true,
    });

    this.hookInterceptors();
  }

  /**
   * It stops the auto refresh timer.
   */
  public disableAutoRefresh(): void {
    if (!this.options.autoRefresh) return;

    this.options.autoRefresh = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private hookInterceptors() {
    const refreshTokenUsed = new Set<string>();

    this.api.instance.interceptors.request.use((config) => {
      if (this.isTokenExpired()) {
        this.clearTokens();
      }
      return config;
    });

    this.api.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        if (
          error?.response?.status === 401 &&
          this.authToken &&
          this.refreshToken &&
          !refreshTokenUsed.has(this.refreshToken)
        ) {
          refreshTokenUsed.add(this.refreshToken);
        }
        return Promise.reject(error);
      },
    );
  }

  /**
   * It clears the tokens from the class properties
   */
  public clearTokens(): void {
    this.authToken = '';
    this.authTokenDecoded = undefined;
    this.refreshToken = '';
    this.refreshTokenDecoded = undefined;
  }

  /**
   * If the credential is a user credential, authenticate as a user. If the credential is an tenant
   * credential, authenticate as an tenant. If the credential is neither, throw an error
   */
  public async authenticate(credential: Credential): Promise<void> {
    if (isTokenCredential(credential)) {
      await this.authenticateAsUserWithToken(credential);
    } else {
      throw new Error('Invalid credentials');
    }
    this.credential = credential;
  }

  /**
   * If there's a credential, authenticate with it.
   */
  public async reAuthenticate(): Promise<void> {
    if (!this.credential) throw new Error('No credential found');
    await this.authenticate(this.credential);
  }

  /**
   * Return the credential type.
   * @param {Credential} credential - Credential - The credential object that you want to check the
   * type of.
   * @returns CredentialType or null
   */
  public getCredentialType(credential: Credential): CredentialType | null {
    if (isTokenCredential(credential)) {
      return CredentialType.Token;
    }

    return null;
  }

  /**
   * If the length of the authToken is greater than 0, then the user is authenticated
   * @returns A boolean value.
   */
  public isAuthenticated(): boolean {
    return this.authToken.length > 0;
  }

  /**
   * If the token is valid, set the token and the decoded token
   * @param {string} token - The token to set.
   * @returns The token is being returned.
   */
  protected setAuthToken(token: string): void {
    if (!token || token?.length === 0) throw new Error('Invalid token');
    if (this.authToken === token) return;

    const decoded = jwt_decode<JwtPayload>(token);

    if (!decoded.exp) throw new Error('Invalid decoded token');

    this.authTokenDecoded = decoded;
    this.authToken = token;
    this.api.setSecurityData({ bearer: token });
  }

  /**
   * If the auth token is expired, return true otherwise return false
   * @returns A boolean value.
   */
  public isTokenExpired(): boolean {
    const offset = this.options?.tokenExpireOffset || 0;
    if (offset < 0) return true;
    if (!this.authTokenDecoded?.exp || !this.refreshTokenDecoded?.exp) {
      return true;
    }

    const nextExpiration = Math.min(this.authTokenDecoded.exp, this.refreshTokenDecoded?.exp) * 1000;
    return datefns.isPast(datefns.subSeconds(nextExpiration, offset));
  }

  /**
   * It returns the value of the authToken property
   * @returns The authToken
   */
  public getAuthToken(): string {
    return this.authToken.toString();
  }

  /**
   * If the new token is the same as the old token, do nothing. Otherwise, set the new token
   * @param {string} token - The token to be set.
   * @returns The refresh token is being returned.
   */
  protected setRefreshToken(token: string): void {
    if (this.refreshToken === token) return;

    const decoded = jwt_decode<JwtPayload>(token);

    if (!decoded.exp) throw new Error('Invalid decoded token');

    this.refreshTokenDecoded = decoded;
    this.refreshToken = token;
  }

  /**
   * This function returns the refresh token
   * @returns The refresh token.
   */
  public getRefreshToken(): string {
    return this.refreshToken.toString();
  }

  /**
   * It sets the token and refresh token in the SDK instance.
   * @param {TokenCredential} credential - TokenCredential
   */
  private async authenticateAsUserWithToken(credential: TokenCredential): Promise<void> {
    if (!credential.authToken) {
      throw new Error('Authentication failed. Auth token is missing.');
    }

    this.setAuthToken(credential.authToken);
    this.setRefreshToken(credential.refreshToken);
  }

  /**
   * Get decoded token if exists.
   * @returns The decoded token.
   */
  getAuthTokenDecoded(): JwtPayload | undefined {
    return this.authTokenDecoded;
  }

  /**
   * Get decoded refresh token if exists.
   * @returns The decoded refresh token.
   */
  getRefreshTokenDecoded(): JwtPayload | undefined {
    return this.refreshTokenDecoded;
  }

  /**
   * Decode the JWT payload
   * @param {string} token - The token to decode.
   * @returns The decoded token.
   */
  static decodeToken(token: string): JwtPayload | undefined {
    return jwt_decode<JwtPayload>(token, {});
  }
}
