function LinkedList() {
  this.head = null;

  this.append = function (value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  };

  this.prepend = (value) => {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  };

  this.size = () => {
    const countNodes = (node) => {
      if (node === null) {
        return 0;
      }
      return 1 + countNodes(node.next);
    };
    return countNodes(this.head);
  };

  this.first = () => {
    return this.head;
  };

  this.last = () => {
    return this.tail;
  };

  this.at = (index) => {
    let count = 0;
    if (index > this.size() - 1) {
      return "Index out of bounds";
    }
    const returnIndex = (node) => {
      if (index === count) {
        return node.value;
      }
      count++;
      return returnIndex(node.next);
    };
    return returnIndex(this.head);
  };

  this.pop = () => {
    if (this.head === null) return null;

    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }

    const removeLast = (node) => {
      if (node.next === this.tail) {
        const value = this.tail.value;
        node.next = null;
        this.tail = node;
        return value;
      }
      return removeLast(node.next);
    };
    return removeLast(this.head);
  };

  // this.contains = (value) => {
  //   const find = (node) => {
  //     if (node === null) {
  //       return false;
  //     }
  //     if (node.value === value) {
  //       return true;
  //     }
  //     return find(node.next);
  //   };
  //   return find(this.head);
  // };

  this.contains = (value) => {
    let temp = this.head;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.next;
    }
    return false;
  };

  this.find = (value) => {
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      if (temp.value === value) return count;
      count++;
      temp = temp.next;
    }
    return count;
  };

  this.toString = () => {
    let str = "";
    let temp = this.head;
    while (temp !== null) {
      str += `(${temp.value}) -> `;
      temp = temp.next;
    }
    return str + "null";
  };

  this.insertAt = (value, index) => {
    const node = new Node(value);
    let temp = this.head;
    let temp2 = this.head;
    let count = 0;
    while (count < index) {
      temp = temp.next;
      count++;
    }
    node.next = temp;
    this.head = temp2;
    this.head.next = temp;
  };
}

function Node(value = null, next = null) {
  this.value = value;
  this.next = next;
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
console.log(list.toString());
list.insertAt("donke", 2);
console.log(list.toString());
// list.append("snake");
// list.append("turtle");
