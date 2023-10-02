import { generateArray } from "../utils/generateArray";
import generateArrayIndex from "../utils/generateArrayIndex";

function FindNumberElement(
  arr: number[],
  left: number,
  right: number,
  i: number
): number | undefined {
  if (left === right) return arr[left];

  const mid = Math.floor((left + right) / 2);

  const A = FindNumberElement(arr, left, mid, i);
  const B = FindNumberElement(arr, mid + 1, right, i);

  if (A === i) return A;
  if (B === i) return B;
  return;
}

const arr = generateArray(9);
console.log(arr);
const index = generateArrayIndex(0);
Promise.resolve(FindNumberElement(arr, 0, arr.length - 1, arr[index]))
  .then((num) => {
    return num && num === arr[index];
  })
  .then(console.log);
console.log(arr[index]);
