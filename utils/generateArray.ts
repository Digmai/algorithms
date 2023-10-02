export function generateArray(num: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < num; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}
