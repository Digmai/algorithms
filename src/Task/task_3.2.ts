import { generateArray } from "../utils/generateArray";

//  arr - унимодальный массив
function findMaxElement(arr: number[]): number {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid + 1]) {
      // Максимальный элемент находится в левой половине массива
      high = mid;
    } else {
      // Максимальный элемент находится в правой половине массива
      low = mid + 1;
    }
  }

  // В конце цикла low будет указывать на максимальный элемент
  return arr[low];
}

function mainFindMaxElement(arr: number[]): number {
  if (arr.length === 1) return arr[0];

  const mid = Math.floor(arr.length / 2);

  const A = mainFindMaxElement(arr.slice(0, mid));
  const B = mainFindMaxElement(arr.slice(mid));

  return A > B ? A : B;
}

function findMaxElementRecursive(
  arr: number[],
  left: number,
  right: number
): number {
  if (left === right) {
    return arr[left];
  }

  const mid = Math.floor((left + right) / 2);

  const maxLeft = findMaxElementRecursive(arr, left, mid);
  const maxRight = findMaxElementRecursive(arr, mid + 1, right);

  return Math.max(maxLeft, maxRight);
}

function helperFindMaxElement(arr: number[]): number {
  console.time("mainFindMaxElement");
  let num = mainFindMaxElement(arr);
  console.timeEnd("mainFindMaxElement");
  return num;
}

function findMaxElement2(arr: number[]): number {
  console.time("findMaxElement2");
  let num = findMaxElementRecursive(arr, 0, arr.length - 1);
  console.timeEnd("findMaxElement2");
  return num;
}

//

const arr = generateArray(900000);

//

Promise.resolve(findMaxElement2(arr)).then(console.log);
// Promise.resolve(helperFindMaxElement(arr)).then(console.log);
console.log(arr);
