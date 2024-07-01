function camelize(str) {
  return str.split("-").reduce((acc, cur) => {
    acc += cur[0].toUpperCase() + cur.substring(1);
    return acc;
  });
}

console.log(
  camelize("background-color") === "backgroundColor",
  camelize("list-style-image") === "listStyleImage",
  camelize("-webkit-transition") === "WebkitTransition",
);
