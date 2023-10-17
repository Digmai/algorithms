import { testObj } from "./mock";
import { findMaxElementRecursive } from "./task_3.2";
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

function name(arr: Endpoint[]) {
  const X = findMaxElementRecursive(arr, 0, arr.length - 1, (e) => e.x);
  const Y = findMaxElementRecursive(arr, 0, arr.length - 1, (e) => e.y);

  let newArr: any[][] = [];

  for (let indY = 0; indY < Y; indY++) {
    newArr[indY] = [];
    for (let indX = 0; indX < X; indX++) {
      newArr[indY][indX] = "";
    }
  }

  return newArr;
}

//

function consoleWriteArray(arr: Endpoint[]) {
  let arrray = name(arr);

  console.log(arrray);

  Promise.resolve(helperFindMid(arr)).then((endpoint) => {
    endpoint.forEach((e) => {
      console.log(e);

      // arrray[e.top.y][e.top.x] = e.top.value;
      // arrray[e.bottom.y][e.bottom.x] = e.bottom.value;

      // arrray[e.left.y][e.left.x] = e.left.value;
      // arrray[e.right.y][e.right.x] = e.right.value;
      arrray[--e.mid.y][--e.mid.x] = e.mid.value;
    });
  });
  // .finally(() => console.log(arrray));
  return arrray;
}

// 2 3 0 2
// 6 4 3 1
// 2 1 5 4
// 0 3 4 2

let arr: Endpoint[] = [
  { value: 2, x: 1, y: 4 },
  { value: 3, x: 2, y: 4 },
  { value: 0, x: 3, y: 4 },
  { value: 2, x: 4, y: 4 },

  { value: 6, x: 1, y: 3 },
  { value: 4, x: 2, y: 3 },
  { value: 3, x: 3, y: 3 },
  { value: 1, x: 4, y: 3 },

  { value: 2, x: 1, y: 2 },
  { value: 1, x: 2, y: 2 },
  { value: 5, x: 3, y: 3 },
  { value: 4, x: 4, y: 2 },

  { value: 0, x: 1, y: 1 },
  { value: 3, x: 2, y: 1 },
  { value: 4, x: 3, y: 1 },
  { value: 2, x: 4, y: 1 },
];

Promise.resolve(consoleWriteArray(arr)).then(console.log);
