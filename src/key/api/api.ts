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

export interface AccountCompleteRetryDto {
  email: string;
  companyId: string;
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

  /** @example import */
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
  /** @example http://example.com?page=1 */
  first?: string;

  /** @example http://example.com?page=1 */
  prev?: string;

  /** @example http://example.com?page=2 */
  next?: string;

  /** @example http://example.com?page=3 */
  last?: string;
}

export interface AbstractBase {
  items: JobEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
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

  /** @example Participant 1 */
  name: string;

  /** @example 0x095358452C33916513a3827a2D086da1aCEd7EE0 */
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
  /** @example Contract Example */
  name: string;

  /** @example CE */
  symbol: string;

  /** @example 4 */
  chainId: ChainId;
  description?: string;

  /** @example https://dummyimage.com/600x400/fff/000 */
  image?: string;

  /** @example https://stg.pixway.io */
  externalLink?: string;
  participants: RoyaltyParticipantsDto[];

  /** @example ["admin:mover","admin:minter","admin:burner","user:burner","user:mover"] */
  features?: ContractFeature[];
}

export enum CountryCodeEnum {
  BGD = 'BGD',
  BEL = 'BEL',
  BFA = 'BFA',
  BGR = 'BGR',
  BIH = 'BIH',
  BRB = 'BRB',
  WLF = 'WLF',
  BLM = 'BLM',
  BMU = 'BMU',
  BRN = 'BRN',
  BOL = 'BOL',
  BHR = 'BHR',
  BDI = 'BDI',
  BEN = 'BEN',
  BTN = 'BTN',
  JAM = 'JAM',
  BVT = 'BVT',
  BWA = 'BWA',
  WSM = 'WSM',
  BES = 'BES',
  BRA = 'BRA',
  BHS = 'BHS',
  JEY = 'JEY',
  BLR = 'BLR',
  BLZ = 'BLZ',
  RUS = 'RUS',
  RWA = 'RWA',
  SRB = 'SRB',
  TLS = 'TLS',
  REU = 'REU',
  TKM = 'TKM',
  TJK = 'TJK',
  ROU = 'ROU',
  TKL = 'TKL',
  GNB = 'GNB',
  GUM = 'GUM',
  GTM = 'GTM',
  SGS = 'SGS',
  GRC = 'GRC',
  GNQ = 'GNQ',
  GLP = 'GLP',
  JPN = 'JPN',
  GUY = 'GUY',
  GGY = 'GGY',
  GUF = 'GUF',
  GEO = 'GEO',
  GRD = 'GRD',
  GBR = 'GBR',
  GAB = 'GAB',
  SLV = 'SLV',
  GIN = 'GIN',
  GMB = 'GMB',
  GRL = 'GRL',
  GIB = 'GIB',
  GHA = 'GHA',
  OMN = 'OMN',
  TUN = 'TUN',
  JOR = 'JOR',
  HRV = 'HRV',
  HTI = 'HTI',
  HUN = 'HUN',
  HKG = 'HKG',
  HND = 'HND',
  HMD = 'HMD',
  VEN = 'VEN',
  PRI = 'PRI',
  PSE = 'PSE',
  PLW = 'PLW',
  PRT = 'PRT',
  SJM = 'SJM',
  PRY = 'PRY',
  IRQ = 'IRQ',
  PAN = 'PAN',
  PYF = 'PYF',
  PNG = 'PNG',
  PER = 'PER',
  PAK = 'PAK',
  PHL = 'PHL',
  PCN = 'PCN',
  POL = 'POL',
  SPM = 'SPM',
  ZMB = 'ZMB',
  ESH = 'ESH',
  EST = 'EST',
  EGY = 'EGY',
  ZAF = 'ZAF',
  ECU = 'ECU',
  ITA = 'ITA',
  VNM = 'VNM',
  SLB = 'SLB',
  ETH = 'ETH',
  SOM = 'SOM',
  ZWE = 'ZWE',
  SAU = 'SAU',
  ESP = 'ESP',
  ERI = 'ERI',
  MNE = 'MNE',
  MDA = 'MDA',
  MDG = 'MDG',
  MAF = 'MAF',
  MAR = 'MAR',
  MCO = 'MCO',
  UZB = 'UZB',
  MMR = 'MMR',
  MLI = 'MLI',
  MAC = 'MAC',
  MNG = 'MNG',
  MHL = 'MHL',
  MKD = 'MKD',
  MUS = 'MUS',
  MLT = 'MLT',
  MWI = 'MWI',
  MDV = 'MDV',
  MTQ = 'MTQ',
  MNP = 'MNP',
  MSR = 'MSR',
  MRT = 'MRT',
  IMN = 'IMN',
  UGA = 'UGA',
  TZA = 'TZA',
  MYS = 'MYS',
  MEX = 'MEX',
  ISR = 'ISR',
  FRA = 'FRA',
  IOT = 'IOT',
  SHN = 'SHN',
  FIN = 'FIN',
  FJI = 'FJI',
  FLK = 'FLK',
  FSM = 'FSM',
  FRO = 'FRO',
  NIC = 'NIC',
  NLD = 'NLD',
  NOR = 'NOR',
  NAM = 'NAM',
  VUT = 'VUT',
  NCL = 'NCL',
  NER = 'NER',
  NFK = 'NFK',
  NGA = 'NGA',
  NZL = 'NZL',
  NPL = 'NPL',
  NRU = 'NRU',
  NIU = 'NIU',
  COK = 'COK',
  XKX = 'XKX',
  CIV = 'CIV',
  CHE = 'CHE',
  COL = 'COL',
  CHN = 'CHN',
  CMR = 'CMR',
  CHL = 'CHL',
  CCK = 'CCK',
  CAN = 'CAN',
  COG = 'COG',
  CAF = 'CAF',
  COD = 'COD',
  CZE = 'CZE',
  CYP = 'CYP',
  CXR = 'CXR',
  CRI = 'CRI',
  CUW = 'CUW',
  CPV = 'CPV',
  CUB = 'CUB',
  SWZ = 'SWZ',
  SYR = 'SYR',
  SXM = 'SXM',
  KGZ = 'KGZ',
  KEN = 'KEN',
  SSD = 'SSD',
  SUR = 'SUR',
  KIR = 'KIR',
  KHM = 'KHM',
  KNA = 'KNA',
  COM = 'COM',
  STP = 'STP',
  SVK = 'SVK',
  KOR = 'KOR',
  SVN = 'SVN',
  PRK = 'PRK',
  KWT = 'KWT',
  SEN = 'SEN',
  SMR = 'SMR',
  SLE = 'SLE',
  SYC = 'SYC',
  KAZ = 'KAZ',
  CYM = 'CYM',
  SGP = 'SGP',
  SWE = 'SWE',
  SDN = 'SDN',
  DOM = 'DOM',
  DMA = 'DMA',
  DJI = 'DJI',
  DNK = 'DNK',
  VGB = 'VGB',
  DEU = 'DEU',
  YEM = 'YEM',
  DZA = 'DZA',
  USA = 'USA',
  URY = 'URY',
  MYT = 'MYT',
  UMI = 'UMI',
  LBN = 'LBN',
  LCA = 'LCA',
  LAO = 'LAO',
  TUV = 'TUV',
  TWN = 'TWN',
  TTO = 'TTO',
  TUR = 'TUR',
  LKA = 'LKA',
  LIE = 'LIE',
  LVA = 'LVA',
  TON = 'TON',
  LTU = 'LTU',
  LUX = 'LUX',
  LBR = 'LBR',
  LSO = 'LSO',
  THA = 'THA',
  ATF = 'ATF',
  TGO = 'TGO',
  TCD = 'TCD',
  TCA = 'TCA',
  LBY = 'LBY',
  VAT = 'VAT',
  VCT = 'VCT',
  ARE = 'ARE',
  AND = 'AND',
  ATG = 'ATG',
  AFG = 'AFG',
  AIA = 'AIA',
  VIR = 'VIR',
  ISL = 'ISL',
  IRN = 'IRN',
  ARM = 'ARM',
  ALB = 'ALB',
  AGO = 'AGO',
  ATA = 'ATA',
  ASM = 'ASM',
  ARG = 'ARG',
  AUS = 'AUS',
  AUT = 'AUT',
  ABW = 'ABW',
  IND = 'IND',
  ALA = 'ALA',
  AZE = 'AZE',
  IRL = 'IRL',
  IDN = 'IDN',
  UKR = 'UKR',
  QAT = 'QAT',
  MOZ = 'MOZ',
}

