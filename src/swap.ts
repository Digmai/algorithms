export default function swap(arr: number[], left: number, right: number) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
