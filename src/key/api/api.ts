/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MigrationDto {
  id: number;
  timestamp: number;
  name: string;
  instance: object;
}

export interface PendingMigrationsResponseDto {
  count: number;
  pending: boolean;
  migrations: string[];
}

export enum VerificationType {
  Numeric = 'numeric',
  Invisible = 'invisible',
}

export interface AccountCompleteRetryDto {
  email: string;
  companyId: string;
  /** @default "invisible" */
  verificationType?: VerificationType;
}

export interface InviteExternalContactDto {
  name: string;
  email?: string;
  phone?: string;
  walletAddress: string;
  royaltyEligible: boolean;
}

export enum ExternalContactMethodType {
  Invite = 'invite',
  Import = 'import',
}

export interface ExternalContactEntityDto {
  id: string;
  companyId: string;
  active: boolean;
  name: string;
  userId?: string;
  walletAddress: string;
  email?: string;
  description?: string;
  /**
   * @default "import"
   * @example "import"
   */
  method: ExternalContactMethodType;
  address?: string;
  phone?: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface PaginationMetaDto {
  /** @example 1 */
  itemCount: number;
  /** @example 1 */
  totalItems?: number;
  /** @example 1 */
  itemsPerPage: number;
  /** @example 1 */
  totalPages?: number;
  /** @example 1 */
  currentPage: number;
}

export interface PaginationLinksDto {
  /** @example "http://example.com?page=1" */
  first?: string;
  /** @example "http://example.com?page=1" */
  prev?: string;
  /** @example "http://example.com?page=2" */
  next?: string;
  /** @example "http://example.com?page=3" */
  last?: string;
}

export interface ExternalContactPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: ExternalContactEntityDto[];
}

export interface UpdateExternalContactDto {
  name?: string;
  email?: string;
  phone?: string;
  walletAddress?: string;
}

export interface CreateRoyaltyEligibleDto {
  active: boolean;
  displayName: string;
  userId?: string;
  externalContactId?: string;
}

export interface RoyaltyEligibleEntityDto {
  id: string;
  companyId: string;
  active: boolean;
  displayName: string;
  userId?: string;
  externalContact?: ExternalContactEntityDto;
  externalContactId?: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface RoyaltyEligibleWithWalletsDto {
  id: string;
  companyId: string;
  active: boolean;
  displayName: string;
  userId?: string;
  externalContact?: ExternalContactEntityDto;
  externalContactId?: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  walletAddress?: string;
}

export interface RoyaltyEligibleResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: RoyaltyEligibleWithWalletsDto[];
}

export interface AlterRoyaltyEligibleDto {
  active: boolean;
  userId?: string;
  externalContactId?: string;
}

export interface RoyaltyParticipantsDto {
  /** @example null */
  contactId?: string;
  /** @example 2.5 */
  share: number;
  /** @example "Participant 1" */
  name: string;
  /** @example "0x095358452C33916513a3827a2D086da1aCEd7EE0" */
  payee: string;
}

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Kovan = 42,
  Local = 1337,
  Mumbai = 80001,
  Polygon = 137,
}

export enum ContractFeature {
  AdminMinter = 'admin:minter',
  AdminBurner = 'admin:burner',
  AdminMover = 'admin:mover',
  UserBurner = 'user:burner',
  UserMover = 'user:mover',
}

export interface CreateContractDto {
  /** @example "Contract Example" */
  name: string;
  /** @example "CE" */
  symbol: string;
  /**
   * @default 4
   * @example 4
   */
  chainId: ChainId;
  description?: object;
  /** @example "https://dummyimage.com/600x400/fff/000" */
  image?: object;
  /** @example "https://stg.pixway.io" */
  externalLink?: object;
  participants: RoyaltyParticipantsDto[];
  /** @example ["admin:mover","admin:minter","admin:burner","user:burner","user:mover"] */
  features?: ContractFeature[];
  /** @format uuid */
  transferWhitelistId?: object;
  /** @format uuid */
  minterWhitelistId?: object;
  /** @example null */
  maxSupply?: string;
}

export enum ContractStatus {
  Draft = 'draft',
  Publishing = 'publishing',
  Published = 'published',
  Failed = 'failed',
}

export enum ContractActionStatus {
  Created = 'created',
  Started = 'started',
  Success = 'success',
  Failed = 'failed',
  WaitEvent = 'wait_event',
}

export enum ContractActionType {
  FactoryERC721A = 'factoryERC721A',
  GrantRole = 'grantRole',
}

export interface ContractActionEntityDto {
  id: string;
  companyId: string;
  /**
   * @default "started"
   * @example "started"
   */
  status: ContractActionStatus;
  /** @example "factoryERC721A" */
  type: ContractActionType;
  /** @example 80001 */
  chainId: ChainId;
  sender: string;
  txHash?: string;
  txId?: string;
  metadata: object;
  request: object;
  /** @format date-time */
  executeAt: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface NftContractEntityDto {
  /** @format uuid */
  id: string;
  /** @format uuid */
  companyId: string;
  royalty?: object;
  /** @format uuid */
  royaltyId?: string;
  address?: string;
  chainId: number;
  name: string;
  symbol: string;
  description?: string;
  image?: string;
  externalLink?: string;
  operators: string[];
  roles: any[][];
  /**
   * @default "draft"
   * @example "draft"
   */
  status: ContractStatus;
  contractAction?: ContractActionEntityDto;
  contractActionId?: string;
  features: ContractFeature[];
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format uuid */
  transferWhitelistId?: string;
  /** @format uuid */
  minterWhitelistId?: string;
  maxSupply?: number;
}

export enum ContractOperatorRole {
  Mover = 'mover',
  Minter = 'minter',
}

export interface HasRoleDto {
  /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
  address: string;
  /**
   * @default 4
   * @example 4
   */
  chainId: ChainId;
  /**
   * @default "mover"
   * @example "mover"
   */
  role: ContractOperatorRole;
  /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
  contractAddress: string;
}

export interface HasRoleResponseDto {
  hasRole: boolean;
}

export interface UpdateContractDto {
  /** @example "Contract Example" */
  name?: string;
  /** @example "CE" */
  symbol?: string;
  /**
   * @default 4
   * @example 4
   */
  chainId?: ChainId;
  description?: object;
  /** @example "https://dummyimage.com/600x400/fff/000" */
  image?: object;
  /** @example "https://stg.pixway.io" */
  externalLink?: object;
  participants?: RoyaltyParticipantsDto[];
  /** @example ["admin:mover","admin:minter","admin:burner","user:burner","user:mover"] */
  features?: ContractFeature[];
  /** @format uuid */
  transferWhitelistId?: object;
  /** @format uuid */
  minterWhitelistId?: object;
  /** @example null */
  maxSupply?: string;
}

export interface NftContractPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: NftContractEntityDto[];
}

export interface TotalGasPriceDto {
  safe: string;
  proposed: string;
  fast: string;
}

export interface ContractEstimateGasResponseDto {
  totalGas: number;
  totalGasPrice: TotalGasPriceDto;
}

export interface EventNotifyDto {
  /** @example 256 */
  blockNumber: number;
  /** @example "0x75a3c22ef6e394a496fb7cdb16c9c5a975d6c4950f931a9df9bff38a2a9371a7" */
  blockHash: string;
  /** @example "0x9882f164a13ad7cfaeb682d36415f6bd8d0348f7f738b85c7668665fa00956c4" */
  transactionHash: string;
  /** @example "0x82dbB0A14F79f50c8f8e0D50FC9F1ef30Aeb6C79" */
  address: string;
  topics: string[];
  /** @example "0x" */
  data: string;
  /** @example 0 */
  logIndex: number;
  /**
   * @default 4
   * @example 4
   */
  chainId: ChainId;
  /** @example 1653579785 */
  timestamp: number;
  /** @example "Transfer" */
  name: string;
  /** @example "Transfer(address,address,uint256)" */
  signature: string;
  /** @example "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" */
  topic: string;
  /** @example 0 */
  transactionIndex: number;
  /** @example {"from":"0x0000000000000000000000000000000000000000","to":"0xe5dc6eb721b535ece3be1b3220be2ce41ac284fc","tokenId":{"_hex":"0x03","_isBigNumber":true}} */
  args: object;
  transactionId?: string;
}

export interface RoyaltyPlatformDto {
  /** @example "W3block" */
  name?: string;
  /** @example 2 */
  share?: number;
  /** @example "0xbc99eb9e5a05c72ca34c3554d12266e7a48e63b7" */
  payee?: string;
}

export interface CreateCompanyDto {
  /**
   * Id in W3blockID
   * @format uuid
   */
  tenantId: string;
  platformRoyalty?: RoyaltyPlatformDto;
}

export interface TransferConfigDto {
  transferDelay?: number;
}

export interface CustomEmailTemplateDto {
  subject: string;
  greetingText: string;
  template: string;
}

export interface CustomEmailsTemplatesDto {
  successTransferEmail?: CustomEmailTemplateDto;
  completeAccountEmail?: CustomEmailTemplateDto;
  ecommerceProcessingOrderEmail?: CustomEmailTemplateDto;
}

export interface CompanyEntityDto {
  id: string;
  defaultOwnerAddress?: string;
  transferConfig?: TransferConfigDto;
  gasRetry?: number;
  platformRoyalty: RoyaltyPlatformDto;
  customEmailsTemplates: CustomEmailsTemplatesDto;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface CompanyPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: any[][];
}

export interface UpdateCompanyDto {
  /**
   * Id in W3blockID
   * @format uuid
   */
  tenantId?: string;
  platformRoyalty?: RoyaltyPlatformDto;
}

export interface CreateCustomEmailDto {
  trigger: 'successTransferEmail' | 'completeAccountEmail' | 'ecommerceProcessingOrderEmail';
  subject: string;
  greetingText: string;
  template: string;
}

export interface UpdateGasRetryDto {
  gasRetry: number;
}

export interface BulkTokenEditionByCollectionDto {
  jobId: string;
}

export enum TokenCollectionStatus {
  Draft = 'draft',
  Published = 'published',
}

export interface YearConfigDTO {
  min: number;
  max?: number;
}

export interface GenericConfigDTO {
  required: object;
  label: string;
  tooltip?: string;
  placeholder?: string;
  order: number;
  childrenType?:
    | 'SELECT'
    | 'TEXTFIELD'
    | 'TEXTAREA'
    | 'NUMERIC_TEXTFIELD'
    | 'DATE'
    | 'YEAR'
    | 'SINGLE_IMAGE'
    | 'DIMENSIONS_2D'
    | 'DIMENSIONS_3D'
    | 'RADIOGROUP'
    | 'BOOLEAN'
    | 'LIST'
    | 'COMPLEX';
  range?: YearConfigDTO;
  options?: string[];
  float?: boolean;
}

export interface DynamicFormItemConfigurationDTO {
  type:
    | 'SELECT'
    | 'TEXTFIELD'
    | 'TEXTAREA'
    | 'NUMERIC_TEXTFIELD'
    | 'DATE'
    | 'YEAR'
    | 'SINGLE_IMAGE'
    | 'DIMENSIONS_2D'
    | 'DIMENSIONS_3D'
    | 'RADIOGROUP'
    | 'BOOLEAN'
    | 'LIST'
    | 'COMPLEX';
  config: GenericConfigDTO;
  children?: object;
}

