let testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function Tree(arr) {
  return buildTree(arr);
}

function buildTree(arr) {
  if (arr.length === 0) return null;

  let arrSorted = [...new Set(arr)].sort((a, b) => a - b); // Remove duplicates and sort
  let mid = Math.floor(arrSorted.length / 2);
  let node = new Node(arrSorted[mid]);

  node.left = buildTree(arrSorted.slice(0, mid));
  node.right = buildTree(arrSorted.slice(mid + 1));

  return node;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(Tree(testArr));
