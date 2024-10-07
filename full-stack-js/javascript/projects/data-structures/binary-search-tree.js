let testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function Tree(arr) {
  this.root = buildTree(arr);

  this.insertInto = (num, currNode = this.root) => {
    if (currNode === null) return Node(num);
    if (currNode.data === num) return;
    if (currNode.data < num) {
      currNode.right = this.insertInto(num, currNode.right);
    } else {
      currNode.left = this.insertInto(num, currNode.left);
    }
    return currNode;
  };

  this.delete = (nodes = this.root) => {
    console.log(nodes);
    if (nodes.right === null) {
      return null;
    }
    nodes = this.delete(nodes.right);
    return nodes;
  };

  this.getRoot = () => this.root;

  this.print = () => {
    return prettyPrint(this.root);
  };
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

const testTree = new Tree(testArr);
testTree.insertInto(56);
testTree.insertInto(35);
testTree.insertInto(13);
testTree.print();