export interface TransferConfigDto {
  transferDelay?: number;
}

export interface RoyaltyPlatformDto {
  payee: string;
  share: number;
  name?: string;
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
  name: string;
  document: string;

  /** @example BRA */
  countryCode: CountryCodeEnum;
  theme: object;
  defaultOwnerAddress?: string;
  transferConfig?: TransferConfigDto;
  client?: CompanyEntityDto;
  clientId?: string;
  platformRoyalty: RoyaltyPlatformDto;
  customEmailsTemplates: CustomEmailsTemplatesDto;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
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
  company: CompanyEntityDto;
  companyId: string;

  /** @example started */
  status: ContractActionStatus;

  /** @example factoryERC721A */
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

export interface RoyaltyContractEntityDto {
  id: string;
  company: CompanyEntityDto;
  companyId: string;

  /** @example draft */
  status: ContractStatus;
  address?: string;
  chainId: number;
  platform: RoyaltyPlatformDto;
  participants: string[];
  blockchain: string[];
  fee: number;
  contractAction: ContractActionEntityDto;
  contractActionId: string;
  isContract: boolean;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
}

export interface NftContractEntityDto {
  id: string;
  company: CompanyEntityDto;
  companyId: string;
  royalty?: RoyaltyContractEntityDto;
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

  /** @example draft */
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
}

export enum ContractOperatorRole {
  Mover = 'mover',
  Minter = 'minter',
}

export interface HasRoleDto {
  /** @example 0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188 */
  address: string;

  /** @example 4 */
  chainId: ChainId;

  /** @example mover */
  role: ContractOperatorRole;

  /** @example 0xDAA50a02340cBcFA1a6F4c02765430Ffe411b188 */
  contractAddress: string;
}

export interface HasRoleResponseDto {
  hasRole: boolean;
}

export interface UpdateContractDto {
  /** @example Contract Example */
  name?: string;

  /** @example CE */
  symbol?: string;

  /** @example 4 */
  chainId?: ChainId;
  description?: string;

  /** @example https://dummyimage.com/600x400/fff/000 */
  image?: string;

  /** @example https://stg.pixway.io */
  externalLink?: string;
  participants?: RoyaltyParticipantsDto[];

  /** @example ["admin:mover","admin:minter","admin:burner","user:burner","user:mover"] */
  features?: ContractFeature[];
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

  /** @example 0x75a3c22ef6e394a496fb7cdb16c9c5a975d6c4950f931a9df9bff38a2a9371a7 */
  blockHash: string;

  /** @example 0x9882f164a13ad7cfaeb682d36415f6bd8d0348f7f738b85c7668665fa00956c4 */
  transactionHash: string;

  /** @example 0x82dbB0A14F79f50c8f8e0D50FC9F1ef30Aeb6C79 */
  address: string;
  topics: string[];

  /** @example 0x */
  data: string;

  /** @example 0 */
  logIndex: number;

  /** @example 4 */
  chainId: ChainId;

  /** @example 1653579785 */
  timestamp: number;

  /** @example Transfer */
  name: string;

  /** @example Transfer(address,address,uint256) */
  signature: string;

  /** @example 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef */
  topic: string;

  /** @example 0 */
  transactionIndex: number;

  /** @example {"from":"0x0000000000000000000000000000000000000000","to":"0xe5dc6eb721b535ece3be1b3220be2ce41ac284fc","tokenId":{"_hex":"0x03","_isBigNumber":true}} */
  args: object;
  transactionId?: string;
}

export interface BulkTokenEditionByCollectionDto {
  tokenCollectionId: string;
  jobId: string;
}

export enum TokenCollectionStatus {
  Draft = 'draft',
  Published = 'published',
}

export interface CategoryEntityDto {
  id: string;
  name: string;
  image: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
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

export interface SubcategoryEntityDto {
  id: string;
  company: CompanyEntityDto;
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

  /** @example draft */
  status: TokenCollectionStatus;
  contract: NftContractEntityDto;
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
  quantityMinted: number;
  rfids: string[];
  ownerAddress?: string;
}

export enum TokenEditionStatusEnum {
  Draft = 'draft',
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

export interface NFTMintingEntityDto {
  id: string;
  companyId: string;
  contract: NftContractEntityDto;
  contractId: string;
  contractAddress: string;
  ownerAddress: string;
  sender: string;
  chainId: number;
  startEdition: number;
  endEdition: number;
  batchNumber: number;

  /** @example created */
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
  tokenCollection: TokenCollectionEntityDto;
  company: CompanyEntityDto;
  contractId: string;
  contract: NftContractEntityDto;
  tokenCollectionId: string;
  rfid?: string;

  /** @example draft */
  status: TokenEditionStatusEnum;
  contractAddress: string;
  ownerAddress: string;
  chainId: number;
  tokenId?: number;
  mintedHash?: string;

  /** @format date-time */
  mintedAt?: string;
  nftMinting?: NFTMintingEntityDto;
  nftMintingId?: string;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
  mintedAddress: string;
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

export interface TokenEditionEntityDto {
  id: string;
  companyId: string;
  editionNumber: number;
  tokenCollection: TokenCollectionEntityDto;
  company: CompanyEntityDto;
  contractId: string;
  contract: NftContractEntityDto;
  tokenCollectionId: string;
  rfid?: string;

  /** @example draft */
  status: TokenEditionStatusEnum;
  contractAddress: string;
  ownerAddress: string;
  chainId: number;
  tokenId?: number;
  mintedHash?: string;

  /** @format date-time */
  mintedAt?: string;
  nftMinting?: NFTMintingEntityDto;
  nftMintingId?: string;

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
  /** @example zf4pg538qx */
  rfid: string;
}

export interface TransferTokensDto {
  toAddress: string;

