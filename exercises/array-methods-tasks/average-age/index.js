let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur.age, 0);
  return sum / arr.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
