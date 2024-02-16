export function indexOfLowestValue(array: number[]) {
  return array.indexOf(Math.min(...array));
}
