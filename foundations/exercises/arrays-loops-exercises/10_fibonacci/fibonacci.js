const fibonacci = function (num) {
  let fib = [0, 1];
  for (let i = 1; i <= num; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return num < 0 ? "OOPS" : fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
