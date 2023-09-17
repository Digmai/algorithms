function countSmallerNumbers(arr: number[]): number {
  let count = 0;

  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left: number[], right: number[]): number[] {
    const sortedArr = [];
    let i = 0; // индекс для левого подмассива
    let j = 0; // индекс для правого подмассива

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        sortedArr.push(left[i]);
        i++;
      } else {
        sortedArr.push(right[j]);
        count += left.length - i; // увеличиваем счетчик на количество элементов в левом подмассиве, которые остались
        j++;
      }
    }

    return sortedArr.concat(left.slice(i), right.slice(j));
  }

  mergeSort(arr);

  return count;
}
