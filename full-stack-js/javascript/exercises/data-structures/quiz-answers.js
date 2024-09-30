//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

//region q1
function sumRange(num) {
  if (!num) {
    return 0;
  }
  return num + sumRange(num - 1);
}
// console.log(sumRange(3));
//endregion

//region q2
function powerOf(x, y) {
  if (y === 0) {
    return 1;
  }
  return x * powerOf(x, y - 1);
}
// console.log(powerOf(2, 4));
//endregion

//region q3
function findFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * findFactorial(num - 1);
}
// console.log(findFactorial(5));
//endregion

//region q4
function arrAll(arr, cb) {
  if (arr.length === 0) {
    return true;
  }
  return cb(arr.pop()) ? arrAll(arr, cb) : false;
}

let allLessThanSeven = arrAll([1, 3, 3, 4, 5], function (num) {
  return num < 7;
});

// console.log(allLessThanSeven);
//endregion

//region q5
function sumArr(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr.shift() * sumArr(arr);
}
// console.log(sumArr([1, 2, 3, 10]));
//endregion

//region q6
function findObj(item, find) {
  for (let key in item) {
    if (typeof item[key] === "object") {
      return findObj(item[key], find);
    }
    if (item[key] === find) {
      return true;
    }
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// let hasIt = findObj(nestedObject, 44); // true
let doesntHaveIt = findObj(nestedObject, "foo"); // false

// console.log(doesntHaveIt);

//endregion

//region q7

function totalIntegers(arr) {
  if (arr.length === 0) return 0;

  let count = 0;
  let pop = arr.pop();

  if (typeof pop === "number") count++;
  else if (typeof pop === "object") count += totalIntegers(pop);
  return count + totalIntegers(arr);
}

const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
// console.log(seven);
//endregion

//region q8
function SumSquares(arr) {
  if (arr.length === 0) return 0;
  let total = 0;

  for (const arrKey of arr) {
    if (typeof arrKey === "object") {
      total += SumSquares(arrKey);
    } else if (typeof arrKey === "number") {
      total += arrKey * arrKey;
    }
  }
  return total;
}

// let l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
//
// l = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(l)); // 1 = 1
//
// l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
//endregion

//region q9
function replicate(times, number) {
  if (times <= 0) return [];
  return [number].concat(replicate(times - 1, number));
}

console.log(replicate(3, 5)); // [5, 5, 5]
//endregion
