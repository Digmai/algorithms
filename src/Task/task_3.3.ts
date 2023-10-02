import { generateArray } from "../utils/generateArray";
import generateArrayIndex from "../utils/generateArrayIndex";

export function findNubmerElementByIndexArray(arr: number[], index: number) {
  return { "arr[index]": arr[index], index, Boolean: arr[index] === index };
}
//

const arr = generateArray(10);
//
for (let index = 0; index < 10; index++) {
  Promise.resolve(
    findNubmerElementByIndexArray(arr, arr[generateArrayIndex(0)])
  ).then(console.log);
}

console.log(arr);
