export default length => {
  let arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = i;
  }
  return arr;
};
