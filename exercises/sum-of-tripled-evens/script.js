let arr = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

let arr2 = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((acc, cur) => acc + cur, 0);

console.log(arr2);
