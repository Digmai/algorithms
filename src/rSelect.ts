import { generateArray } from "../utils/generateArray";
import partition from "./partition";
import quickSort from "./quickSort";

export default function RSelect(arr: number[], i: number) {
  if (arr.length === 1) return arr[0];

  let temp = arr;

  const pivotIndex = partition(temp, 0, arr.length - 1);

  if (pivotIndex === i) return temp[pivotIndex];
  if (pivotIndex > i) return RSelect(temp.slice(0, pivotIndex), i);
  else return RSelect(temp.slice(pivotIndex, temp.length), i - pivotIndex);
}

let arr = generateArray(15);
let tempArr = arr;
quickSort(tempArr);
let i = 7;

console.log(RSelect(arr, i));
console.log(RSelect(tempArr, i));
