import { generateArray } from "../utils/generateArray";
import { sortingCheck } from "../utils/sortingChec";

function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  let pivot = arr[~~(0 + arr.length - 1 / 2)];
  let left: number[] = [];
  let right: number[] = [];

  for (let index = 0; index < arr.length - 1; index++) {
    if (pivot > arr[index]) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
let arr = generateArray(100000);

console.log(sortingCheck(quickSort(arr)));