  /**
   * Array of token ids
   * @example []
   */
  editionId: string[];
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

  /** @example created */
  status: NftActionStatus;
  txHash: string;

  /** @example 80001 */
  chainId: ChainId;
  metadata: ActionMetadataDto;
}

export interface CollectionSearchDto {
  /** @example 0x389dd295657a6fb2336aa33e40aeb8fb81f97fe4 */
  contractAddress: string;

  /** @example 80001 */
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
  /** @example  */
  contractId?: string;

  /** @example uuid */
  subcategoryId: string;

  /** @example Token Collection */
  name: string;

  /** @example  */
  description?: string;

  /** @example https://dummyimage.com/600x400/fff/000 */
  mainImage?: string;

  /** @example {"title":"Title example"} */
  tokenData?: object;

  /** @example 0 */
  quantity: object;

  /** @example 0 */
  initialQuantityToMint: object;

  /** @example ["0ouog9xyojl","zf4pg538qx"] */
  rfids?: string[];

  /** @example null */
  ownerAddress?: string;
}

export interface UpdateTokenCollectionDto {
  /** @example  */
  contractId?: string;

  /** @example uuid */
  subcategoryId?: string;

  /** @example Token Collection */
  name?: string;

  /** @example  */
  description?: string;

  /** @example https://dummyimage.com/600x400/fff/000 */
  mainImage?: string;

  /** @example {"title":"Title example"} */
  tokenData?: object;

  /** @example 0 */
  quantity?: object;

  /** @example 0 */
  initialQuantityToMint?: object;

  /** @example ["0ouog9xyojl","zf4pg538qx"] */
  rfids?: string[];

  /** @example null */
  ownerAddress?: string;
}

export interface PublishTokenCollectionResponseDto {
  tokenCollection: TokenCollectionEntityDto;
  jobId: string;
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
}

export interface ByHostDto {
  /** @example tropix.pixway.io */
  host: string;
}

export interface CreateCompanyHostDto {
  /** @example tropix.pixway.io */
  host: string;
  companyId: string;
}

export interface UpdateCompanyHostDto {
  /** @example tropix.pixway.io */
  host?: string;
  companyId?: string;
}

export interface CreateCompanyDto {
  /**
   * Id in W3blockID
   * @format uuid
   */
  tenantId: string;

  /** @example tropix.pixway.io */
  host: string;
  platformRoyalty?: RoyaltyPlatformDto;
}

export interface CompanyThemeDto {
  headerLogoUrl?: string;
  headerBackgroundColor?: string;
  bodyCardBackgroundColor?: string;
}

export interface UpdateCompanyProfileDto {
  name?: string;
  theme?: CompanyThemeDto;
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

  /** @example pending */
  status: JobStatusesEnum;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
}

export interface TokenEditionInformationBaseResponseDto {
  /** @example 4 */
  chainId: ChainId;

  /** @example 0x0000000000000000000000000000000000000000 */
  contractAddress: string;

  /** @example 1 */
  editionNumber: number;

  /** @example true */
  isAvailable: boolean;

  /** @format uuid */
  id: string;
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
}

export interface PublicPageDataDto {
  company: CompanyPublicDataDto;
  group: PublicDataGroupDto;
  information: PublicDataInformationDto;
  dynamicInformation: PublicDataDynamicInformationDto;
  certificateTemplate: string;
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

export interface NFTsMetadataResponseDto {
  prop1: object;
  prop2: object;
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

