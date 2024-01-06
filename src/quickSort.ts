import { generateArray } from "../utils/generateArray";
import { sortingCheck } from "../utils/sortingChec";

function quickSort(
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

function partition(arr: number[], left: number, right: number) {
  // создаем дубликаты левого и правого индекса

  // полчаем pivot элемент сумируя инекс ((слева и справа / 2) округив в меньшую сторону)

  // цикл: если: левый индекс меньше или равна идексу грани справа
  //      то: цикл: если: элемент в масиве с инлексом левой граници меньше Pivot
  //                      то: дикриментируем левую грань
  //          цикл: если: элемент в масиве с инлексом правой граници боьше Pivot
  //                      то: инкреминтируем праую границу

  //          (       сужаем поиск справа и слева к Pivot элементу       )
  // найдя элементы в массиве который нахдяться не с той стороны от Pivot эемента - внури верхнего цикла
  //
  //        если: левый индекс меньше или равна идексу грани справа
  //              то: swap-оем эементы, перемещяя элемент справа на место эемента слева и наоборот
  //                  деаем инкримент и дикримент правого и левого индекса

  // выйдя из цикла мы прошлись по всем эементам
  // левая граница указывает на pivot
  // выходя из функции возвращяем левую границу (индекс)

  let i = left;
  let j = right;

  const pivot = arr[~~((i + j) / 2)];

  // for (; i <= j;) {
  //     for (; arr[i] < pivot;) {
  //         i++
  //     }
  //     for (; arr[j] > pivot;) {
  //         j--
  //     }

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function swap(arr: number[], left: number, right: number) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

let arr = generateArray(900000);

for (let index = 0; index < 20; index++) {
  quickSort(arr);
  console.log(sortingCheck(arr));
}
