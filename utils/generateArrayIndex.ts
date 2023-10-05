export default (dozen: number) => {
  return ~~(Math.random() * 3289) * ~~(Math.random() * 289) + dozen;
};
