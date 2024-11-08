const palindromes = function (str) {
  str = str.toLowerCase().replace(/\W/g, "");
  let rev = str.split("").reverse().join("");
  console.log(str, rev);
  return str === rev;
};

palindromes("rac3e3car");
// Do not edit below this line
module.exports = palindromes;
