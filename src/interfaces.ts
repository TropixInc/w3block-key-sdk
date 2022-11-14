import { W3blockIdSDK } from '@w3block/sdk-id';
import { JwtType } from './enums';

export interface UserCredential {
  /** @example user@example.com */
  email: string;

  /** @example P@ssw0rd */
  password: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
}

export interface TenantCredential {
  key: string;
  secret: string;
  tenantId: string;
}

export interface TokenCredential {
  authToken: string;
  refreshToken: string;
  tenantId: string;
}

export type Credential = UserCredential | TenantCredential | TokenCredential;

export interface W3blockKeySDKOptions {
  baseURL?: string;
  idSdk: W3blockIdSDK;
}

/**
 * If the credential has an authToken property, then it's a TokenCredential.
 * @param {Credential} credential - Credential - This is the credential that we're checking to see if
 * it's a TokenCredential.
 * @returns A function that takes a credential and returns a boolean.
 */
export const isTokenCredential = (credential: Credential): credential is TokenCredential => {
  return (credential as TokenCredential).authToken !== undefined;
};

export interface JwtPayload {
  sub: string;
  iss: string;
  aud?: string | string[];
  exp?: number;
  iat?: number;
  type: JwtType;
}