  /** @example anymail@email.com */
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
   */
  export namespace Check {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status?: string;
      info?: Record<string, { status?: string }>;
      error?: Record<string, { status?: string }>;
      details?: Record<string, { status?: string }>;
    };
  }
  /**
   * No description
   * @tags Health
   * @name GetLiveness
   * @request GET:/health/liveness
   */
  export namespace GetLiveness {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Health
   * @name GetReadiness
   * @request GET:/health/readiness
   */
  export namespace GetReadiness {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Health
   * @name Index
   * @request GET:/health/metrics
   */
  export namespace Index {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Migrations {
  /**
   * No description
   * @tags Util
   * @name RunMigrations
   * @request POST:/migrations/run
   * @secure
   */
  export namespace RunMigrations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MigrationDto[];
  }
  /**
   * No description
   * @tags Util
   * @name RevertMigrations
   * @request POST:/migrations/revert
   * @secure
   */
  export namespace RevertMigrations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Util
   * @name GetPendingMigrations
   * @request GET:/migrations/pending
   * @secure
   */
  export namespace GetPendingMigrations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PendingMigrationsResponseDto;
  }
  /**
   * No description
   * @tags Util
   * @name GetAllMigrations
   * @request GET:/migrations/list
   * @secure
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
   */
  export namespace AccountCompleteRetry {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AccountCompleteRetryDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Auth {
  /**
   * No description
   * @tags Authentication
   * @name VerifySignUp
   * @request GET:/auth/verify-sign-up
   */
  export namespace VerifySignUp {
    export type RequestParams = {};
    export type RequestQuery = { email: string; token: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace CompanyId {
  /**
   * No description
   * @tags External contacts
   * @name Invite
   * @request POST:/{companyId}/external-contacts/invite
   * @secure
   */
  export namespace Invite {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = InviteExternalContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
  /**
   * No description
   * @tags External contacts
   * @name Create
   * @request POST:/{companyId}/external-contacts/import
   * @secure
   */
  export namespace Create {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = InviteExternalContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
  /**
   * No description
   * @tags External contacts
   * @name FindAll
   * @request GET:/{companyId}/external-contacts
   * @secure
   */
  export namespace FindAll {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
      id?: string[];
      userIds?: string[];
      minDate?: string;
      maxDate?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags External contacts
   * @name FindOne
   * @request GET:/{companyId}/external-contacts/{id}
   * @secure
   */
  export namespace FindOne {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
  /**
   * No description
   * @tags External contacts
   * @name Update
   * @request PATCH:/{companyId}/external-contacts/{id}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateExternalContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExternalContactEntityDto;
  }
  /**
   * No description
   * @tags Contracts - Royalty Eligible
   * @name Create2
   * @request POST:/{companyId}/contracts/royalty-eligible/create
   * @originalName create
   * @duplicate
   * @secure
   */
  export namespace Create2 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateRoyaltyEligibleDto;
    export type RequestHeaders = {};
    export type ResponseBody = RoyaltyEligibleEntityDto;
  }
  /**
   * No description
   * @tags Contracts - Royalty Eligible
   * @name FindAll2
   * @request GET:/{companyId}/contracts/royalty-eligible
   * @originalName findAll
   * @duplicate
   * @secure
   */
  export namespace FindAll2 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
      minDate?: string;
      maxDate?: string;
      id?: string[];
      userIds?: string[];
      externalContactIds?: string[];
      wallets?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags Contracts - Royalty Eligible
   * @name Upsert
   * @request PATCH:/{companyId}/contracts/royalty-eligible
   * @secure
   */
  export namespace Upsert {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = AlterRoyaltyEligibleDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Contracts - Royalty Eligible
   * @name FindOne2
   * @request GET:/{companyId}/contracts/royalty-eligible/{id}
   * @originalName findOne
   * @duplicate
   * @secure
   */
  export namespace FindOne2 {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RoyaltyEligibleEntityDto;
  }
  /**
   * No description
   * @tags Contracts
   * @name Create3
   * @request POST:/{companyId}/contracts
   * @originalName create
   * @duplicate
   * @secure
   */
  export namespace Create3 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateContractDto;
    export type RequestHeaders = {};
    export type ResponseBody = NftContractEntityDto;
  }
  /**
   * No description
   * @tags Contracts
   * @name FindAll3
   * @request GET:/{companyId}/contracts
   * @originalName findAll
   * @duplicate
   * @secure
   */
  export namespace FindAll3 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
      status?: 'draft' | 'publishing' | 'published' | 'failed';
      contractName?: string;
      minDate?: string;
      maxDate?: string;
      contactId?: string;
      participantName?: string;
      walletAddresses?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags Contracts
   * @name HasRole
   * @request PATCH:/{companyId}/contracts/has-role
   * @secure
   */
  export namespace HasRole {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = HasRoleDto;
    export type RequestHeaders = {};
    export type ResponseBody = HasRoleResponseDto;
  }
  /**
   * No description
   * @tags Contracts
   * @name GrantRole
   * @request PATCH:/{companyId}/contracts/grant-role
   * @secure
   */
  export namespace GrantRole {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = HasRoleDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Contracts
   * @name Update2
   * @request PATCH:/{companyId}/contracts/{id}
   * @originalName update
   * @duplicate
   * @secure
   */
  export namespace Update2 {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateContractDto;
    export type RequestHeaders = {};
    export type ResponseBody = NftContractEntityDto;
  }
  /**
   * No description
   * @tags Contracts
   * @name FindOne3
   * @request GET:/{companyId}/contracts/{id}
   * @originalName findOne
   * @duplicate
   * @secure
   */
  export namespace FindOne3 {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NftContractEntityDto;
  }
  /**
   * No description
   * @tags Contracts
   * @name Publish
   * @request PATCH:/{companyId}/contracts/{id}/publish
   * @secure
   */
  export namespace Publish {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Contracts
   * @name EstimateGas
   * @request GET:/{companyId}/contracts/{id}/estimate-gas
   * @secure
   */
  export namespace EstimateGas {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name Retry
   * @request PATCH:/{companyId}/token-editions/retry-bulk-by-collection
   * @secure
   */
  export namespace Retry {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = BulkTokenEditionByCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Token Editions
   * @name FindAll4
   * @request GET:/{companyId}/token-editions
   * @originalName findAll
   * @duplicate
   * @secure
   */
  export namespace FindAll4 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
      tokenCollectionId?: string;
      walletAddresses?: string[];
      status?: (
        | 'draft'
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
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags Token Editions
   * @name CheckRfid
   * @request GET:/{companyId}/token-editions/check-rfid
   * @secure
   */
  export namespace CheckRfid {
    export type RequestParams = { companyId: string };
    export type RequestQuery = { rfid: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RfidResponseDTO;
  }
  /**
   * No description
   * @tags Token Editions
   * @name ChangeStatusReadyToMint
   * @request PATCH:/{companyId}/token-editions/ready-to-mint
   * @secure
   */
  export namespace ChangeStatusReadyToMint {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = ChangeStatusReadyToMintDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Token Editions
   * @name EstimateMintGas
   * @request GET:/{companyId}/token-editions/{id}/estimate-gas/mint
   * @secure
   */
  export namespace EstimateMintGas {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = { quantityToMint: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name ChangeStatusReadyToMintByEdition
   * @request PATCH:/{companyId}/token-editions/{id}/ready-to-mint
   * @secure
   */
  export namespace ChangeStatusReadyToMintByEdition {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionEntityDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name BurnTokenEdition
   * @request DELETE:/{companyId}/token-editions/burn
   * @secure
   */
  export namespace BurnTokenEdition {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = BurnTokensDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Token Editions
   * @name EstimateBurnGas
   * @request GET:/{companyId}/token-editions/{id}/estimate-gas/burn
   * @secure
   */
  export namespace EstimateBurnGas {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name ChangeRfidByEdition
   * @request PATCH:/{companyId}/token-editions/{id}/rfid
   * @secure
   */
  export namespace ChangeRfidByEdition {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = ChangeRfidDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionEntityDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name FindOne4
   * @request GET:/{companyId}/token-editions/{id}
   * @originalName findOne
   * @duplicate
   * @secure
   */
  export namespace FindOne4 {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionPublicDto;
  }
  /**
   * No description
   * @tags Token Editions
   * @name TransferToken
   * @request PATCH:/{companyId}/token-editions/transfer-token
   * @secure
   */
  export namespace TransferToken {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = TransferTokensDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Token Editions
   * @name EstimateTransferGas
   * @request GET:/{companyId}/token-editions/{id}/estimate-gas/transfer
   * @secure
   */
  export namespace EstimateTransferGas {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = { toAddress: string };
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
   */
  export namespace TransferTokenByEdition {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = TransferTokenByEditionDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Token Editions
   * @name GetLastTransferToken
   * @request GET:/{companyId}/token-editions/{id}/get-last/{type}
   * @secure
   */
  export namespace GetLastTransferToken {
    export type RequestParams = { companyId: string; id: string; type: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActionResponseDto;
  }
  /**
   * No description
   * @tags Token Collections
   * @name Create4
   * @request POST:/{companyId}/token-collections
   * @originalName create
   * @duplicate
   * @secure
   */
  export namespace Create4 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateTokenCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenCollectionEntityDto;
  }
  /**
   * No description
   * @tags Token Collections
   * @name FindAll5
   * @request GET:/{companyId}/token-collections
   * @originalName findAll
   * @duplicate
   * @secure
   */
  export namespace FindAll5 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
      status?: ('draft' | 'published')[];
      contractId?: string;
      subcategoryIds?: string[];
      walletAddresses?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags Token Collections
   * @name Publish2
   * @request PATCH:/{companyId}/token-collections/publish/{id}
   * @originalName publish
   * @duplicate
   * @secure
   */
  export namespace Publish2 {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTokenCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = PublishTokenCollectionResponseDto;
  }
  /**
   * No description
   * @tags Token Collections
   * @name EstimatePublishGas
   * @request GET:/{companyId}/token-collections/estimate-gas
   * @secure
   */
  export namespace EstimatePublishGas {
    export type RequestParams = { companyId: string };
    export type RequestQuery = { contractId: string; initialQuantityToMint: number; ownerAddress?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractEstimateGasResponseDto;
  }
  /**
   * No description
   * @tags Token Collections
   * @name Update3
   * @request PUT:/{companyId}/token-collections/{id}
   * @originalName update
   * @duplicate
   * @secure
   */
  export namespace Update3 {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTokenCollectionDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenCollectionEntityDto;
  }
  /**
   * No description
   * @tags Token Collections
   * @name FindOne5
   * @request GET:/{companyId}/token-collections/{id}
   * @originalName findOne
   * @duplicate
   * @secure
   */
  export namespace FindOne5 {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenCollectionEntityDto;
  }
  /**
   * No description
   * @tags Token Collections
   * @name BurnTokenCollection
   * @request DELETE:/{companyId}/token-collections/{id}/burn
   * @secure
   */
  export namespace BurnTokenCollection {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Token Collections
   * @name DeleteSingleDraft
   * @request DELETE:/{companyId}/token-collections/{id}/draft
   * @secure
   */
  export namespace DeleteSingleDraft {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Subcategories
   * @name Create5
   * @request POST:/{companyId}/subcategories
   * @originalName create
   * @duplicate
   * @secure
   */
  export namespace Create5 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateSubcategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto;
  }
  /**
   * No description
   * @tags Subcategories
   * @name FindAll6
   * @request GET:/{companyId}/subcategories
   * @originalName findAll
   * @duplicate
   * @secure
   */
  export namespace FindAll6 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = { categoryId?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto[];
  }
  /**
   * No description
   * @tags Subcategories
   * @name Update4
   * @request PATCH:/{companyId}/subcategories/{id}
   * @originalName update
   * @duplicate
   * @secure
   */
  export namespace Update4 {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateSubcategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto;
  }
  /**
   * No description
   * @tags Subcategories
   * @name FindOne6
   * @request GET:/{companyId}/subcategories/{id}
   * @originalName findOne
   * @duplicate
   * @secure
   */
  export namespace FindOne6 {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SubcategoryEntityDto;
  }
  /**
   * No description
   * @tags Jobs
   * @name FindAll7
   * @request GET:/{companyId}/jobs
   * @originalName findAll
   * @duplicate
   * @secure
   */
  export namespace FindAll7 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags Jobs
   * @name FindOne7
   * @request GET:/{companyId}/jobs/{id}
   * @originalName findOne
   * @duplicate
   * @secure
   */
  export namespace FindOne7 {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobEntityDto;
  }
}

export namespace Blockchain {
  /**
   * No description
   * @tags Blockchain
   * @name ReceiveEventWebhook
   * @request POST:/blockchain/webhook/event/{companyId}
   */
  export namespace ReceiveEventWebhook {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = EventNotifyDto;
    export type RequestHeaders = { 'x-pixchain-signature': string };
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name ReceiveTransactionWebhook
   * @request POST:/blockchain/webhook/transaction/{companyId}
   */
  export namespace ReceiveTransactionWebhook {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { 'x-pixchain-signature': string };
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Blockchain
   * @name GetBalance
   * @request GET:/blockchain/balance/{address}/{chainId}
   * @secure
   */
  export namespace GetBalance {
    export type RequestParams = { address: string; chainId: ChainId };
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
   * @secure
   */
  export namespace GetGas {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Tokens {
  /**
   * No description
   * @tags Tokens
   * @name CheckCollectionTokenHolder
   * @request PATCH:/tokens/check-collection-token-holder
   * @secure
   */
  export namespace CheckCollectionTokenHolder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CheckCollectionTokenHolderDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Subcategories {
  /**
   * No description
   * @tags Subcategories
   * @name CreateWithoutCompany
   * @request POST:/subcategories
   * @secure
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
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateSubcategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Categories {
  /**
   * No description
   * @tags Categories
   * @name Create
   * @request POST:/categories
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
  /**
   * No description
   * @tags Categories
   * @name FindAll
   * @request GET:/categories
   * @secure
   */
  export namespace FindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto[];
  }
  /**
   * No description
   * @tags Categories
   * @name Update
   * @request PUT:/categories/{id}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateCategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
  /**
   * No description
   * @tags Categories
   * @name FindOne
   * @request GET:/categories/{id}
   * @secure
   */
  export namespace FindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryEntityDto;
  }
}

export namespace Cloudinary {
  /**
   * No description
   * @tags Cloudinary
   * @name GetSignature
   * @request GET:/cloudinary/get-signature
   */
  export namespace GetSignature {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SignaturePayloadResponseDto;
  }
}

export namespace Companies {
  /**
   * No description
   * @tags Companies Hosts
   * @name GetCompanyByHost
   * @request GET:/companies/hosts/by-host
   * @secure
   */
  export namespace GetCompanyByHost {
    export type RequestParams = {};
    export type RequestQuery = { host: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Companies Hosts
   * @name ToggleMainHost
   * @request PUT:/companies/hosts/toggle/is-main
   * @secure
   */
  export namespace ToggleMainHost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ByHostDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies Hosts
   * @name Create
   * @request POST:/companies/hosts
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCompanyHostDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies Hosts
   * @name FindAll
   * @request GET:/companies/hosts
   * @secure
   */
  export namespace FindAll {
    export type RequestParams = {};
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies Hosts
   * @name FindOne
   * @request GET:/companies/hosts/{id}
   * @secure
   */
  export namespace FindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies Hosts
   * @name Update
   * @request PUT:/companies/hosts/{id}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateCompanyHostDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies Hosts
   * @name Remove
   * @request DELETE:/companies/hosts/{id}
   * @secure
   */
  export namespace Remove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies
   * @name Create2
   * @request POST:/companies
   * @originalName create
   * @duplicate
   * @secure
   */
  export namespace Create2 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCompanyDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
  /**
   * No description
   * @tags Companies
   * @name FindAll2
   * @request GET:/companies
   * @originalName findAll
   * @duplicate
   * @secure
   */
  export namespace FindAll2 {
    export type RequestParams = {};
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: 'ASC' | 'DESC';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AbstractBase;
  }
  /**
   * No description
   * @tags Companies
   * @name SetupCompany
   * @request PATCH:/companies/{companyId}/setup
   * @secure
   */
  export namespace SetupCompany {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Companies
   * @name FindOne2
   * @request GET:/companies/{companyId}
   * @originalName findOne
   * @duplicate
   * @secure
   */
  export namespace FindOne2 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
  /**
   * No description
   * @tags Companies
   * @name Update2
   * @request PATCH:/companies/{companyId}
   * @originalName update
   * @duplicate
   * @secure
   */
  export namespace Update2 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateCompanyDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
  /**
   * No description
   * @tags Companies
   * @name Remove2
   * @request DELETE:/companies/{companyId}
   * @originalName remove
   * @duplicate
   * @secure
   */
  export namespace Remove2 {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies
   * @name UpdateProfile
   * @request PATCH:/companies/profile/{companyId}
   * @secure
   */
  export namespace UpdateProfile {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateCompanyProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyEntityDto;
  }
  /**
   * No description
   * @tags Companies
   * @name ResyncCloneContracts
   * @request POST:/companies/resync-clone-contract
   * @secure
   */
  export namespace ResyncCloneContracts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies
   * @name CreateOrUpdateEmail
   * @request POST:/companies/{companyId}/emails
   * @secure
   */
  export namespace CreateOrUpdateEmail {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateCustomEmailDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Companies
   * @name FindEmails
   * @request GET:/companies/{companyId}/emails
   * @secure
   */
  export namespace FindEmails {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Metadata {
  /**
   * No description
   * @tags Metadata
   * @name ByCollectionAndEditionNumber
   * @request GET:/metadata/by-collection/{collectionId}/{editionNumber}
   */
  export namespace ByCollectionAndEditionNumber {
    export type RequestParams = { collectionId: string; editionNumber: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenEditionInformationBaseResponseDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name TokenPayload
   * @request GET:/metadata/token/{address}/{chainId}/{tokenId}
   */
  export namespace TokenPayload {
    export type RequestParams = { address: string; chainId: ChainId; tokenId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokenPayloadDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name PublicPageByRfid
   * @request GET:/metadata/rfid/{rfid}
   */
  export namespace PublicPageByRfid {
    export type RequestParams = { rfid: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicPageDataDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name PublicPageByAddress
   * @request GET:/metadata/address/{address}/{chainId}/{tokenId}
   */
  export namespace PublicPageByAddress {
    export type RequestParams = { address: string; chainId: ChainId; tokenId: number };
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
   */
  export namespace GetContractByAddressAndChainId {
    export type RequestParams = { address: string; chainId: ChainId };
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
   */
  export namespace GetAllNfTs {
    export type RequestParams = { address: string; chainId: ChainId };
    export type RequestQuery = { forceRefresh: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NFTsMetadataResponseDto;
  }
  /**
   * No description
   * @tags Metadata
   * @name GetNftByContractAndTokenId
   * @request GET:/metadata/nfts/{address}/{chainId}/{tokenId}
   */
  export namespace GetNftByContractAndTokenId {
    export type RequestParams = { address: string; chainId: ChainId; tokenId: number };
    export type RequestQuery = { forceRefresh: boolean };
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
   */
  export namespace CountTransactionsByAddress {
    export type RequestParams = { companyId: string; chainId: ChainId; address: string };
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
   */
  export namespace CountTransactions {
    export type RequestParams = { companyId: string; chainId: ChainId };
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
   */
  export namespace GetMetadataUpdateHistory {
    export type RequestParams = {};
    export type RequestQuery = {
      page?: number;
      limit?: number;
      orderBy?: 'ASC' | 'DESC';
      startDate: string;
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
   * No description
   * @tags Contacts
   * @name Create
   * @request POST:/contacts/contact-us
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateContactDto;
    export type RequestHeaders = {};
    export type ResponseBody = ContactEntityDto[];
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

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

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
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
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
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
 * @version 0.4.1
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
     */
    check: (params: RequestParams = {}) =>
      this.request<
        {
          status?: string;
          info?: Record<string, { status?: string }>;
          error?: Record<string, { status?: string }>;
          details?: Record<string, { status?: string }>;
        },
        {
          status?: string;
          info?: Record<string, { status?: string }>;
          error?: Record<string, { status?: string }>;
          details?: Record<string, { status?: string }>;
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
     */
    getLiveness: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/health/liveness`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name GetReadiness
     * @request GET:/health/readiness
     */
    getReadiness: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/health/readiness`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name Index
     * @request GET:/health/metrics
     */
    index: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/health/metrics`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  migrations = {
    /**
     * No description
     *
     * @tags Util
     * @name RunMigrations
     * @request POST:/migrations/run
     * @secure
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
     * No description
     *
     * @tags Util
     * @name RevertMigrations
     * @request POST:/migrations/revert
     * @secure
     */
    revertMigrations: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/migrations/revert`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Util
     * @name GetPendingMigrations
     * @request GET:/migrations/pending
     * @secure
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
     * No description
     *
     * @tags Util
     * @name GetAllMigrations
     * @request GET:/migrations/list
     * @secure
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
     */
    accountCompleteRetry: (data: AccountCompleteRetryDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/users/account-complete/retry`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Authentication
     * @name VerifySignUp
     * @request GET:/auth/verify-sign-up
     */
    verifySignUp: (query: { email: string; token: string }, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/auth/verify-sign-up`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  companyId = {
    /**
     * No description
     *
     * @tags External contacts
     * @name Invite
     * @request POST:/{companyId}/external-contacts/invite
     * @secure
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
     * No description
     *
     * @tags External contacts
     * @name Create
     * @request POST:/{companyId}/external-contacts/import
     * @secure
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
     * No description
     *
     * @tags External contacts
     * @name FindAll
     * @request GET:/{companyId}/external-contacts
     * @secure
     */
    findAll: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: 'ASC' | 'DESC';
        id?: string[];
        userIds?: string[];
        minDate?: string;
        maxDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AbstractBase, void>({
        path: `/${companyId}/external-contacts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags External contacts
     * @name FindOne
     * @request GET:/{companyId}/external-contacts/{id}
     * @secure
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
     * No description
     *
     * @tags External contacts
     * @name Update
     * @request PATCH:/{companyId}/external-contacts/{id}
     * @secure
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

    /**
     * No description
     *
     * @tags Contracts - Royalty Eligible
     * @name Create2
     * @request POST:/{companyId}/contracts/royalty-eligible/create
     * @originalName create
     * @duplicate
     * @secure
     */
    create2: (companyId: string, data: CreateRoyaltyEligibleDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Contracts - Royalty Eligible
     * @name FindAll2
     * @request GET:/{companyId}/contracts/royalty-eligible
     * @originalName findAll
     * @duplicate
     * @secure
     */
    findAll2: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: 'ASC' | 'DESC';
        minDate?: string;
        maxDate?: string;
        id?: string[];
        userIds?: string[];
        externalContactIds?: string[];
        wallets?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<AbstractBase, void>({
        path: `/${companyId}/contracts/royalty-eligible`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contracts - Royalty Eligible
     * @name Upsert
     * @request PATCH:/{companyId}/contracts/royalty-eligible
     * @secure
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
     * No description
     *
     * @tags Contracts - Royalty Eligible
     * @name FindOne2
     * @request GET:/{companyId}/contracts/royalty-eligible/{id}
     * @originalName findOne
     * @duplicate
     * @secure
     */
    findOne2: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<RoyaltyEligibleEntityDto, void>({
        path: `/${companyId}/contracts/royalty-eligible/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contracts
     * @name Create3
     * @request POST:/{companyId}/contracts
     * @originalName create
     * @duplicate
     * @secure
     */
    create3: (companyId: string, data: CreateContractDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Contracts
     * @name FindAll3
     * @request GET:/{companyId}/contracts
     * @originalName findAll
     * @duplicate
     * @secure
     */
    findAll3: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: 'ASC' | 'DESC';
        status?: 'draft' | 'publishing' | 'published' | 'failed';
        contractName?: string;
        minDate?: string;
        maxDate?: string;
        contactId?: string;
        participantName?: string;
        walletAddresses?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AbstractBase, void>({
        path: `/${companyId}/contracts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contracts
     * @name HasRole
     * @request PATCH:/{companyId}/contracts/has-role
     * @secure
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
     * No description
     *
     * @tags Contracts
     * @name GrantRole
     * @request PATCH:/{companyId}/contracts/grant-role
     * @secure
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
     * No description
     *
     * @tags Contracts
     * @name Update2
     * @request PATCH:/{companyId}/contracts/{id}
     * @originalName update
     * @duplicate
     * @secure
     */
    update2: (id: string, companyId: string, data: UpdateContractDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Contracts
     * @name FindOne3
     * @request GET:/{companyId}/contracts/{id}
     * @originalName findOne
     * @duplicate
     * @secure
     */
    findOne3: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<NftContractEntityDto, void>({
        path: `/${companyId}/contracts/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contracts
     * @name Publish
     * @request PATCH:/{companyId}/contracts/{id}/publish
     * @secure
     */
    publish: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/${companyId}/contracts/${id}/publish`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contracts
     * @name EstimateGas
     * @request GET:/{companyId}/contracts/{id}/estimate-gas
     * @secure
     */
    estimateGas: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<ContractEstimateGasResponseDto, void>({
        path: `/${companyId}/contracts/${id}/estimate-gas`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Editions
     * @name Retry
     * @request PATCH:/{companyId}/token-editions/retry-bulk-by-collection
     * @secure
     */
    retry: (companyId: string, data: BulkTokenEditionByCollectionDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/${companyId}/token-editions/retry-bulk-by-collection`,
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
     * @tags Token Editions
     * @name FindAll4
     * @request GET:/{companyId}/token-editions
     * @originalName findAll
     * @duplicate
     * @secure
     */
    findAll4: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: 'ASC' | 'DESC';
        tokenCollectionId?: string;
        walletAddresses?: string[];
        status?: (
          | 'draft'
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
      this.request<AbstractBase, void>({
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
     */
    checkRfid: (companyId: string, query: { rfid: string }, params: RequestParams = {}) =>
      this.request<RfidResponseDTO, void>({
        path: `/${companyId}/token-editions/check-rfid`,
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
     * @name ChangeStatusReadyToMint
     * @request PATCH:/{companyId}/token-editions/ready-to-mint
     * @secure
     */
    changeStatusReadyToMint: (companyId: string, data: ChangeStatusReadyToMintDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/${companyId}/token-editions/ready-to-mint`,
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
     * @tags Token Editions
     * @name EstimateMintGas
     * @request GET:/{companyId}/token-editions/{id}/estimate-gas/mint
     * @secure
     */
    estimateMintGas: (companyId: string, id: string, query: { quantityToMint: number }, params: RequestParams = {}) =>
      this.request<ContractEstimateGasResponseDto, void>({
        path: `/${companyId}/token-editions/${id}/estimate-gas/mint`,
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
     * @name ChangeStatusReadyToMintByEdition
     * @request PATCH:/{companyId}/token-editions/{id}/ready-to-mint
     * @secure
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
     * No description
     *
     * @tags Token Editions
     * @name BurnTokenEdition
     * @request DELETE:/{companyId}/token-editions/burn
     * @secure
     */
    burnTokenEdition: (companyId: string, data: BurnTokensDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/${companyId}/token-editions/burn`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Editions
     * @name EstimateBurnGas
     * @request GET:/{companyId}/token-editions/{id}/estimate-gas/burn
     * @secure
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
     * No description
     *
     * @tags Token Editions
     * @name ChangeRfidByEdition
     * @request PATCH:/{companyId}/token-editions/{id}/rfid
     * @secure
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
     * No description
     *
     * @tags Token Editions
     * @name FindOne4
     * @request GET:/{companyId}/token-editions/{id}
     * @originalName findOne
     * @duplicate
     * @secure
     */
    findOne4: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<TokenEditionPublicDto, void>({
        path: `/${companyId}/token-editions/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Editions
     * @name TransferToken
     * @request PATCH:/{companyId}/token-editions/transfer-token
     * @secure
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
     * No description
     *
     * @tags Token Editions
     * @name EstimateTransferGas
     * @request GET:/{companyId}/token-editions/{id}/estimate-gas/transfer
     * @secure
     */
    estimateTransferGas: (companyId: string, id: string, query: { toAddress: string }, params: RequestParams = {}) =>
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
     */
    transferTokenByEdition: (
      companyId: string,
      id: string,
      data: TransferTokenByEditionDto,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/${companyId}/token-editions/${id}/transfer-token`,
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
     * @tags Token Editions
     * @name GetLastTransferToken
     * @request GET:/{companyId}/token-editions/{id}/get-last/{type}
     * @secure
     */
    getLastTransferToken: (companyId: string, id: string, type: string, params: RequestParams = {}) =>
      this.request<ActionResponseDto, void>({
        path: `/${companyId}/token-editions/${id}/get-last/${type}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Collections
     * @name Create4
     * @request POST:/{companyId}/token-collections
     * @originalName create
     * @duplicate
     * @secure
     */
    create4: (companyId: string, data: CreateTokenCollectionDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Token Collections
     * @name FindAll5
     * @request GET:/{companyId}/token-collections
     * @originalName findAll
     * @duplicate
     * @secure
     */
    findAll5: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: 'ASC' | 'DESC';
        status?: ('draft' | 'published')[];
        contractId?: string;
        subcategoryIds?: string[];
        walletAddresses?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AbstractBase, void>({
        path: `/${companyId}/token-collections`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Collections
     * @name Publish2
     * @request PATCH:/{companyId}/token-collections/publish/{id}
     * @originalName publish
     * @duplicate
     * @secure
     */
    publish2: (companyId: string, id: string, data: UpdateTokenCollectionDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Token Collections
     * @name EstimatePublishGas
     * @request GET:/{companyId}/token-collections/estimate-gas
     * @secure
     */
    estimatePublishGas: (
      companyId: string,
      query: { contractId: string; initialQuantityToMint: number; ownerAddress?: string },
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
     * No description
     *
     * @tags Token Collections
     * @name Update3
     * @request PUT:/{companyId}/token-collections/{id}
     * @originalName update
     * @duplicate
     * @secure
     */
    update3: (companyId: string, id: string, data: UpdateTokenCollectionDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Token Collections
     * @name FindOne5
     * @request GET:/{companyId}/token-collections/{id}
     * @originalName findOne
     * @duplicate
     * @secure
     */
    findOne5: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<TokenCollectionEntityDto, void>({
        path: `/${companyId}/token-collections/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Collections
     * @name BurnTokenCollection
     * @request DELETE:/{companyId}/token-collections/{id}/burn
     * @secure
     */
    burnTokenCollection: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/${companyId}/token-collections/${id}/burn`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token Collections
     * @name DeleteSingleDraft
     * @request DELETE:/{companyId}/token-collections/{id}/draft
     * @secure
     */
    deleteSingleDraft: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/${companyId}/token-collections/${id}/draft`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subcategories
     * @name Create5
     * @request POST:/{companyId}/subcategories
     * @originalName create
     * @duplicate
     * @secure
     */
    create5: (companyId: string, data: CreateSubcategoryDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Subcategories
     * @name FindAll6
     * @request GET:/{companyId}/subcategories
     * @originalName findAll
     * @duplicate
     * @secure
     */
    findAll6: (companyId: string, query?: { categoryId?: string }, params: RequestParams = {}) =>
      this.request<SubcategoryEntityDto[], void>({
        path: `/${companyId}/subcategories`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Subcategories
     * @name Update4
     * @request PATCH:/{companyId}/subcategories/{id}
     * @originalName update
     * @duplicate
     * @secure
     */
    update4: (id: string, companyId: string, data: UpdateSubcategoryDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Subcategories
     * @name FindOne6
     * @request GET:/{companyId}/subcategories/{id}
     * @originalName findOne
     * @duplicate
     * @secure
     */
    findOne6: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<SubcategoryEntityDto, void>({
        path: `/${companyId}/subcategories/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Jobs
     * @name FindAll7
     * @request GET:/{companyId}/jobs
     * @originalName findAll
     * @duplicate
     * @secure
     */
    findAll7: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: 'ASC' | 'DESC' },
      params: RequestParams = {},
    ) =>
      this.request<AbstractBase, void>({
        path: `/${companyId}/jobs`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Jobs
     * @name FindOne7
     * @request GET:/{companyId}/jobs/{id}
     * @originalName findOne
     * @duplicate
     * @secure
     */
    findOne7: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<JobEntityDto, void>({
        path: `/${companyId}/jobs/${id}`,
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
     */
    receiveTransactionWebhook: (companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/webhook/transaction/${companyId}`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blockchain
     * @name GetBalance
     * @request GET:/blockchain/balance/{address}/{chainId}
     * @secure
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
     * @secure
     */
    getGas: (companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/blockchain/gas-cost/${companyId}`,
        method: 'GET',
        secure: true,
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
  subcategories = {
    /**
     * No description
     *
     * @tags Subcategories
     * @name CreateWithoutCompany
     * @request POST:/subcategories
     * @secure
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
     * @secure
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
  categories = {
    /**
     * No description
     *
     * @tags Categories
     * @name Create
     * @request POST:/categories
     * @secure
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
     * No description
     *
     * @tags Categories
     * @name FindAll
     * @request GET:/categories
     * @secure
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
     * No description
     *
     * @tags Categories
     * @name Update
     * @request PUT:/categories/{id}
     * @secure
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
     * No description
     *
     * @tags Categories
     * @name FindOne
     * @request GET:/categories/{id}
     * @secure
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
     * No description
     *
     * @tags Cloudinary
     * @name GetSignature
     * @request GET:/cloudinary/get-signature
     */
    getSignature: (params: RequestParams = {}) =>
      this.request<SignaturePayloadResponseDto, void>({
        path: `/cloudinary/get-signature`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  companies = {
    /**
     * No description
     *
     * @tags Companies Hosts
     * @name GetCompanyByHost
     * @request GET:/companies/hosts/by-host
     * @secure
     */
    getCompanyByHost: (query: { host: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/hosts/by-host`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies Hosts
     * @name ToggleMainHost
     * @request PUT:/companies/hosts/toggle/is-main
     * @secure
     */
    toggleMainHost: (data: ByHostDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/hosts/toggle/is-main`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies Hosts
     * @name Create
     * @request POST:/companies/hosts
     * @secure
     */
    create: (data: CreateCompanyHostDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/hosts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies Hosts
     * @name FindAll
     * @request GET:/companies/hosts
     * @secure
     */
    findAll: (
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: 'ASC' | 'DESC' },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/companies/hosts`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies Hosts
     * @name FindOne
     * @request GET:/companies/hosts/{id}
     * @secure
     */
    findOne: (id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/hosts/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies Hosts
     * @name Update
     * @request PUT:/companies/hosts/{id}
     * @secure
     */
    update: (id: string, data: UpdateCompanyHostDto, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/hosts/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies Hosts
     * @name Remove
     * @request DELETE:/companies/hosts/{id}
     * @secure
     */
    remove: (id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/hosts/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name Create2
     * @request POST:/companies
     * @originalName create
     * @duplicate
     * @secure
     */
    create2: (data: CreateCompanyDto, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags Companies
     * @name FindAll2
     * @request GET:/companies
     * @originalName findAll
     * @duplicate
     * @secure
     */
    findAll2: (
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: 'ASC' | 'DESC' },
      params: RequestParams = {},
    ) =>
      this.request<AbstractBase, void>({
        path: `/companies`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name SetupCompany
     * @request PATCH:/companies/{companyId}/setup
     * @secure
     */
    setupCompany: (companyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}/setup`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name FindOne2
     * @request GET:/companies/{companyId}
     * @originalName findOne
     * @duplicate
     * @secure
     */
    findOne2: (companyId: string, params: RequestParams = {}) =>
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
     * @name Update2
     * @request PATCH:/companies/{companyId}
     * @originalName update
     * @duplicate
     * @secure
     */
    update2: (companyId: string, data: UpdateCompanyDto, params: RequestParams = {}) =>
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
     * @name Remove2
     * @request DELETE:/companies/{companyId}
     * @originalName remove
     * @duplicate
     * @secure
     */
    remove2: (companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/${companyId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name UpdateProfile
     * @request PATCH:/companies/profile/{companyId}
     * @secure
     */
    updateProfile: (companyId: string, data: UpdateCompanyProfileDto, params: RequestParams = {}) =>
      this.request<CompanyEntityDto, void>({
        path: `/companies/profile/${companyId}`,
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
     * @name ResyncCloneContracts
     * @request POST:/companies/resync-clone-contract
     * @secure
     */
    resyncCloneContracts: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/resync-clone-contract`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name CreateOrUpdateEmail
     * @request POST:/companies/{companyId}/emails
     * @secure
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
     * No description
     *
     * @tags Companies
     * @name FindEmails
     * @request GET:/companies/{companyId}/emails
     * @secure
     */
    findEmails: (companyId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/companies/${companyId}/emails`,
        method: 'GET',
        secure: true,
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
     * @request GET:/metadata/token/{address}/{chainId}/{tokenId}
     */
    tokenPayload: (address: string, chainId: ChainId, tokenId: number, params: RequestParams = {}) =>
      this.request<TokenPayloadDto, any>({
        path: `/metadata/token/${address}/${chainId}/${tokenId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name PublicPageByRfid
     * @request GET:/metadata/rfid/{rfid}
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
     * @request GET:/metadata/address/{address}/{chainId}/{tokenId}
     */
    publicPageByAddress: (address: string, chainId: ChainId, tokenId: number, params: RequestParams = {}) =>
      this.request<PublicPageDataDto, any>({
        path: `/metadata/address/${address}/${chainId}/${tokenId}`,
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
     */
    getAllNfTs: (address: string, chainId: ChainId, query: { forceRefresh: boolean }, params: RequestParams = {}) =>
      this.request<NFTsMetadataResponseDto, void>({
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
     * @request GET:/metadata/nfts/{address}/{chainId}/{tokenId}
     */
    getNftByContractAndTokenId: (
      address: string,
      chainId: ChainId,
      tokenId: number,
      query: { forceRefresh: boolean },
      params: RequestParams = {},
    ) =>
      this.request<NFTsMetadataResponseDto, void>({
        path: `/metadata/nfts/${address}/${chainId}/${tokenId}`,
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
     */
    getMetadataUpdateHistory: (
      query: {
        page?: number;
        limit?: number;
        orderBy?: 'ASC' | 'DESC';
        startDate: string;
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
     * No description
     *
     * @tags Contacts
     * @name Create
     * @request POST:/contacts/contact-us
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
