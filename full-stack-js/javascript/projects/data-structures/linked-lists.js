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

  this.toString = () => {
    console.log(this.head);
  };
}

function Node(value = null, nextNode = null) {
  this.value = value;
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();
