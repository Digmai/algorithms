type ArrNoSort = number[];
type ArrSort = number[];

const defaultArrey = [1, 3, 2, 4, 5, 7, 6, 8, 9];

function mergeSort(arr: ArrNoSort): ArrSort {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: ArrSort, right: ArrSort): ArrSort {
  const mergedArray: ArrSort = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...mergedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

console.log(mergeSort(defaultArrey));
