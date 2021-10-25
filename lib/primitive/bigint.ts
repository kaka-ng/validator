export function isBigInt (value: unknown): value is BigInt {
  return typeof value === 'bigint'
}

export function isIdentical (value: unknown, compare: unknown): boolean {
  return isBigInt(value) && isBigInt(compare) && value === compare
}
