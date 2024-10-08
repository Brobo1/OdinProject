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

  this.delete = (num, nodes = this.root) => {
    if (nodes === null) return null;

    if (nodes.data === num) {
      if (nodes.left === null) {
        return nodes.right;
      }
      if (nodes.right === null) {
        return nodes.left;
      }

      let temp = nodes.right;
      while (temp.left !== null) {
        temp = temp.left;
      }
      nodes.data = temp.data;
      nodes.right = this.delete(temp.data, nodes.right);
    } else if (nodes.data < num) {
      nodes.right = this.delete(num, nodes.right);
    } else {
      nodes.left = this.delete(num, nodes.left);
    }

    return nodes;
  };

  this.find = (num, nodes = this.root) => {
    if (nodes === null) return null;
    if (nodes.data === num) {
      console.log(`Found ${num}`);
      return nodes;
    }

    if (nodes.data < num) {
      return this.find(num, nodes.right);
    } else {
      return this.find(num, nodes.left);
    }
  };

  this.levelOrder = (cb) => {
    if (typeof cb !== "function") {
      throw new Error("A callback function is required");
    }

    const traverse = (nodes) => {
      if (nodes.length === 0) return;

      let nextLevel = [];
      if (nodes[0].left !== null) {
        nextLevel.push(nodes[0].left);
      }
      if (nodes[0].right !== null) {
        nextLevel.push(nodes[0].right);
      }
      cb(nodes[0]);
      traverse(nodes.slice(1).concat(nextLevel));
    };

    traverse([this.root]);
  };

  this.preOrder = (cb) => {
    if (typeof cb !== "function") {
      throw new Error("A callback function is required");
    }

    const traverse = (node) => {
      if (node === null) return;
      cb(node);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
  };

  this.postOrder = (cb) => {
    if (typeof cb !== "function") {
      throw new Error("A callback function is required");
    }

    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      cb(node);
    };
    traverse(this.root);
  };

  this.inOrder = (cb) => {
    if (typeof cb !== "function") {
      throw new Error("A callback function is required");
    }

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);
      cb(node);
      traverse(node.right);
    };

    traverse(this.root);
  };

  this.depth = (num, level = 0, nodes = this.root) => {
    if (nodes === null) return -1;
    if (nodes.data === num) {
      return level;
    }

    if (nodes.data < num) {
      return this.depth(num, level + 1, nodes.right);
    } else {
      return this.depth(num, level + 1, nodes.left);
    }
  };

  this.height = (num) => {
    const node = this.find(num);
    if (node === null) return -1;

    const findHeight = (nodes) => {
      if (nodes === null) return -1;
      const leftHeight = findHeight(nodes.left);
      const rightHeight = findHeight(nodes.right);
      return Math.max(leftHeight, rightHeight) + 1;
    };
    return findHeight(node);
  };

  this.isBalanced = (node = this.root) => {
    const height = (node) => {
      if (node === null) return 0;
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      if (
        leftHeight === -1 ||
        rightHeight === -1 ||
        Math.abs(leftHeight - rightHeight) > 1
      ) {
        return -1; // Not balanced
      }
      return Math.max(leftHeight, rightHeight) + 1;
    };

    return height(node) !== -1;
  };

  this.rebalance = () => {
    let arr = [];
    this.levelOrder((node) => arr.push(node.data));
    arr.sort();
    this.root = buildTree(arr);
  };

  this.print = () => {
    console.log("--------------");
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

function treeDriver() {
  let testArr = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 300 + 100),
  );

  const printEles = () => {
    let levelArr = [];
    tree.levelOrder((node) => levelArr.push(node.data));
    console.log(`Level-order: ${levelArr}`);

    let preArr = [];
    tree.preOrder((node) => preArr.push(node.data));
    console.log(`Pre-order: ${preArr}`);

    let postArr = [];
    tree.postOrder((node) => postArr.push(node.data));
    console.log(`Pre-order: ${postArr}`);

    let inArr = [];
    tree.inOrder((node) => inArr.push(node.data));
    console.log(`Pre-order: ${inArr}`);
  };

  const tree = new Tree(testArr);

  tree.print();
  console.log(tree.isBalanced());
  printEles();
  tree.insertInto(54);
  tree.insertInto(13);
  tree.insertInto(16);
  tree.insertInto(23);
  tree.insertInto(65);
  tree.print();
  console.log(tree.isBalanced());
  if (!tree.isBalanced()) tree.rebalance();
  tree.print();
  printEles();
}

treeDriver();