export interface DynamicFormConfigurationDTO {
  prop1?: DynamicFormItemConfigurationDTO;
  prop2?: DynamicFormItemConfigurationDTO;
}

export interface TokenCollectionDto {
  id: string;
  companyId: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /**
   * @default "draft"
   * @example "draft"
   */
  status: TokenCollectionStatus;
  contractId?: string;
  subcategoryId?: string;
  name: string;
  description?: string;
  mainImage?: string;
  tokenData?: object;
  publishedTokenTemplate?: DynamicFormConfigurationDTO;
  quantity: number;
  initialQuantityToMint: number;
  rangeInitialToMint?: string;
  quantityMinted: number;
  rfids: string[];
  ownerAddress?: string;
  pass: boolean;
  similarTokens: boolean;
}

export interface NftContractDto {
  /** @format uuid */
  id: string;
  /** @format uuid */
  companyId: string;
  /** @format uuid */
  royaltyId?: string;
  address?: string;
  chainId: number;
  name: string;
  symbol: string;
  description?: string;
  image?: string;
  externalLink?: string;
  operators: string[];
  roles: any[][];
  /**
   * @default "draft"
   * @example "draft"
   */
  status: ContractStatus;
  contractActionId?: string;
  features: ContractFeature[];
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format uuid */
  transferWhitelistId?: string;
  /** @format uuid */
  minterWhitelistId?: string;
  maxSupply?: number;
}

export enum TokenEditionStatusEnum {
  ImportError = 'importError',
  Draft = 'draft',
  DraftError = 'draftError',
  ReadyToMint = 'readyToMint',
  Minting = 'minting',
  Minted = 'minted',
  Burning = 'burning',
  Burned = 'burned',
  BurnFailure = 'burnFailure',
  Transferring = 'transferring',
  Transferred = 'transferred',
  TransferFailure = 'transferFailure',
}

export enum NFTMintingStatus {
  Created = 'created',
  Started = 'started',
  Minted = 'minted',
  Cancelled = 'cancelled',
  Failed = 'failed',
}

export interface NFTMintingDto {
  id: string;
  companyId: string;
  contractId: string;
  contractAddress: string;
  ownerAddress: string;
  sender: string;
  chainId: number;
  startEdition: number;
  endEdition: number;
  batchNumber: number;
  /** @example "created" */
  status: NFTMintingStatus;
  txHash?: string;
  txId?: string;
  /** @format date-time */
  mintedAt?: string;
  metadata: object;
  nfts?: any[][];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface TokenEditionPublicDto {
  id: string;
  companyId: string;
  editionNumber: number;
  tokenCollection: TokenCollectionDto;
  contractId?: string;
  contract?: NftContractDto;
  tokenCollectionId: string;
  rfid?: string;
  /**
   * @default "draft"
   * @example "draft"
   */
  status: TokenEditionStatusEnum;
  contractAddress?: string;
  ownerAddress?: string;
  chainId?: number;
  tokenId?: number;
  mintedHash?: string;
  /** @format date-time */
  mintedAt?: string;
  nftMinting?: NFTMintingDto;
  nftMintingId?: string;
  name?: string;
  description?: string;
  mainImage?: string;
  tokenData?: object;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  mintedAddress: string;
}

export interface TokenEditionPublicPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TokenEditionPublicDto[];
}

export interface RfidResponseDTO {
  used: boolean;
}

export interface ChangeStatusReadyToMintDto {
  /**
   * Array of token ids
   * @example []
   */
  editionId: string[];
}

export interface MintOnDemandDto {
  /**
   * Array of edition number
   * @example []
   */
  editionNumbers: number;
  /** @format uuid */
  collectionId: string;
  ownerAddress: string;
}

export interface TransferTokensDto {
  toAddress: string;
  /**
   * Array of token ids
   * @example []
   */
  editionId: string[];
}

export interface UpdateTokenEditionDto {
  /** @example "Token Collection" */
  name?: string;
  /** @example "" */
  description?: string;
  /** @example "https://dummyimage.com/600x400/fff/000" */
  mainImage?: string;
  /** @example {"title":"Title example"} */
  tokenData?: object;
  /** @example null */
  rfid?: string;
}

