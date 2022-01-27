import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.SMARTBCH]:       '0xecd4654b5b240c99ac1e22bb5e96d6b7507d7611ec09c7e13e4f3cee5e76afc5',
  [ChainId.SMARTBCH_AMBER]: '0xecd4654b5b240c99ac1e22bb5e96d6b7507d7611ec09c7e13e4f3cee5e76afc5',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
