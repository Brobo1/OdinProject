function fibs(num) {
  let arr = [0, 1];
  while (num > 2) {
    num--;
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}
// console.log(fibs(8));

function fibsRec(num) {
  if (num < 2) return [0, 1];
  let arr = fibsRec(num - 1);
  console.log(arr);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibsRec(5));
