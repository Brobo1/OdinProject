const findTheOldest = function (arr) {
  let age = [
    ...arr.map((peeps) => {
      return Math.abs(
        (peeps.yearOfDeath ?? new Date().getFullYear()) - peeps.yearOfBirth,
      );
    }),
  ];
  let maxAge = Math.max(...age);
  return arr[age.indexOf(maxAge)];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// findTheOldest(people);
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
