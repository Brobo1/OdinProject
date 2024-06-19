const palindromes = function (str) {
  str = str.replace(/[^A-Za-z\d]/g, "").toLowerCase();
  let rev = str.split("").reverse().join("");
  console.log(str, rev);
  return str === rev;
};

palindromes("racecar!");
// Do not edit below this line
module.exports = palindromes;
