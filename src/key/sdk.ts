import { W3blockKeySDKOptions } from '../interfaces';
import { AxiosRequestConfig } from 'axios';
import { Api } from './api/api';
import { W3blockIdSDK } from '@w3block/sdk-id';

export type ApiSecurityDataType = { bearer: string | null };

export class W3blockKeySDK {
  public api: Api<ApiSecurityDataType>;
  protected authToken: string | null = null;
  protected options: W3blockKeySDKOptions;

  protected defaultOptions: Partial<W3blockKeySDKOptions> = {
    baseURL: process.env.KEY_API_BASE_URL || 'https://api.w3block.io',
  };

  constructor(options: W3blockKeySDKOptions) {
    this.options = Object.assign({}, this.defaultOptions, options);

    // noinspection SuspiciousTypeOfGuard
    if (!(this.options.idSdk instanceof W3blockIdSDK)) {
      throw new Error(`You most inform a valid instance of W3BLockIdSDK to use Key SDK`);
    }

    this.options.idSdk.emitter.on('authChanged', (event) => {
      this.setAuthToken(event.authToken);
    });

    this.api = new Api<ApiSecurityDataType>({
      baseURL: options.baseURL,
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
  }

  /**
   * Sets the ID SDK current authenticated jwt token to be used into all requests
   * @param {string} token - The token to be set.
   */
  protected setAuthToken(token: string | null): void {
    if (this.authToken === token) return;
    this.authToken = !token ? null : token;
    this.api.setSecurityData({ bearer: token });
  }

  /**
   * Gets current logged in token
   * @return {string | null} - The authentication token or null if is not authenticated.
   */
  getToken(): string | null {
    return this.authToken;
  }

  /**
   * Checks if sdk is authenticated
   * @return {boolean} -  True if is authenticated, false otherwise.
   */
  isAuthenticated(): boolean {
    return Boolean(this.authToken);
  }
}
