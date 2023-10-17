export function getLastDigit(value: number) {
  return value.toString().slice(-1) as unknown as number;
}
