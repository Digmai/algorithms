export const sortingCheck = (arr: number[]) => {
  let boole;
  let temp = arr[0];

  arr.forEach((velue) => {
    boole = temp <= velue;
    if (!boole)
      throw new Error(
        "Error^: масив неверно отсортирован!!!" +
          "| " +
          temp +
          " - " +
          velue +
          " | " +
          arr
      );
    temp = velue;
  });

  return true;
};
