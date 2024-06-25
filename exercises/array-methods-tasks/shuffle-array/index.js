/* My solution
function shuffle(arr) {
  let keeper = [...arr];
  arr = [];
  while (keeper.length > 0) {
    let rand = Math.floor(Math.random() * keeper.length);
    arr = [...arr, keeper.splice(rand, 1)[0]];
  }
  return arr;
}
*/

/* Course solution
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
*/

/* Fisher-Yates shuffle */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let data = [];

for (let i = 0; i < 10000; i++) {
  let arr = [1, 2, 3, 4];
  data.push(shuffle(arr));
}

let dataCounted = data.sort().reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 0;
  }
  acc[cur]++;
  return acc;
}, {});

console.log(dataCounted);

/*

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]
*/
