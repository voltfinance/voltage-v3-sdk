export const FACTORY_ADDRESS = '0x9e30D4834605914F9b9806fa18B5862Aa2A818e9'

export const POOL_DEPLOYER_ADDRESS = '0x508aE2b79E8Ad57EA806dE4C436D9464EBbb9CeF'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x5e94a88ee743ee75a19e39ce7782cfe925a2f48dae686faabe5e621160dafaca'

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
