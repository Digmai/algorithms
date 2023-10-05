import { testObj } from "./mock";
import { Endpoint, Endpoints } from "./types";

const checkMid = (params: Endpoints) => {
  let { mid, bottom, left, right, top } = params;

  return (
    mid.value < bottom.value &&
    mid.value < left.value &&
    mid.value < right.value &&
    mid.value < top.value
  );
};

// рекурсивная fn

// входные данные отсортированный массив в коотором по пять значений на размеченной матрице виде обекта
//      top
// left mid right
//     bottom
//

// базовый случай масив один обект
// то:
//  return findMin (arr[0]) - возвращяем проверку на локальнный минимум
//
//  [...fn, ...fn] - рекрсивный вызов внути корого осуществляеться проверка на локальный минимум
//
//
//

function findMid(arr: Endpoints[], left: number, right: number): Endpoints[] {
  if (left === right) return checkMid(arr[left]) ? [arr[left]] : [];

  const mid = Math.floor((left + right) / 2);
  return [...findMid(arr, left, mid), ...findMid(arr, mid + 1, right)];
}

// fn
// return - возвраащяем отсортированный массив то есть значение после проверки на локальный минимум

//
//

const defValue = Number.POSITIVE_INFINITY;
const defObj: Endpoint = { value: defValue, x: 0, y: 0 };

// fn - на вход матрица n * n в виде массива с ключами x, y
// подготовка массива для проверки
// return отсортированный массив после проверки - то есть пересечения на матрице входных данных в центре которых локльный минимум

function helperFindMid(arr: Endpoint[]) {
  let newArr = arr.map((e) => findEndpoint(arr, e));
  return findMid(newArr, 0, newArr.length - 1);
}

function findEndpoint(arr: Endpoint[], endpoint: Endpoint): Endpoints {
  return {
    mid: endpoint,
    top:
      arr.find((e) => e.x === endpoint.x && e.y === endpoint.y + 1) || defObj,
    left:
      arr.find((e) => e.x === endpoint.x - 1 && e.y === endpoint.y) || defObj,
    right:
      arr.find((e) => e.x === endpoint.x + 1 && e.y === endpoint.y) || defObj,
    bottom:
      arr.find((e) => e.x === endpoint.x && e.y === endpoint.y - 1) || defObj,
  };
}

// 6 4 3
// 2 1 5
// 0 3 4

let arr: Endpoint[] = [
  { value: 6, x: 1, y: 3 },
  { value: 4, x: 2, y: 3 },
  { value: 3, x: 3, y: 3 },
  { value: 0, x: 1, y: 1 },
  { value: 3, x: 2, y: 1 },
  { value: 2, x: 1, y: 2 },
  { value: 1, x: 2, y: 2 },
  { value: 4, x: 3, y: 1 },
  { value: 5, x: 3, y: 2 },
];

Promise.resolve(helperFindMid(arr)).then(console.log);
