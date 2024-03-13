export const FACTORY_ADDRESS = '0xaD079548b3501C5F218c638A02aB18187F62b207'

export const POOL_DEPLOYER_ADDRESS = '0xA5eceCa696C1BCeBF8c453AF7A2b87Fb0350c1f3'

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
