const arr = [3, 2, 1, 13, 8, 5, 0, 1];

function mrgSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const lArr = mrgSort(arr.slice(0, mid));
  const rArr = mrgSort(arr.slice(mid));
  return Array.from({ length: lArr.length + rArr.length }, () => {
    if (!lArr.length) return rArr.shift();
    else if (!rArr.length) return lArr.shift();
    else return lArr[0] > rArr[0] ? rArr.shift() : lArr.shift();
  });
}

console.log(mrgSort(arr));
// mrgSort(arr);

// function mrgSort(arr) {
// 	if (arr.length <= 1) return arr;
// 	const mid = Math.floor(arr.length / 2);
// 	const lArr = arr.slice(0, mid);
// 	const rArr = arr.slice(mid);
// 	return mrg(mrgSort(lArr), mrgSort(rArr));
// }
//
// function mrg(l, r) {
// 	const result = [];
// 	while (l.length && r.length) {
// 		if (l[0] < r[0]) {
// 			result.push(l.shift());
// 		} else result.push(r.shift());
// 	}
// 	return [...result, ...l, ...r];
// }
