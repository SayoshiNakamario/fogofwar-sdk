import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const FLEXUSD_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72'
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x6008247F53395E7be698249770aa1D2bfE265Ca0',
  [ChainId.SMARTBCH_AMBER]: '0xaa094cA3FBd19dCCcE91C79d1FffA28293B05f28'
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x5d0bF8d8c8b054080E2131D8b260a5c6959411B8',
  [ChainId.SMARTBCH_AMBER]: '0x72a1A3F85e775dbd82D737830190aCB338fd6D71'
}

export const MISTROLL_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x719288288C7a5390206FA7F4fD51baDFd5CbF28A',
  [ChainId.SMARTBCH_AMBER]: '0x89eb9eC41015074Ffa9353b99EDd6626c2810078'
}

export const MIST_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x5fA664f69c2A4A3ec94FaC3cBf7049BD9CA73129',
  [ChainId.SMARTBCH_AMBER]: '0x3d2cd929D1fC1dA68D2557AB85336C2740b1Ae81'
}

export const FOG_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3DCe3Df628687346B46d4A65D04CA1aB1DCd97fe',
  [ChainId.SMARTBCH_AMBER]: '0xBB1b58F3b3b9E03676Bd2ab2be1e14F5F815a603'
}
export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x25E1192964d14A5b59E81b8F3A5f8503ccE22050',
  [ChainId.SMARTBCH_AMBER]: '0x5ee747274cDAc7F6CF5cD3aE2c53123BCEED59c4'
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xC41C680c60309d4646379eD62020c534eB67b6f4',
  [ChainId.SMARTBCH_AMBER]: '0xceb95423B86c1823deC2Cc6F877997DC9349C2F1'
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7D1d91E59D1DA60E3ECC5701a4bc669Ab182DaE8',
  [ChainId.SMARTBCH_AMBER]: '0x6b8A569B1bA6a172d2e8Dd244282a4b16b14CaEA'
}

export const BENTOBOX_ADDRESS: AddressMap = {}
export const KASHI_ADDRESS: AddressMap = {}
export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {}

export const WBCH_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
  [ChainId.SMARTBCH_AMBER]: '0x17F4FCF5b6E0A95D4eE331c8529041896A073F9b'
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: WBCH_ADDRESS[ChainId.SMARTBCH],
  [ChainId.SMARTBCH_AMBER]: WBCH_ADDRESS[ChainId.SMARTBCH_AMBER],
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: '',
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3718e9C405D0bC779870355C34fb5624196A1cAA',
  [ChainId.SMARTBCH_AMBER]: '0xAF15A45d934a83b95daCFEbaACCaED8cF97e8200',
}

export const BORING_HELPER_ADDRESS: AddressMap = {}
