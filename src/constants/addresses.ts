import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const FLEXUSD_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72'
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: ''
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: ''
}

export const MISTROLL_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: ''
}

export const MIST_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x5fA664f69c2A4A3ec94FaC3cBf7049BD9CA73129',
  [ChainId.SMARTBCH_AMBER]: ''
}

export const FOG_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3DCe3Df628687346B46d4A65D04CA1aB1DCd97fe',
  [ChainId.SMARTBCH_AMBER]: ''
}
export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x25E1192964d14A5b59E81b8F3A5f8503ccE22050',
  [ChainId.SMARTBCH_AMBER]: ''
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: ''
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: ''
}

export const BENTOBOX_ADDRESS: AddressMap = {}
export const KASHI_ADDRESS: AddressMap = {}
export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {}

export const WBCH_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
  [ChainId.SMARTBCH_AMBER]: ''
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
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: '',
}

export const BORING_HELPER_ADDRESS: AddressMap = {}
