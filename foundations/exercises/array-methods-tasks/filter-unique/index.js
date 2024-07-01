let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
function unique(arr) {
  let arr2 = [];
  for (const thing of arr) {
    if (!arr2.includes(thing)) {
      arr2.push(thing);
    }
  }
  return arr2;
}

console.log(unique(strings)); // Hare, Krishna, :-O