export interface TokenEditionEntityDto {
  id: string;
  companyId: string;
  editionNumber: number;
  tokenCollection: TokenCollectionDto;
  contractId?: string;
  contract?: NftContractDto;
  tokenCollectionId: string;
  rfid?: string;
  /**
   * @default "draft"
   * @example "draft"
   */
  status: TokenEditionStatusEnum;
  contractAddress?: string;
  ownerAddress?: string;
  chainId?: number;
  tokenId?: number;
  mintedHash?: string;
  /** @format date-time */
  mintedAt?: string;
  nftMinting?: NFTMintingDto;
  nftMintingId?: string;
  name?: string;
  description?: string;
  mainImage?: string;
  tokenData?: object;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface BurnTokensDto {
  tokens: string[];
}

export interface ChangeRfidDto {
  /** @example "zf4pg538qx" */
  rfid: string;
}

export interface TransferTokenByEditionDto {
  toAddress: string;
}

export enum NftActionStatus {
  Created = 'created',
  Started = 'started',
  Success = 'success',
  Failed = 'failed',
  WaitEvent = 'wait_event',
}

export interface ActionMetadataDto {
  status: string;
  message: string;
}

export interface ActionResponseDto {
  toAddress: string;
  sender: string;
  /**
   * @default "created"
   * @example "created"
   */
  status: NftActionStatus;
  txHash: string;
  /**
   * @default 80001
   * @example 80001
   */
  chainId: ChainId;
  metadata: ActionMetadataDto;
}

export interface CollectionSearchDto {
  /** @example "0x389dd295657a6fb2336aa33e40aeb8fb81f97fe4" */
  contractAddress: string;
  /**
   * @default 4
   * @example 80001
   */
  chainId: 1 | 3 | 4 | 42 | 1337 | 80001 | 137;
  /** @example 1 */
  startTokenId?: number;
  /** @example 100 */
  endTokenId?: number;
}

export interface CheckCollectionTokenHolderDto {
  /** @example ["0x82dbB0A14F79f50c8f8e0D50FC9F1ef30Aeb6C79","0x39926ceceb3cc78ab2cced96f217df3e7bed48c1"] */
  walletAddresses: string[];
  collections: CollectionSearchDto[];
}

export interface CreateTokenCollectionDto {
  /** @example "" */
  contractId?: string;
  /** @example "uuid" */
  subcategoryId: string;
  /** @example "Token Collection" */
  name: string;
  /** @example "" */
  description?: string;
  /** @example "https://dummyimage.com/600x400/fff/000" */
  mainImage?: string;
  /** @example {"title":"Title example"} */
  tokenData?: object;
  /** @example 0 */
  quantity: object;
  /** @example "*" */
  rangeInitialToMint: object;
  /** @example null */
  ownerAddress?: string;
  /** @example true */
  similarTokens?: boolean;
}

export type SubcategoryEntity = object;

export interface CategoryEntityDto {
  id: string;
  companyId: string;
  subcategories: SubcategoryEntity[];
  name: string;
  image: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface SubcategoryEntityDto {
  id: string;
  companyId: string;
  category: CategoryEntityDto;
  categoryId: string;
  name: string;
  tokenTemplate: DynamicFormConfigurationDTO;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  certificateTemplate?: string;
}

export interface TokenCollectionEntityDto {
  id: string;
  companyId: string;
  /** @format date-time */
  deletedAt?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /**
   * @default "draft"
   * @example "draft"
   */
  status: TokenCollectionStatus;
  contract: NftContractDto;
  contractId?: string;
  subcategory: SubcategoryEntityDto;
  subcategoryId?: string;
  name: string;
  description?: string;
  mainImage?: string;
  tokenData?: object;
  publishedTokenTemplate?: DynamicFormConfigurationDTO;
  quantity: number;
  initialQuantityToMint: number;
  rangeInitialToMint?: string;
  quantityMinted: number;
  rfids: string[];
  ownerAddress?: string;
  pass: boolean;
  similarTokens: boolean;
}

export interface JobIdResponseDto {
  jobId?: string;
}

export interface UpdateTokenCollectionDto {
  /** @example "" */
  contractId?: string;
  /** @example "Token Collection" */
  name: string;
  /** @example "" */
  description?: string;
  /** @example "https://dummyimage.com/600x400/fff/000" */
  mainImage?: string;
  /** @example {"title":"Title example"} */
  tokenData?: object;
  /** @example 0 */
  quantity: object;
  /** @example "*" */
  rangeInitialToMint: object;
  /** @example null */
  ownerAddress?: string;
}

export interface PublishTokenCollectionResponseDto {
  tokenCollection: TokenCollectionEntityDto;
}

export interface TokenCollectionPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TokenCollectionEntityDto[];
}

export type Map = object;

export interface CreateSubcategoryDto {
  categoryId: string;
  name: string;
  tokenTemplate: Map;
  certificateTemplate?: string;
}

export interface UpdateSubcategoryDto {
  categoryId?: string;
  name?: string;
  tokenTemplate?: Map;
  certificateTemplate?: string;
}

export interface CreateCategoryDto {
  name: string;
  image: string;
}

export interface UpdateCategoryDto {
  name?: string;
  image?: string;
}

export interface SignaturePayloadResponseDto {
  apiKey: string;
  signature: string;
  timestamp: number;
  publicId: string;
  uploadPreset: string;
}

export enum JobStatusesEnum {
  Pending = 'pending',
  Running = 'running',
  Finished = 'finished',
  Failed = 'failed',
}

export interface JobEntityDto {
  id: string;
  data: object;
  reasons?: string[];
  companyId?: string;
  userId?: string;
  description: string;
  /**
   * @default "pending"
   * @example "pending"
   */
  status: JobStatusesEnum;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface JobPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: JobEntityDto[];
}

export interface TokenEditionInformationBaseResponseDto {
  /**
   * @default 4
   * @example 4
   */
  chainId: ChainId;
  /** @example "0x0000000000000000000000000000000000000000" */
  contractAddress: string;
  /** @example 1 */
  editionNumber: number;
  /** @example 1 */
  tokenId?: number | null;
  /** @example true */
  isAvailable: boolean;
  /** @format uuid */
  id: string;
  /** @example "minted" */
  status: TokenEditionStatusEnum;
}

export interface TokenPayloadAttributeDto {
  trait_type: string;
  value: object;
}

export interface TokenPayloadDto {
  name: string;
  image: string;
  description: string;
  id: number;
  attributes: TokenPayloadAttributeDto[];
}

export interface NFTsMetadataResponseDto {
  prop1: object;
  prop2: object;
}

export interface CompanyThemeDto {
  headerLogoUrl?: string;
  headerBackgroundColor: string;
  bodyCardBackgroundColor: string;
}

export interface CompanyPublicDataDto {
  id: string;
  name: string;
  theme: CompanyThemeDto;
}

export interface PublicDataGroupDto {
  categoryId: string;
  categoryName: string;
  subcategoryId: string;
  subcategoryName: string;
  collectionId: string;
  collectionName: string;
  collectionPass: boolean;
}

export interface PublicDataInformationDto {
  title: string;
  mainImage?: string;
  contractName: string;
  description?: string;
}

export interface PublicDataDynamicInformationDto {
  tokenData?: object;
  publishedTokenTemplate?: DynamicFormConfigurationDTO;
}

export interface PublicDataEditionDto {
  total: number;
  currentNumber: number;
  rfid: string;
  isMultiple: boolean;
  /** @format date-time */
  mintedAt?: string;
  mintedHash?: string;
}

export interface PublicDataTokenDto {
  address: string;
  chainId: number;
  tokenId?: number;
  firstOwnerAddress?: string;
}

export interface PublicPageDataDto {
  company: CompanyPublicDataDto;
  group: PublicDataGroupDto;
  information: PublicDataInformationDto;
  dynamicInformation: PublicDataDynamicInformationDto;
  certificateTemplate: string;
  certificateLink: string;
  edition: PublicDataEditionDto;
  token: PublicDataTokenDto;
  isMinted: boolean;
}

export interface ContractBcDataDto {
  id: string;
  image?: string;
  name: string;
  description?: string;
  external_link?: string;
  seller_fee_basis_points?: number;
  fee_recipient?: string;
}

export interface CountDto {
  started: number;
  pending: number;
}

export interface CountTransactionsResponseDto {
  mint: CountDto;
  action: CountDto;
  contract: CountDto;
  total: CountDto;
}

export enum MetadataHistorySortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export interface CreateContactDto {
  name: string;
  description: string;
  email: string;
}

export interface ContactEntityDto {
  id: string;
  name: string;
  description: string;
  /** @example "anymail@email.com" */
  email: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export namespace Health {
  /**
 * No description
 * @tags Health
 * @name Check
 * @request GET:/health
 * @response `200` `{
  \** @example "ok" *\
    status?: string,
  \** @example {"database":{"status":"up"}} *\
    info?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {} *\
    error?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {"database":{"status":"up"}} *\
    details?: Record<string,{
    status?: string,
    [key: string]: any,

}>,

}` The Health Check is successful
 * @response `503` `{
  \** @example "error" *\
    status?: string,
  \** @example {"database":{"status":"up"}} *\
    info?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {"redis":{"status":"down","message":"Could not connect"}} *\
    error?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} *\
    details?: Record<string,{
    status?: string,
    [key: string]: any,

}>,

}` The Health Check is not successful
*/
  export namespace Check {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @example "ok" */
      status?: string;
      /** @example {"database":{"status":"up"}} */
      info?: Record<
        string,
        {
          status?: string;
          [key: string]: any;
        }
      >;
      /** @example {} */
      error?: Record<
        string,
        {
          status?: string;
          [key: string]: any;
        }
      >;
      /** @example {"database":{"status":"up"}} */
      details?: Record<
        string,
        {
          status?: string;
          [key: string]: any;
        }
      >;
    };
  }
  /**
   * No description
   * @tags Health
   * @name GetLiveness
   * @request GET:/health/liveness
   * @response `204` `void`
   */
  export namespace GetLiveness {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Health
   * @name GetReadiness
   * @request GET:/health/readiness
   * @response `204` `void`
   */
  export namespace GetReadiness {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Health
   * @name Index
   * @request GET:/health/metrics
   * @response `204` `void`
   */
  export namespace Index {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Util {
  /**
   * @description Run pending migrations
   * @tags Util
   * @name RunMigrations
   * @request POST:/migrations/run
   * @secure
   * @response `200` `(MigrationDto)[]`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace RunMigrations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MigrationDto[];
  }
  /**
   * @description Revert a migration
   * @tags Util
   * @name RevertMigrations
   * @request POST:/migrations/revert
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace RevertMigrations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description List pending database migrations
   * @tags Util
   * @name GetPendingMigrations
   * @request GET:/migrations/pending
   * @secure
   * @response `200` `PendingMigrationsResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace GetPendingMigrations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PendingMigrationsResponseDto;
  }
  /**
   * @description Get all migrations
   * @tags Util
   * @name GetAllMigrations
   * @request GET:/migrations/list
   * @secure
   * @response `200` `(MigrationDto)[]`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace GetAllMigrations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MigrationDto[];
  }
}

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name AccountCompleteRetry
   * @request POST:/users/account-complete/retry
   * @secure
   * @response `204` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace AccountCompleteRetry {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AccountCompleteRetryDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Authentication {
  /**
   * No description
   * @tags Authentication
   * @name VerifySignUp
   * @request GET:/auth/verify-sign-up
   * @response `204` `void`
   */
  export namespace VerifySignUp {
    export type RequestParams = {};
    export type RequestQuery = {
      email: string;
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace ExternalContactsByCompany {
  /**
   * No description
   * @tags External contacts
   * @name Invite
   * @request POST:/{companyId}/external-contacts/invite
   * @deprecated
   * @secure
   * @response `201` `ExternalContactEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Invite {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InviteExternalContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
  /**
   * @description Create a new external contact
   * @tags External contacts
   * @name Create
   * @request POST:/{companyId}/external-contacts/import
   * @secure
   * @response `201` `ExternalContactEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Create {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InviteExternalContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
  /**
   * @description List external contacts by company id
   * @tags External contacts
   * @name FindAll
   * @request GET:/{companyId}/external-contacts
   * @secure
   * @response `200` `ExternalContactPaginateResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
      id?: string[];
      userIds?: string[];
      /** @example "2022-02-15T10:30:05-03:00" */
      minDate?: string;
      /** @example "2022-02-15T10:30:05-03:00" */
      maxDate?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactPaginateResponseDto;
  }
  /**
   * @description Get a external contact by id
   * @tags External contacts
   * @name FindOne
   * @request GET:/{companyId}/external-contacts/{id}
   * @secure
   * @response `200` `ExternalContactEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
  /**
   * @description Update a external contact by id
   * @tags External contacts
   * @name Update
   * @request PATCH:/{companyId}/external-contacts/{id}
   * @secure
   * @response `200` `ExternalContactEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Update {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateExternalContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
}

export namespace ContractsRoyaltyEligibleByCompany {
  /**
   * @description Create a royalty eligible entity (makes a contact eligible for royalties in contracts)
   * @tags Contracts - Royalty Eligible
   * @name Create
   * @request POST:/{companyId}/contracts/royalty-eligible/create
   * @secure
   * @response `201` `RoyaltyEligibleEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Create {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateRoyaltyEligibleDto;
    export type RequestHeaders = {};
    export type ResponseBody = RoyaltyEligibleEntityDto;
  }
  /**
   * @description Get all royalty eligibles by company
   * @tags Contracts - Royalty Eligible
   * @name FindAll
   * @request GET:/{companyId}/contracts/royalty-eligible
   * @secure
   * @response `200` `RoyaltyEligibleResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
      /** @example "2022-02-15T10:30:05-03:00" */
      minDate?: string;
      /** @example "2022-02-15T10:30:05-03:00" */
      maxDate?: string;
      id?: string[];
      userIds?: string[];
      externalContactIds?: string[];
      wallets?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RoyaltyEligibleResponseDto;
  }
  /**
   * @description Activate or deactivate a royalty eligible
   * @tags Contracts - Royalty Eligible
   * @name Upsert
   * @request PATCH:/{companyId}/contracts/royalty-eligible
   * @secure
   * @response `200` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Upsert {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AlterRoyaltyEligibleDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Get a royalty eligible by id
   * @tags Contracts - Royalty Eligible
   * @name FindOne
   * @request GET:/{companyId}/contracts/royalty-eligible/{id}
   * @secure
   * @response `200` `RoyaltyEligibleEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RoyaltyEligibleEntityDto;
  }
}

export namespace ContractsByCompany {
  /**
   * @description Create a new contract draft
   * @tags Contracts
   * @name Create
   * @request POST:/{companyId}/contracts
   * @secure
   * @response `201` `NftContractEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Create {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateContractDto;
    export type RequestHeaders = {};
    export type ResponseBody = NftContractEntityDto;
  }
  /**
   * @description Get all contract from a company
   * @tags Contracts
   * @name FindAll
   * @request GET:/{companyId}/contracts
   * @secure
   * @response `200` `NftContractPaginateResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 1000 */
      limit?: number;
      search?: string;
      sortBy?: string;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
      status?: 'draft' | 'publishing' | 'published' | 'failed';
      contractName?: string;
      /** @example "2022-02-15T10:30:05-03:00" */
      minDate?: string;
      /** @example "2022-02-15T10:30:05-03:00" */
      maxDate?: string;
      contactId?: string;
      participantName?: string;
      walletAddresses?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NftContractPaginateResponseDto;
  }
  /**
   * @description Check address role
   * @tags Contracts
   * @name HasRole
   * @request PATCH:/{companyId}/contracts/has-role
   * @secure
   * @response `200` `HasRoleResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin, integration
   */
  export namespace HasRole {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = HasRoleDto;
    export type RequestHeaders = {};
    export type ResponseBody = HasRoleResponseDto;
  }
  /**
   * @description Grant role by wallet address in an NFT contract
   * @tags Contracts
   * @name GrantRole
   * @request PATCH:/{companyId}/contracts/grant-role
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin, integration
   */
  export namespace GrantRole {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = HasRoleDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Update a draft contract by id
   * @tags Contracts
   * @name Update
   * @request PATCH:/{companyId}/contracts/{id}
   * @secure
   * @response `200` `NftContractEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Update {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateContractDto;
    export type RequestHeaders = {};
    export type ResponseBody = NftContractEntityDto;
  }
  /**
   * @description Get a contract by id
   * @tags Contracts
   * @name FindOne
   * @request GET:/{companyId}/contracts/{id}
   * @secure
   * @response `200` `NftContractEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NftContractEntityDto;
  }
  /**
   * @description Publish a contract on the blockchain
   * @tags Contracts
   * @name Publish
   * @request PATCH:/{companyId}/contracts/{id}/publish
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Publish {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Estimate gas to publish a contract
   * @tags Contracts
   * @name EstimateGas
   * @request GET:/{companyId}/contracts/{id}/estimate-gas
   * @secure
   * @response `200` `ContractEstimateGasResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace EstimateGas {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
}

export namespace Blockchain {
  /**
   * No description
   * @tags Blockchain
   * @name ReceiveEventWebhook
   * @request POST:/blockchain/webhook/event/{companyId}
   * @response `401` `void` Unauthorized - Invalid Pixchain signature
   */
  export namespace ReceiveEventWebhook {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EventNotifyDto;
    export type RequestHeaders = {
      'x-pixchain-signature': string;
    };
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name ReceiveTransactionWebhook
   * @request POST:/blockchain/webhook/transaction/{companyId}
   * @response `401` `void` Unauthorized - Invalid Pixchain signature
   */
  export namespace ReceiveTransactionWebhook {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      'x-pixchain-signature': string;
    };
    export type ResponseBody = any;
  }
  /**
   * @description Gets the wallet with given address balance
   * @tags Blockchain
   * @name GetBalance
   * @request GET:/blockchain/balance/{address}/{chainId}
   * @secure
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace GetBalance {
    export type RequestParams = {
      /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
      address: string;
      /** @example 4 */
      chainId: ChainId;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name GetGas
   * @request GET:/blockchain/gas-cost/{companyId}
   * @deprecated
   * @secure
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace GetGas {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace CompaniesHostsDeprecated {
  /**
   * No description
   * @tags Companies Hosts (Deprecated)
   * @name GetCompanyByHost
   * @request GET:/companies/hosts/by-host
   * @deprecated
   * @secure
   * @response `200` `void`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace GetCompanyByHost {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @example "tropix.pixway.io" */
      host: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Companies {
  /**
   * @description Create a company based on an existing tenant on ID
   * @tags Companies
   * @name Create
   * @request POST:/companies
   * @secure
   * @response `201` `CompanyEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCompanyDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
  /**
   * @description Get all companies
   * @tags Companies
   * @name FindAll
   * @request GET:/companies
   * @secure
   * @response `200` `CompanyPaginateResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace FindAll {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      sortBy?: string;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyPaginateResponseDto;
  }
  /**
   * @description Retries companies wallet creation
   * @tags Companies
   * @name SetupCompany
   * @request PATCH:/companies/{companyId}/setup
   * @secure
   * @response `200` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace SetupCompany {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Get company by company id
   * @tags Companies
   * @name FindOne
   * @request GET:/companies/{companyId}
   * @secure
   * @response `200` `CompanyEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
  /**
   * No description
   * @tags Companies
   * @name Update
   * @request PATCH:/companies/{companyId}
   * @secure
   * @response `200` `CompanyEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Update {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateCompanyDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
  /**
   * No description
   * @tags Companies
   * @name Remove
   * @request DELETE:/companies/{companyId}
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Remove {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Companies
   * @name ResyncCloneContracts
   * @request POST:/companies/resync-clone-contract
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace ResyncCloneContracts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Creates a new email template for a company
   * @tags Companies
   * @name CreateOrUpdateEmail
   * @request POST:/companies/{companyId}/emails
   * @secure
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace CreateOrUpdateEmail {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateCustomEmailDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * @description Get email templates by company id
   * @tags Companies
   * @name FindEmails
   * @request GET:/companies/{companyId}/emails
   * @secure
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace FindEmails {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * @description Updates the value for the maximum percentage allowed for the gas on retry
   * @tags Companies
   * @name CreateOrUpdateGasRetry
   * @request PATCH:/companies/{companyId}/gas-retry
   * @secure
   * @response `200` `CompanyEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace CreateOrUpdateGasRetry {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateGasRetryDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
}

export namespace TokenEditionsByCompany {
  /**
   * @description Retry a bulk mint by collection
   * @tags Token Editions
   * @name Retry
   * @request PATCH:/{companyId}/token-editions/retry-bulk-by-collection
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Retry {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BulkTokenEditionByCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description List all tokens
   * @tags Token Editions
   * @name FindAll
   * @request GET:/{companyId}/token-editions
   * @secure
   * @response `200` `TokenEditionPublicPaginateResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
      tokenCollectionId?: string;
      editionNumber?: number;
      walletAddresses?: string[];
      /** @format uuid */
      userId?: string;
      status?: (
        | 'importError'
        | 'draft'
        | 'draftError'
        | 'readyToMint'
        | 'minting'
        | 'minted'
        | 'burning'
        | 'burned'
        | 'burnFailure'
        | 'transferring'
        | 'transferred'
        | 'transferFailure'
      )[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionPublicPaginateResponseDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name CheckRfid
   * @request GET:/{companyId}/token-editions/check-rfid
   * @secure
   * @response `200` `RfidResponseDTO`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace CheckRfid {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      rfid: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RfidResponseDTO;
  }
  /**
   * @description Change status to ready to mint
   * @tags Token Editions
   * @name ChangeStatusReadyToMint
   * @request PATCH:/{companyId}/token-editions/ready-to-mint
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace ChangeStatusReadyToMint {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ChangeStatusReadyToMintDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Mint on demand
   * @tags Token Editions
   * @name MintOnDemand
   * @request PATCH:/{companyId}/token-editions/mint-on-demand
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin, integration, application
   */
  export namespace MintOnDemand {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MintOnDemandDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Transfer token
   * @tags Token Editions
   * @name TransferToken
   * @request PATCH:/{companyId}/token-editions/transfer-token
   * @secure
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace TransferToken {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TransferTokensDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * @description Edit a token before publishing
   * @tags Token Editions
   * @name EditSingleEdition
   * @request PATCH:/{companyId}/token-editions/{id}
   * @secure
   * @response `201` `TokenEditionEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace EditSingleEdition {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTokenEditionDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionEntityDto;
  }
  /**
   * @description Get a token by id
   * @tags Token Editions
   * @name FindOne
   * @request GET:/{companyId}/token-editions/{id}
   * @secure
   * @response `200` `TokenEditionPublicDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionPublicDto;
  }
  /**
   * @description Estimate gas to mint tokens
   * @tags Token Editions
   * @name EstimateMintGas
   * @request GET:/{companyId}/token-editions/{id}/estimate-gas/mint
   * @secure
   * @response `200` `ContractEstimateGasResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace EstimateMintGas {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {
      /**
       * quantity of token to mint
       * @example 1
       */
      quantityToMint: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * @description Change status to ready to mint by token
   * @tags Token Editions
   * @name ChangeStatusReadyToMintByEdition
   * @request PATCH:/{companyId}/token-editions/{id}/ready-to-mint
   * @secure
   * @response `200` `TokenEditionEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace ChangeStatusReadyToMintByEdition {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionEntityDto;
  }
  /**
   * @description Burn token
   * @tags Token Editions
   * @name BurnTokenEdition
   * @request DELETE:/{companyId}/token-editions/burn
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin, user
   */
  export namespace BurnTokenEdition {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BurnTokensDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Estimate gas to burn
   * @tags Token Editions
   * @name EstimateBurnGas
   * @request GET:/{companyId}/token-editions/{id}/estimate-gas/burn
   * @secure
   * @response `200` `ContractEstimateGasResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin, user
   */
  export namespace EstimateBurnGas {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * @description Change rfid by id
   * @tags Token Editions
   * @name ChangeRfidByEdition
   * @request PATCH:/{companyId}/token-editions/{id}/rfid
   * @secure
   * @response `200` `TokenEditionEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace ChangeRfidByEdition {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ChangeRfidDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionEntityDto;
  }
  /**
   * @description Estimate gas to transfer token
   * @tags Token Editions
   * @name EstimateTransferGas
   * @request GET:/{companyId}/token-editions/{id}/estimate-gas/transfer
   * @secure
   * @response `200` `ContractEstimateGasResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace EstimateTransferGas {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {
      toAddress: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name TransferTokenByEdition
   * @request PATCH:/{companyId}/token-editions/{id}/transfer-token
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace TransferTokenByEdition {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TransferTokenByEditionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Get last transfer or burn transaction
   * @tags Token Editions
   * @name GetLastTransferToken
   * @request GET:/{companyId}/token-editions/{id}/get-last/{type}
   * @secure
   * @response `200` `ActionResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace GetLastTransferToken {
    export type RequestParams = {
      companyId: string;
      id: string;
      type: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActionResponseDto;
  }
}

export namespace Tokens {
  /**
   * No description
   * @tags Tokens
   * @name CheckCollectionTokenHolder
   * @request PATCH:/tokens/check-collection-token-holder
   * @secure
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace CheckCollectionTokenHolder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CheckCollectionTokenHolderDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace TokenCollectionsByCompany {
  /**
   * @description Create a token collection
   * @tags Token Collections
   * @name Create
   * @request POST:/{companyId}/token-collections
   * @secure
   * @response `201` `TokenCollectionEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Create {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateTokenCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenCollectionEntityDto;
  }
  /**
   * @description List collections by company
   * @tags Token Collections
   * @name FindAll
   * @request GET:/{companyId}/token-collections
   * @secure
   * @response `200` `TokenCollectionPaginateResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
      status?: ('draft' | 'published')[];
      contractId?: string;
      subcategoryIds?: string[];
      walletAddresses?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenCollectionPaginateResponseDto;
  }
  /**
   * @description Create the draft tokens for a collection with multiple unique tokens
   * @tags Token Collections
   * @name SyncDraftTokens
   * @request PATCH:/{companyId}/token-collections/{id}/sync-draft-tokens
   * @secure
   * @response `201` `JobIdResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace SyncDraftTokens {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobIdResponseDto;
  }
  /**
   * @description Publish a token Collection
   * @tags Token Collections
   * @name Publish
   * @request PATCH:/{companyId}/token-collections/publish/{id}
   * @secure
   * @response `201` `PublishTokenCollectionResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Publish {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTokenCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = PublishTokenCollectionResponseDto;
  }
  /**
   * @description Marks a token collection is token pass
   * @tags Token Collections
   * @name EnableTokenPass
   * @request PATCH:/{companyId}/token-collections/{id}/pass/enable
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: integration
   */
  export namespace EnableTokenPass {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Disable token pass for a collection
   * @tags Token Collections
   * @name DisableTokenPass
   * @request PATCH:/{companyId}/token-collections/{id}/pass/disable
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: integration
   */
  export namespace DisableTokenPass {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Estimate gas to publish collection
   * @tags Token Collections
   * @name EstimatePublishGas
   * @request GET:/{companyId}/token-collections/estimate-gas
   * @secure
   * @response `200` `ContractEstimateGasResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace EstimatePublishGas {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      /** @example "" */
      contractId: string;
      /** @example 1 */
      initialQuantityToMint: number;
      /** @example null */
      ownerAddress?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * @description Edit draft collection
   * @tags Token Collections
   * @name Update
   * @request PUT:/{companyId}/token-collections/{id}
   * @secure
   * @response `200` `TokenCollectionEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Update {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateTokenCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenCollectionEntityDto;
  }
  /**
   * @description Get a collection by id
   * @tags Token Collections
   * @name FindOne
   * @request GET:/{companyId}/token-collections/{id}
   * @secure
   * @response `200` `TokenCollectionEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenCollectionEntityDto;
  }
  /**
   * @description Burn a collection by id
   * @tags Token Collections
   * @name BurnTokenCollection
   * @request DELETE:/{companyId}/token-collections/{id}/burn
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace BurnTokenCollection {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Delete a draft collection by id
   * @tags Token Collections
   * @name DeleteSingleDraft
   * @request DELETE:/{companyId}/token-collections/{id}/draft
   * @secure
   * @response `204` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace DeleteSingleDraft {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Token Collections
   * @name ExportXlsxTemplate
   * @request GET:/{companyId}/token-collections/{id}/export/xlsx
   * @secure
   * @response `200` `void`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace ExportXlsxTemplate {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Token Collections
   * @name ImportXlsxEditions
   * @request POST:/{companyId}/token-collections/{id}/import/xlsx
   * @secure
   * @response `200` `JobIdResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace ImportXlsxEditions {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = JobIdResponseDto;
  }
}

export namespace SubcategoriesByCompany {
  /**
   * @description Create a new subcategory
   * @tags Subcategories
   * @name Create
   * @request POST:/{companyId}/subcategories
   * @secure
   * @response `201` `SubcategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Create {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateSubcategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto;
  }
  /**
   * @description List subcategories of a company
   * @tags Subcategories
   * @name FindAll
   * @request GET:/{companyId}/subcategories
   * @secure
   * @response `200` `(SubcategoryEntityDto)[]`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      categoryId?: string;
      /** @example "all" */
      scope?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto[];
  }
  /**
   * @description Update a subcategory by id
   * @tags Subcategories
   * @name Update
   * @request PATCH:/{companyId}/subcategories/{id}
   * @secure
   * @response `200` `SubcategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Update {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateSubcategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto;
  }
  /**
   * @description Get a subcategory by id
   * @tags Subcategories
   * @name FindOne
   * @request GET:/{companyId}/subcategories/{id}
   * @secure
   * @response `200` `SubcategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto;
  }
}

export namespace Subcategories {
  /**
   * No description
   * @tags Subcategories
   * @name CreateWithoutCompany
   * @request POST:/subcategories
   * @secure
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace CreateWithoutCompany {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateSubcategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Subcategories
   * @name Update
   * @request PATCH:/subcategories/{id}
   * @originalName update
   * @duplicate
   * @secure
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Update {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateSubcategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace CategoriesByCompany {
  /**
   * @description Create a new NFT category for a company
   * @tags Categories
   * @name Create
   * @request POST:/{companyId}/categories
   * @secure
   * @response `201` `CategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Create {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateCategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
  /**
   * @description Gets all existing NFT category from a company
   * @tags Categories
   * @name FindAll
   * @request GET:/{companyId}/categories
   * @secure
   * @response `200` `(CategoryEntityDto)[]`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto[];
  }
  /**
   * @description Updates an existing NFT category for a company
   * @tags Categories
   * @name Update
   * @request PUT:/{companyId}/categories/{id}
   * @secure
   * @response `200` `CategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace Update {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateCategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
  /**
   * @description Gets an existing NFT category that matches the id
   * @tags Categories
   * @name FindOne
   * @request GET:/{companyId}/categories/{id}
   * @secure
   * @response `200` `CategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      id: string;
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
}

export namespace Categories {
  /**
   * @description Create a new generic NFT category
   * @tags Categories
   * @name Create
   * @request POST:/categories
   * @originalName create
   * @duplicate
   * @secure
   * @response `201` `CategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
  /**
   * @description Gets all existing NFT category
   * @tags Categories
   * @name FindAll
   * @request GET:/categories
   * @originalName findAll
   * @duplicate
   * @secure
   * @response `200` `(CategoryEntityDto)[]`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto[];
  }
  /**
   * @description Updates an existing NFT category
   * @tags Categories
   * @name Update
   * @request PUT:/categories/{id}
   * @originalName update
   * @duplicate
   * @secure
   * @response `200` `CategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin
   */
  export namespace Update {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateCategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
  /**
   * @description Gets an existing NFT category that matches the id
   * @tags Categories
   * @name FindOne
   * @request GET:/categories/{id}
   * @deprecated
   * @originalName findOne
   * @duplicate
   * @secure
   * @response `200` `CategoryEntityDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindOne {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
}

export namespace Cloudinary {
  /**
   * @description Get signature to upload an image
   * @tags Cloudinary
   * @name GetSignature
   * @request GET:/cloudinary/get-signature
   * @response `200` `SignaturePayloadResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace GetSignature {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SignaturePayloadResponseDto;
  }
}

export namespace JobsByCompany {
  /**
   * @description List all jobs
   * @tags Jobs
   * @name FindAll
   * @request GET:/{companyId}/jobs
   * @secure
   * @response `200` `JobPaginateResponseDto`
   * @response `401` `void` Need user with one of these roles: superAdmin, admin
   */
  export namespace FindAll {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      search?: string;
      sortBy?: string;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobPaginateResponseDto;
  }
  /**
   * @description Get a job by id
   * @tags Jobs
   * @name FindOne
   * @request GET:/{companyId}/jobs/{id}
   * @secure
   * @response `200` `JobEntityDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace FindOne {
    export type RequestParams = {
      companyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobEntityDto;
  }
}

export namespace Metadata {
  /**
   * No description
   * @tags Metadata
   * @name ByCollectionAndEditionNumber
   * @request GET:/metadata/by-collection/{collectionId}/{editionNumber}
   * @response `200` `TokenEditionInformationBaseResponseDto`
   */
  export namespace ByCollectionAndEditionNumber {
    export type RequestParams = {
      collectionId: string;
      editionNumber: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionInformationBaseResponseDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name TokenPayload
   * @request GET:/metadata/token/{contractAddress}/{chainId}/{tokenId}
   * @response `200` `TokenPayloadDto`
   */
  export namespace TokenPayload {
    export type RequestParams = {
      /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
      contractAddress: string;
      /** @example 4 */
      chainId: ChainId;
      tokenId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenPayloadDto;
  }
  /**
   * @description List all tokens in transfer to a wallet
   * @tags Metadata
   * @name FindTokensInTransition
   * @request GET:/metadata/processing/address/{address}/{chainId}
   * @response `200` `(NFTsMetadataResponseDto)[]`
   */
  export namespace FindTokensInTransition {
    export type RequestParams = {
      /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
      address: string;
      /** @example 4 */
      chainId: ChainId;
    };
    export type RequestQuery = {
      /** @example "transfer" */
      type?: 'transfer' | 'burn';
      /** @example ["created","started"] */
      status?: ('created' | 'started' | 'success' | 'failed' | 'wait_event')[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NFTsMetadataResponseDto[];
  }
  /**
   * No description
   * @tags Metadata
   * @name PublicPageByRfid
   * @request GET:/metadata/rfid/{rfid}
   * @response `200` `PublicPageDataDto`
   */
  export namespace PublicPageByRfid {
    export type RequestParams = {
      rfid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicPageDataDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name PublicPageByAddress
   * @request GET:/metadata/address/{contractAddress}/{chainId}/{tokenId}
   * @response `200` `PublicPageDataDto`
   */
  export namespace PublicPageByAddress {
    export type RequestParams = {
      /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
      contractAddress: string;
      /** @example 4 */
      chainId: ChainId;
      tokenId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicPageDataDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name GetContractByAddressAndChainId
   * @request GET:/metadata/contract/{address}/{chainId}
   * @response `200` `ContractBcDataDto`
   */
  export namespace GetContractByAddressAndChainId {
    export type RequestParams = {
      /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
      address: string;
      /** @example 4 */
      chainId: ChainId;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractBcDataDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name GetAllNfTs
   * @request GET:/metadata/nfts/{address}/{chainId}
   * @response `200` `NFTsMetadataResponseDto`
   * @response `default` `void` NFTs for a wallet
   */
  export namespace GetAllNfTs {
    export type RequestParams = {
      /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
      address: string;
      /** @example 4 */
      chainId: ChainId;
    };
    export type RequestQuery = {
      forceRefresh: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NFTsMetadataResponseDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name GetNftByContractAndTokenId
   * @request GET:/metadata/nfts/{contractAddress}/{chainId}/{tokenId}
   * @response `200` `NFTsMetadataResponseDto`
   * @response `default` `void` NFT metadata related a contract address
   */
  export namespace GetNftByContractAndTokenId {
    export type RequestParams = {
      /** @example "0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188" */
      contractAddress: string;
      /** @example 4 */
      chainId: ChainId;
      tokenId: number;
    };
    export type RequestQuery = {
      forceRefresh: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NFTsMetadataResponseDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name CountTransactionsByAddress
   * @request GET:/metadata/transactions/{companyId}/count/{address}/{chainId}
   * @secure
   * @response `200` `CountTransactionsResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace CountTransactionsByAddress {
    export type RequestParams = {
      companyId: string;
      /** @example 4 */
      chainId: ChainId;
      /** @example "0x095358452C33916513a3827a2D086da1aCEd7EE0" */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CountTransactionsResponseDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name CountTransactions
   * @request GET:/metadata/transactions/{companyId}/count/{chainId}
   * @secure
   * @response `200` `CountTransactionsResponseDto`
   * @response `401` `void` Unauthorized - Integration API key or JWT required
   */
  export namespace CountTransactions {
    export type RequestParams = {
      companyId: string;
      /** @example 4 */
      chainId: ChainId;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CountTransactionsResponseDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name GetMetadataUpdateHistory
   * @request GET:/metadata/history
   * @response `200` `void`
   */
  export namespace GetMetadataUpdateHistory {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @default 1 */
      page?: number;
      /** @default 10 */
      limit?: number;
      /** @default "DESC" */
      orderBy?: 'ASC' | 'DESC';
      /** @example "2022-07-15T00:00:00.000Z" */
      startDate: string;
      /** @example "2022-07-20T23:59:59.000Z" */
      endDate: string;
      sortBy?: MetadataHistorySortBy;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Contacts {
  /**
   * @description Send a contact email
   * @tags Contacts
   * @name Create
   * @request POST:/contacts/contact-us
   * @response `201` `(ContactEntityDto)[]`
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ContactEntityDto[];
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title offpix-backend
 * @version 0.9.7
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  health = {
    /**
 * No description
 *
 * @tags Health
 * @name Check
 * @request GET:/health
 * @response `200` `{
  \** @example "ok" *\
    status?: string,
  \** @example {"database":{"status":"up"}} *\
    info?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {} *\
    error?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {"database":{"status":"up"}} *\
    details?: Record<string,{
    status?: string,
    [key: string]: any,

}>,

}` The Health Check is successful
 * @response `503` `{
  \** @example "error" *\
    status?: string,
  \** @example {"database":{"status":"up"}} *\
    info?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {"redis":{"status":"down","message":"Could not connect"}} *\
    error?: Record<string,{
    status?: string,
    [key: string]: any,

}>,
  \** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} *\
    details?: Record<string,{
    status?: string,
    [key: string]: any,

}>,

}` The Health Check is not successful
 */
    check: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {} */
          error?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
        },
        {
          /** @example "error" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
        }
      >({
        path: `/health`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name GetLiveness
     * @request GET:/health/liveness
     * @response `204` `void`
     */
    getLiveness: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/health/liveness`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name GetReadiness
     * @request GET:/health/readiness
     * @response `204` `void`
     */
    getReadiness: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/health/readiness`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name Index
     * @request GET:/health/metrics
     * @response `204` `void`
     */
    index: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/health/metrics`,
        method: 'GET',
        ...params,
      }),
  };
  util = {
    /**
     * @description Run pending migrations
     *
     * @tags Util
     * @name RunMigrations
     * @request POST:/migrations/run
     * @secure
     * @response `200` `(MigrationDto)[]`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    runMigrations: (params: RequestParams = {}) =>
      this.request<MigrationDto[], void>({
        path: `/migrations/run`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Revert a migration
     *
     * @tags Util
     * @name RevertMigrations
     * @request POST:/migrations/revert
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    revertMigrations: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/migrations/revert`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description List pending database migrations
     *
     * @tags Util
     * @name GetPendingMigrations
     * @request GET:/migrations/pending
     * @secure
     * @response `200` `PendingMigrationsResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    getPendingMigrations: (params: RequestParams = {}) =>
      this.request<PendingMigrationsResponseDto, void>({
        path: `/migrations/pending`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all migrations
     *
     * @tags Util
     * @name GetAllMigrations
     * @request GET:/migrations/list
     * @secure
     * @response `200` `(MigrationDto)[]`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    getAllMigrations: (params: RequestParams = {}) =>
      this.request<MigrationDto[], void>({
        path: `/migrations/list`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name AccountCompleteRetry
     * @request POST:/users/account-complete/retry
     * @secure
     * @response `204` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    accountCompleteRetry: (data: AccountCompleteRetryDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/account-complete/retry`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  authentication = {
    /**
     * No description
     *
     * @tags Authentication
     * @name VerifySignUp
     * @request GET:/auth/verify-sign-up
     * @response `204` `void`
     */
    verifySignUp: (
      query: {
        email: string;
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/auth/verify-sign-up`,
        method: 'GET',
        query: query,
        ...params,
      }),
  };
  externalContactsByCompany = {
    /**
     * No description
     *
     * @tags External contacts
     * @name Invite
     * @request POST:/{companyId}/external-contacts/invite
     * @deprecated
     * @secure
     * @response `201` `ExternalContactEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    invite: (companyId: string, data: InviteExternalContactDto, params: RequestParams = {}) =>
      this.request<ExternalContactEntityDto, void>({
        path: `/${companyId}/external-contacts/invite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new external contact
     *
     * @tags External contacts
     * @name Create
     * @request POST:/{companyId}/external-contacts/import
     * @secure
     * @response `201` `ExternalContactEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    create: (companyId: string, data: InviteExternalContactDto, params: RequestParams = {}) =>
      this.request<ExternalContactEntityDto, void>({
        path: `/${companyId}/external-contacts/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List external contacts by company id
     *
     * @tags External contacts
     * @name FindAll
     * @request GET:/{companyId}/external-contacts
     * @secure
     * @response `200` `ExternalContactPaginateResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (
      companyId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
        id?: string[];
        userIds?: string[];
        /** @example "2022-02-15T10:30:05-03:00" */
        minDate?: string;
        /** @example "2022-02-15T10:30:05-03:00" */
        maxDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExternalContactPaginateResponseDto, void>({
        path: `/${companyId}/external-contacts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a external contact by id
     *
     * @tags External contacts
     * @name FindOne
     * @request GET:/{companyId}/external-contacts/{id}
     * @secure
     * @response `200` `ExternalContactEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<ExternalContactEntityDto, void>({
        path: `/${companyId}/external-contacts/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a external contact by id
     *
     * @tags External contacts
     * @name Update
     * @request PATCH:/{companyId}/external-contacts/{id}
     * @secure
     * @response `200` `ExternalContactEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    update: (companyId: string, id: string, data: UpdateExternalContactDto, params: RequestParams = {}) =>
      this.request<ExternalContactEntityDto, void>({
        path: `/${companyId}/external-contacts/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  contractsRoyaltyEligibleByCompany = {
    /**
     * @description Create a royalty eligible entity (makes a contact eligible for royalties in contracts)
     *
     * @tags Contracts - Royalty Eligible
     * @name Create
     * @request POST:/{companyId}/contracts/royalty-eligible/create
     * @secure
     * @response `201` `RoyaltyEligibleEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    create: (companyId: string, data: CreateRoyaltyEligibleDto, params: RequestParams = {}) =>
      this.request<RoyaltyEligibleEntityDto, void>({
        path: `/${companyId}/contracts/royalty-eligible/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all royalty eligibles by company
     *
     * @tags Contracts - Royalty Eligible
     * @name FindAll
     * @request GET:/{companyId}/contracts/royalty-eligible
     * @secure
     * @response `200` `RoyaltyEligibleResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (
      companyId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
        /** @example "2022-02-15T10:30:05-03:00" */
        minDate?: string;
        /** @example "2022-02-15T10:30:05-03:00" */
        maxDate?: string;
        id?: string[];
        userIds?: string[];
        externalContactIds?: string[];
        wallets?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<RoyaltyEligibleResponseDto, void>({
        path: `/${companyId}/contracts/royalty-eligible`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Activate or deactivate a royalty eligible
     *
     * @tags Contracts - Royalty Eligible
     * @name Upsert
     * @request PATCH:/{companyId}/contracts/royalty-eligible
     * @secure
     * @response `200` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    upsert: (companyId: string, data: AlterRoyaltyEligibleDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/contracts/royalty-eligible`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get a royalty eligible by id
     *
     * @tags Contracts - Royalty Eligible
     * @name FindOne
     * @request GET:/{companyId}/contracts/royalty-eligible/{id}
     * @secure
     * @response `200` `RoyaltyEligibleEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<RoyaltyEligibleEntityDto, void>({
        path: `/${companyId}/contracts/royalty-eligible/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  contractsByCompany = {
    /**
     * @description Create a new contract draft
     *
     * @tags Contracts
     * @name Create
     * @request POST:/{companyId}/contracts
     * @secure
     * @response `201` `NftContractEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    create: (companyId: string, data: CreateContractDto, params: RequestParams = {}) =>
      this.request<NftContractEntityDto, void>({
        path: `/${companyId}/contracts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all contract from a company
     *
     * @tags Contracts
     * @name FindAll
     * @request GET:/{companyId}/contracts
     * @secure
     * @response `200` `NftContractPaginateResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (
      companyId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 1000 */
        limit?: number;
        search?: string;
        sortBy?: string;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
        status?: 'draft' | 'publishing' | 'published' | 'failed';
        contractName?: string;
        /** @example "2022-02-15T10:30:05-03:00" */
        minDate?: string;
        /** @example "2022-02-15T10:30:05-03:00" */
        maxDate?: string;
        contactId?: string;
        participantName?: string;
        walletAddresses?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<NftContractPaginateResponseDto, void>({
        path: `/${companyId}/contracts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Check address role
     *
     * @tags Contracts
     * @name HasRole
     * @request PATCH:/{companyId}/contracts/has-role
     * @secure
     * @response `200` `HasRoleResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin, integration
     */
    hasRole: (companyId: string, data: HasRoleDto, params: RequestParams = {}) =>
      this.request<HasRoleResponseDto, void>({
        path: `/${companyId}/contracts/has-role`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Grant role by wallet address in an NFT contract
     *
     * @tags Contracts
     * @name GrantRole
     * @request PATCH:/{companyId}/contracts/grant-role
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin, integration
     */
    grantRole: (companyId: string, data: HasRoleDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/contracts/grant-role`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update a draft contract by id
     *
     * @tags Contracts
     * @name Update
     * @request PATCH:/{companyId}/contracts/{id}
     * @secure
     * @response `200` `NftContractEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    update: (id: string, companyId: string, data: UpdateContractDto, params: RequestParams = {}) =>
      this.request<NftContractEntityDto, void>({
        path: `/${companyId}/contracts/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a contract by id
     *
     * @tags Contracts
     * @name FindOne
     * @request GET:/{companyId}/contracts/{id}
     * @secure
     * @response `200` `NftContractEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<NftContractEntityDto, void>({
        path: `/${companyId}/contracts/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Publish a contract on the blockchain
     *
     * @tags Contracts
     * @name Publish
     * @request PATCH:/{companyId}/contracts/{id}/publish
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    publish: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/contracts/${id}/publish`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Estimate gas to publish a contract
     *
     * @tags Contracts
     * @name EstimateGas
     * @request GET:/{companyId}/contracts/{id}/estimate-gas
     * @secure
     * @response `200` `ContractEstimateGasResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    estimateGas: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<ContractEstimateGasResponseDto, void>({
        path: `/${companyId}/contracts/${id}/estimate-gas`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  blockchain = {
    /**
     * No description
     *
     * @tags Blockchain
     * @name ReceiveEventWebhook
     * @request POST:/blockchain/webhook/event/{companyId}
     * @response `401` `void` Unauthorized - Invalid Pixchain signature
     */
    receiveEventWebhook: (companyId: string, data: EventNotifyDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/webhook/event/${companyId}`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blockchain
     * @name ReceiveTransactionWebhook
     * @request POST:/blockchain/webhook/transaction/{companyId}
     * @response `401` `void` Unauthorized - Invalid Pixchain signature
     */
    receiveTransactionWebhook: (companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/webhook/transaction/${companyId}`,
        method: 'POST',
        ...params,
      }),

    /**
     * @description Gets the wallet with given address balance
     *
     * @tags Blockchain
     * @name GetBalance
     * @request GET:/blockchain/balance/{address}/{chainId}
     * @secure
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getBalance: (address: string, chainId: ChainId, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/balance/${address}/${chainId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blockchain
     * @name GetGas
     * @request GET:/blockchain/gas-cost/{companyId}
     * @deprecated
     * @secure
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getGas: (companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/gas-cost/${companyId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  companiesHostsDeprecated = {
    /**
     * No description
     *
     * @tags Companies Hosts (Deprecated)
     * @name GetCompanyByHost
     * @request GET:/companies/hosts/by-host
     * @deprecated
     * @secure
     * @response `200` `void`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    getCompanyByHost: (
      query: {
        /** @example "tropix.pixway.io" */
        host: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/companies/hosts/by-host`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
  companies = {
    /**
     * @description Create a company based on an existing tenant on ID
     *
     * @tags Companies
     * @name Create
     * @request POST:/companies
     * @secure
     * @response `201` `CompanyEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    create: (data: CreateCompanyDto, params: RequestParams = {}) =>
      this.request<CompanyEntityDto, void>({
        path: `/companies`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all companies
     *
     * @tags Companies
     * @name FindAll
     * @request GET:/companies
     * @secure
     * @response `200` `CompanyPaginateResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    findAll: (
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        sortBy?: string;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
      },
      params: RequestParams = {},
    ) =>
      this.request<CompanyPaginateResponseDto, void>({
        path: `/companies`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Retries companies wallet creation
     *
     * @tags Companies
     * @name SetupCompany
     * @request PATCH:/companies/{companyId}/setup
     * @secure
     * @response `200` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    setupCompany: (companyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}/setup`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Get company by company id
     *
     * @tags Companies
     * @name FindOne
     * @request GET:/companies/{companyId}
     * @secure
     * @response `200` `CompanyEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (companyId: string, params: RequestParams = {}) =>
      this.request<CompanyEntityDto, void>({
        path: `/companies/${companyId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name Update
     * @request PATCH:/companies/{companyId}
     * @secure
     * @response `200` `CompanyEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    update: (companyId: string, data: UpdateCompanyDto, params: RequestParams = {}) =>
      this.request<CompanyEntityDto, void>({
        path: `/companies/${companyId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name Remove
     * @request DELETE:/companies/{companyId}
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    remove: (companyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name ResyncCloneContracts
     * @request POST:/companies/resync-clone-contract
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    resyncCloneContracts: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/resync-clone-contract`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Creates a new email template for a company
     *
     * @tags Companies
     * @name CreateOrUpdateEmail
     * @request POST:/companies/{companyId}/emails
     * @secure
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    createOrUpdateEmail: (companyId: string, data: CreateCustomEmailDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/${companyId}/emails`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get email templates by company id
     *
     * @tags Companies
     * @name FindEmails
     * @request GET:/companies/{companyId}/emails
     * @secure
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    findEmails: (companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/${companyId}/emails`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Updates the value for the maximum percentage allowed for the gas on retry
     *
     * @tags Companies
     * @name CreateOrUpdateGasRetry
     * @request PATCH:/companies/{companyId}/gas-retry
     * @secure
     * @response `200` `CompanyEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    createOrUpdateGasRetry: (companyId: string, data: UpdateGasRetryDto, params: RequestParams = {}) =>
      this.request<CompanyEntityDto, void>({
        path: `/companies/${companyId}/gas-retry`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  tokenEditionsByCompany = {
    /**
     * @description Retry a bulk mint by collection
     *
     * @tags Token Editions
     * @name Retry
     * @request PATCH:/{companyId}/token-editions/retry-bulk-by-collection
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    retry: (companyId: string, data: BulkTokenEditionByCollectionDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-editions/retry-bulk-by-collection`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description List all tokens
     *
     * @tags Token Editions
     * @name FindAll
     * @request GET:/{companyId}/token-editions
     * @secure
     * @response `200` `TokenEditionPublicPaginateResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (
      companyId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
        tokenCollectionId?: string;
        editionNumber?: number;
        walletAddresses?: string[];
        /** @format uuid */
        userId?: string;
        status?: (
          | 'importError'
          | 'draft'
          | 'draftError'
          | 'readyToMint'
          | 'minting'
          | 'minted'
          | 'burning'
          | 'burned'
          | 'burnFailure'
          | 'transferring'
          | 'transferred'
          | 'transferFailure'
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<TokenEditionPublicPaginateResponseDto, void>({
        path: `/${companyId}/token-editions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Editions
     * @name CheckRfid
     * @request GET:/{companyId}/token-editions/check-rfid
     * @secure
     * @response `200` `RfidResponseDTO`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    checkRfid: (
      companyId: string,
      query: {
        rfid: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RfidResponseDTO, void>({
        path: `/${companyId}/token-editions/check-rfid`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Change status to ready to mint
     *
     * @tags Token Editions
     * @name ChangeStatusReadyToMint
     * @request PATCH:/{companyId}/token-editions/ready-to-mint
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    changeStatusReadyToMint: (companyId: string, data: ChangeStatusReadyToMintDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-editions/ready-to-mint`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Mint on demand
     *
     * @tags Token Editions
     * @name MintOnDemand
     * @request PATCH:/{companyId}/token-editions/mint-on-demand
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin, integration, application
     */
    mintOnDemand: (companyId: string, data: MintOnDemandDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-editions/mint-on-demand`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Transfer token
     *
     * @tags Token Editions
     * @name TransferToken
     * @request PATCH:/{companyId}/token-editions/transfer-token
     * @secure
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    transferToken: (companyId: string, data: TransferTokensDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/${companyId}/token-editions/transfer-token`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Edit a token before publishing
     *
     * @tags Token Editions
     * @name EditSingleEdition
     * @request PATCH:/{companyId}/token-editions/{id}
     * @secure
     * @response `201` `TokenEditionEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    editSingleEdition: (companyId: string, id: string, data: UpdateTokenEditionDto, params: RequestParams = {}) =>
      this.request<TokenEditionEntityDto, void>({
        path: `/${companyId}/token-editions/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a token by id
     *
     * @tags Token Editions
     * @name FindOne
     * @request GET:/{companyId}/token-editions/{id}
     * @secure
     * @response `200` `TokenEditionPublicDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<TokenEditionPublicDto, void>({
        path: `/${companyId}/token-editions/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Estimate gas to mint tokens
     *
     * @tags Token Editions
     * @name EstimateMintGas
     * @request GET:/{companyId}/token-editions/{id}/estimate-gas/mint
     * @secure
     * @response `200` `ContractEstimateGasResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    estimateMintGas: (
      companyId: string,
      id: string,
      query: {
        /**
         * quantity of token to mint
         * @example 1
         */
        quantityToMint: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContractEstimateGasResponseDto, void>({
        path: `/${companyId}/token-editions/${id}/estimate-gas/mint`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Change status to ready to mint by token
     *
     * @tags Token Editions
     * @name ChangeStatusReadyToMintByEdition
     * @request PATCH:/{companyId}/token-editions/{id}/ready-to-mint
     * @secure
     * @response `200` `TokenEditionEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    changeStatusReadyToMintByEdition: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<TokenEditionEntityDto, void>({
        path: `/${companyId}/token-editions/${id}/ready-to-mint`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Burn token
     *
     * @tags Token Editions
     * @name BurnTokenEdition
     * @request DELETE:/{companyId}/token-editions/burn
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin, user
     */
    burnTokenEdition: (companyId: string, data: BurnTokensDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-editions/burn`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Estimate gas to burn
     *
     * @tags Token Editions
     * @name EstimateBurnGas
     * @request GET:/{companyId}/token-editions/{id}/estimate-gas/burn
     * @secure
     * @response `200` `ContractEstimateGasResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin, user
     */
    estimateBurnGas: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<ContractEstimateGasResponseDto, void>({
        path: `/${companyId}/token-editions/${id}/estimate-gas/burn`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Change rfid by id
     *
     * @tags Token Editions
     * @name ChangeRfidByEdition
     * @request PATCH:/{companyId}/token-editions/{id}/rfid
     * @secure
     * @response `200` `TokenEditionEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    changeRfidByEdition: (companyId: string, id: string, data: ChangeRfidDto, params: RequestParams = {}) =>
      this.request<TokenEditionEntityDto, void>({
        path: `/${companyId}/token-editions/${id}/rfid`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Estimate gas to transfer token
     *
     * @tags Token Editions
     * @name EstimateTransferGas
     * @request GET:/{companyId}/token-editions/{id}/estimate-gas/transfer
     * @secure
     * @response `200` `ContractEstimateGasResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    estimateTransferGas: (
      companyId: string,
      id: string,
      query: {
        toAddress: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContractEstimateGasResponseDto, void>({
        path: `/${companyId}/token-editions/${id}/estimate-gas/transfer`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Editions
     * @name TransferTokenByEdition
     * @request PATCH:/{companyId}/token-editions/{id}/transfer-token
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    transferTokenByEdition: (
      companyId: string,
      id: string,
      data: TransferTokenByEditionDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/${companyId}/token-editions/${id}/transfer-token`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get last transfer or burn transaction
     *
     * @tags Token Editions
     * @name GetLastTransferToken
     * @request GET:/{companyId}/token-editions/{id}/get-last/{type}
     * @secure
     * @response `200` `ActionResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    getLastTransferToken: (companyId: string, id: string, type: string, params: RequestParams = {}) =>
      this.request<ActionResponseDto, void>({
        path: `/${companyId}/token-editions/${id}/get-last/${type}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  tokens = {
    /**
     * No description
     *
     * @tags Tokens
     * @name CheckCollectionTokenHolder
     * @request PATCH:/tokens/check-collection-token-holder
     * @secure
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    checkCollectionTokenHolder: (data: CheckCollectionTokenHolderDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/tokens/check-collection-token-holder`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tokenCollectionsByCompany = {
    /**
     * @description Create a token collection
     *
     * @tags Token Collections
     * @name Create
     * @request POST:/{companyId}/token-collections
     * @secure
     * @response `201` `TokenCollectionEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    create: (companyId: string, data: CreateTokenCollectionDto, params: RequestParams = {}) =>
      this.request<TokenCollectionEntityDto, void>({
        path: `/${companyId}/token-collections`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List collections by company
     *
     * @tags Token Collections
     * @name FindAll
     * @request GET:/{companyId}/token-collections
     * @secure
     * @response `200` `TokenCollectionPaginateResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (
      companyId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
        status?: ('draft' | 'published')[];
        contractId?: string;
        subcategoryIds?: string[];
        walletAddresses?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<TokenCollectionPaginateResponseDto, void>({
        path: `/${companyId}/token-collections`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create the draft tokens for a collection with multiple unique tokens
     *
     * @tags Token Collections
     * @name SyncDraftTokens
     * @request PATCH:/{companyId}/token-collections/{id}/sync-draft-tokens
     * @secure
     * @response `201` `JobIdResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    syncDraftTokens: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<JobIdResponseDto, void>({
        path: `/${companyId}/token-collections/${id}/sync-draft-tokens`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Publish a token Collection
     *
     * @tags Token Collections
     * @name Publish
     * @request PATCH:/{companyId}/token-collections/publish/{id}
     * @secure
     * @response `201` `PublishTokenCollectionResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    publish: (companyId: string, id: string, data: UpdateTokenCollectionDto, params: RequestParams = {}) =>
      this.request<PublishTokenCollectionResponseDto, void>({
        path: `/${companyId}/token-collections/publish/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Marks a token collection is token pass
     *
     * @tags Token Collections
     * @name EnableTokenPass
     * @request PATCH:/{companyId}/token-collections/{id}/pass/enable
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: integration
     */
    enableTokenPass: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-collections/${id}/pass/enable`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Disable token pass for a collection
     *
     * @tags Token Collections
     * @name DisableTokenPass
     * @request PATCH:/{companyId}/token-collections/{id}/pass/disable
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: integration
     */
    disableTokenPass: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-collections/${id}/pass/disable`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Estimate gas to publish collection
     *
     * @tags Token Collections
     * @name EstimatePublishGas
     * @request GET:/{companyId}/token-collections/estimate-gas
     * @secure
     * @response `200` `ContractEstimateGasResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    estimatePublishGas: (
      companyId: string,
      query: {
        /** @example "" */
        contractId: string;
        /** @example 1 */
        initialQuantityToMint: number;
        /** @example null */
        ownerAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContractEstimateGasResponseDto, void>({
        path: `/${companyId}/token-collections/estimate-gas`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Edit draft collection
     *
     * @tags Token Collections
     * @name Update
     * @request PUT:/{companyId}/token-collections/{id}
     * @secure
     * @response `200` `TokenCollectionEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    update: (companyId: string, id: string, data: UpdateTokenCollectionDto, params: RequestParams = {}) =>
      this.request<TokenCollectionEntityDto, void>({
        path: `/${companyId}/token-collections/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a collection by id
     *
     * @tags Token Collections
     * @name FindOne
     * @request GET:/{companyId}/token-collections/{id}
     * @secure
     * @response `200` `TokenCollectionEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<TokenCollectionEntityDto, void>({
        path: `/${companyId}/token-collections/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Burn a collection by id
     *
     * @tags Token Collections
     * @name BurnTokenCollection
     * @request DELETE:/{companyId}/token-collections/{id}/burn
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    burnTokenCollection: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-collections/${id}/burn`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Delete a draft collection by id
     *
     * @tags Token Collections
     * @name DeleteSingleDraft
     * @request DELETE:/{companyId}/token-collections/{id}/draft
     * @secure
     * @response `204` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    deleteSingleDraft: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-collections/${id}/draft`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Collections
     * @name ExportXlsxTemplate
     * @request GET:/{companyId}/token-collections/{id}/export/xlsx
     * @secure
     * @response `200` `void`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    exportXlsxTemplate: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/${companyId}/token-collections/${id}/export/xlsx`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Collections
     * @name ImportXlsxEditions
     * @request POST:/{companyId}/token-collections/{id}/import/xlsx
     * @secure
     * @response `200` `JobIdResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    importXlsxEditions: (
      companyId: string,
      id: string,
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<JobIdResponseDto, void>({
        path: `/${companyId}/token-collections/${id}/import/xlsx`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),
  };
  subcategoriesByCompany = {
    /**
     * @description Create a new subcategory
     *
     * @tags Subcategories
     * @name Create
     * @request POST:/{companyId}/subcategories
     * @secure
     * @response `201` `SubcategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    create: (companyId: string, data: CreateSubcategoryDto, params: RequestParams = {}) =>
      this.request<SubcategoryEntityDto, void>({
        path: `/${companyId}/subcategories`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List subcategories of a company
     *
     * @tags Subcategories
     * @name FindAll
     * @request GET:/{companyId}/subcategories
     * @secure
     * @response `200` `(SubcategoryEntityDto)[]`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (
      companyId: string,
      query?: {
        categoryId?: string;
        /** @example "all" */
        scope?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubcategoryEntityDto[], void>({
        path: `/${companyId}/subcategories`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a subcategory by id
     *
     * @tags Subcategories
     * @name Update
     * @request PATCH:/{companyId}/subcategories/{id}
     * @secure
     * @response `200` `SubcategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    update: (id: string, companyId: string, data: UpdateSubcategoryDto, params: RequestParams = {}) =>
      this.request<SubcategoryEntityDto, void>({
        path: `/${companyId}/subcategories/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a subcategory by id
     *
     * @tags Subcategories
     * @name FindOne
     * @request GET:/{companyId}/subcategories/{id}
     * @secure
     * @response `200` `SubcategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<SubcategoryEntityDto, void>({
        path: `/${companyId}/subcategories/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  subcategories = {
    /**
     * No description
     *
     * @tags Subcategories
     * @name CreateWithoutCompany
     * @request POST:/subcategories
     * @secure
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    createWithoutCompany: (data: CreateSubcategoryDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/subcategories`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subcategories
     * @name Update
     * @request PATCH:/subcategories/{id}
     * @originalName update
     * @duplicate
     * @secure
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    update: (id: string, data: UpdateSubcategoryDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/subcategories/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  categoriesByCompany = {
    /**
     * @description Create a new NFT category for a company
     *
     * @tags Categories
     * @name Create
     * @request POST:/{companyId}/categories
     * @secure
     * @response `201` `CategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    create: (companyId: string, data: CreateCategoryDto, params: RequestParams = {}) =>
      this.request<CategoryEntityDto, void>({
        path: `/${companyId}/categories`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all existing NFT category from a company
     *
     * @tags Categories
     * @name FindAll
     * @request GET:/{companyId}/categories
     * @secure
     * @response `200` `(CategoryEntityDto)[]`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (companyId: string, params: RequestParams = {}) =>
      this.request<CategoryEntityDto[], void>({
        path: `/${companyId}/categories`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates an existing NFT category for a company
     *
     * @tags Categories
     * @name Update
     * @request PUT:/{companyId}/categories/{id}
     * @secure
     * @response `200` `CategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    update: (id: string, companyId: string, data: UpdateCategoryDto, params: RequestParams = {}) =>
      this.request<CategoryEntityDto, void>({
        path: `/${companyId}/categories/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets an existing NFT category that matches the id
     *
     * @tags Categories
     * @name FindOne
     * @request GET:/{companyId}/categories/{id}
     * @secure
     * @response `200` `CategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<CategoryEntityDto, void>({
        path: `/${companyId}/categories/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  categories = {
    /**
     * @description Create a new generic NFT category
     *
     * @tags Categories
     * @name Create
     * @request POST:/categories
     * @originalName create
     * @duplicate
     * @secure
     * @response `201` `CategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    create: (data: CreateCategoryDto, params: RequestParams = {}) =>
      this.request<CategoryEntityDto, void>({
        path: `/categories`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets all existing NFT category
     *
     * @tags Categories
     * @name FindAll
     * @request GET:/categories
     * @originalName findAll
     * @duplicate
     * @secure
     * @response `200` `(CategoryEntityDto)[]`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (params: RequestParams = {}) =>
      this.request<CategoryEntityDto[], void>({
        path: `/categories`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates an existing NFT category
     *
     * @tags Categories
     * @name Update
     * @request PUT:/categories/{id}
     * @originalName update
     * @duplicate
     * @secure
     * @response `200` `CategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin
     */
    update: (id: string, data: UpdateCategoryDto, params: RequestParams = {}) =>
      this.request<CategoryEntityDto, void>({
        path: `/categories/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets an existing NFT category that matches the id
     *
     * @tags Categories
     * @name FindOne
     * @request GET:/categories/{id}
     * @deprecated
     * @originalName findOne
     * @duplicate
     * @secure
     * @response `200` `CategoryEntityDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findOne: (id: string, params: RequestParams = {}) =>
      this.request<CategoryEntityDto, void>({
        path: `/categories/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  cloudinary = {
    /**
     * @description Get signature to upload an image
     *
     * @tags Cloudinary
     * @name GetSignature
     * @request GET:/cloudinary/get-signature
     * @response `200` `SignaturePayloadResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    getSignature: (params: RequestParams = {}) =>
      this.request<SignaturePayloadResponseDto, void>({
        path: `/cloudinary/get-signature`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  jobsByCompany = {
    /**
     * @description List all jobs
     *
     * @tags Jobs
     * @name FindAll
     * @request GET:/{companyId}/jobs
     * @secure
     * @response `200` `JobPaginateResponseDto`
     * @response `401` `void` Need user with one of these roles: superAdmin, admin
     */
    findAll: (
      companyId: string,
      query?: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        search?: string;
        sortBy?: string;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
      },
      params: RequestParams = {},
    ) =>
      this.request<JobPaginateResponseDto, void>({
        path: `/${companyId}/jobs`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a job by id
     *
     * @tags Jobs
     * @name FindOne
     * @request GET:/{companyId}/jobs/{id}
     * @secure
     * @response `200` `JobEntityDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    findOne: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<JobEntityDto, void>({
        path: `/${companyId}/jobs/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  metadata = {
    /**
     * No description
     *
     * @tags Metadata
     * @name ByCollectionAndEditionNumber
     * @request GET:/metadata/by-collection/{collectionId}/{editionNumber}
     * @response `200` `TokenEditionInformationBaseResponseDto`
     */
    byCollectionAndEditionNumber: (collectionId: string, editionNumber: number, params: RequestParams = {}) =>
      this.request<TokenEditionInformationBaseResponseDto, any>({
        path: `/metadata/by-collection/${collectionId}/${editionNumber}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name TokenPayload
     * @request GET:/metadata/token/{contractAddress}/{chainId}/{tokenId}
     * @response `200` `TokenPayloadDto`
     */
    tokenPayload: (contractAddress: string, chainId: ChainId, tokenId: number, params: RequestParams = {}) =>
      this.request<TokenPayloadDto, any>({
        path: `/metadata/token/${contractAddress}/${chainId}/${tokenId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description List all tokens in transfer to a wallet
     *
     * @tags Metadata
     * @name FindTokensInTransition
     * @request GET:/metadata/processing/address/{address}/{chainId}
     * @response `200` `(NFTsMetadataResponseDto)[]`
     */
    findTokensInTransition: (
      address: string,
      chainId: ChainId,
      query?: {
        /** @example "transfer" */
        type?: 'transfer' | 'burn';
        /** @example ["created","started"] */
        status?: ('created' | 'started' | 'success' | 'failed' | 'wait_event')[];
      },
      params: RequestParams = {},
    ) =>
      this.request<NFTsMetadataResponseDto[], any>({
        path: `/metadata/processing/address/${address}/${chainId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name PublicPageByRfid
     * @request GET:/metadata/rfid/{rfid}
     * @response `200` `PublicPageDataDto`
     */
    publicPageByRfid: (rfid: string, params: RequestParams = {}) =>
      this.request<PublicPageDataDto, any>({
        path: `/metadata/rfid/${rfid}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name PublicPageByAddress
     * @request GET:/metadata/address/{contractAddress}/{chainId}/{tokenId}
     * @response `200` `PublicPageDataDto`
     */
    publicPageByAddress: (contractAddress: string, chainId: ChainId, tokenId: number, params: RequestParams = {}) =>
      this.request<PublicPageDataDto, any>({
        path: `/metadata/address/${contractAddress}/${chainId}/${tokenId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name GetContractByAddressAndChainId
     * @request GET:/metadata/contract/{address}/{chainId}
     * @response `200` `ContractBcDataDto`
     */
    getContractByAddressAndChainId: (address: string, chainId: ChainId, params: RequestParams = {}) =>
      this.request<ContractBcDataDto, any>({
        path: `/metadata/contract/${address}/${chainId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name GetAllNfTs
     * @request GET:/metadata/nfts/{address}/{chainId}
     * @response `200` `NFTsMetadataResponseDto`
     * @response `default` `void` NFTs for a wallet
     */
    getAllNfTs: (
      address: string,
      chainId: ChainId,
      query: {
        forceRefresh: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<NFTsMetadataResponseDto, any>({
        path: `/metadata/nfts/${address}/${chainId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name GetNftByContractAndTokenId
     * @request GET:/metadata/nfts/{contractAddress}/{chainId}/{tokenId}
     * @response `200` `NFTsMetadataResponseDto`
     * @response `default` `void` NFT metadata related a contract address
     */
    getNftByContractAndTokenId: (
      contractAddress: string,
      chainId: ChainId,
      tokenId: number,
      query: {
        forceRefresh: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<NFTsMetadataResponseDto, any>({
        path: `/metadata/nfts/${contractAddress}/${chainId}/${tokenId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name CountTransactionsByAddress
     * @request GET:/metadata/transactions/{companyId}/count/{address}/{chainId}
     * @secure
     * @response `200` `CountTransactionsResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    countTransactionsByAddress: (companyId: string, chainId: ChainId, address: string, params: RequestParams = {}) =>
      this.request<CountTransactionsResponseDto, void>({
        path: `/metadata/transactions/${companyId}/count/${address}/${chainId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name CountTransactions
     * @request GET:/metadata/transactions/{companyId}/count/{chainId}
     * @secure
     * @response `200` `CountTransactionsResponseDto`
     * @response `401` `void` Unauthorized - Integration API key or JWT required
     */
    countTransactions: (companyId: string, chainId: ChainId, params: RequestParams = {}) =>
      this.request<CountTransactionsResponseDto, void>({
        path: `/metadata/transactions/${companyId}/count/${chainId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name GetMetadataUpdateHistory
     * @request GET:/metadata/history
     * @response `200` `void`
     */
    getMetadataUpdateHistory: (
      query: {
        /** @default 1 */
        page?: number;
        /** @default 10 */
        limit?: number;
        /** @default "DESC" */
        orderBy?: 'ASC' | 'DESC';
        /** @example "2022-07-15T00:00:00.000Z" */
        startDate: string;
        /** @example "2022-07-20T23:59:59.000Z" */
        endDate: string;
        sortBy?: MetadataHistorySortBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/metadata/history`,
        method: 'GET',
        query: query,
        ...params,
      }),
  };
  contacts = {
    /**
     * @description Send a contact email
     *
     * @tags Contacts
     * @name Create
     * @request POST:/contacts/contact-us
     * @response `201` `(ContactEntityDto)[]`
     */
    create: (data: CreateContactDto, params: RequestParams = {}) =>
      this.request<ContactEntityDto[], any>({
        path: `/contacts/contact-us`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
