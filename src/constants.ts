export const FACTORY_ADDRESS = '0x69D8De64ad540D68B94C47D87ECafaA9319515d3'

export const POOL_DEPLOYER_ADDRESS = '0x54dA244E2855Ec64d0d8D73fF92fdF5314156f42'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x18db01d8817510e2ce4e6bb423f31eadd2479da18627d5b48e97e81df60d946a'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
