const removeFromArray = function (arr, ...rem) {
  for (const remElement of rem) {
    arr = arr.filter((num) => num !== remElement);
  }

  // rem.map((num) => {
  //   arr = arr.filter((filt) => filt !== num);
  // });
  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
