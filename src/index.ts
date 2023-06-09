export type Fiber = 'flax' | 'wool'
export type Thread = 'linen' | 'yarn'

export function spin(fiber: Fiber): Thread {
  switch (fiber) {
    case 'flax':
      return 'linen'
    case 'wool':
      return 'yarn'
    default:
      throw new Error(`Unrecognized fiber type ${fiber}`)
  }
}
