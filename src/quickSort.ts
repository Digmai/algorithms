import { generateArray } from "../utils/generateArray";
import { sortingCheck } from "../utils/sortingChec";
import partition from "./partition";

export default function quickSort(
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
) {
  // если: масив содежит больше одного элемента
  //  то:
  //     получяем index - pivot элемента
  //  если: левая граница меньше index - 1
  //      то: вызываем quickSort(left, index - 1)
  //  если: index < правой граници
  //      то: вызываем quickSort(index, right)

  if (arr.length > 1) {
    const index = partition(arr, left, right);
    if (left < index - 1) quickSort(arr, left, index - 1);

    if (index < right) quickSort(arr, index, right);
  }
}
