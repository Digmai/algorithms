export function generateArray(num: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < num; i++) {
    array.push(~~(Math.random() * i) * ~~(Math.random() * i) + i);
  }
  return array;
}
