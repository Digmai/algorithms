import { generateArray } from "../utils/generateArray";
import partition from "./partition";
import quickSort from "./quickSort";

export default function RSelect(
  arr: number[],
  i: number,
  left: number = 0,
  right: number = arr.length - 1
) {
  if (left === right) return arr[left];

  const pivotIndex = partition(arr, left, right);

  if (pivotIndex === i) return arr[pivotIndex];
  if (i < pivotIndex - 1) return RSelect(arr, i, left, pivotIndex - 1);
  else return RSelect(arr, i - pivotIndex, pivotIndex, right);
}

let arr = generateArray(15);
let tempArr = arr;
quickSort(tempArr);

for (let index = 0; index < 20; index++) {
  console.log(RSelect(arr, index) === RSelect(tempArr, index));
}
