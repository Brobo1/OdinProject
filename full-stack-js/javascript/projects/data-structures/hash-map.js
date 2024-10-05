function HashMap() {
  this.size = 50;
  this.buckets = new Array(this.size).fill(null);

  this.set = (key, value) => {
    let index = hash(key);
    this.buckets[index] = value;
  };

  this.get = (key) => {
    return this.buckets[hash(key)];
  };

  this.has = () => {};

  this.toString = () => {
    return this.buckets;
  };
}

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode % list.size;
}

const list = new HashMap();

list.set("apple", "red");
list.set("banana", "yellow");
list.set("carrot", "orange");
list.set("dog", "brown");
list.set("elephant", "gray");
// list.set("frog", "green");
// list.set("grape", "purple");
// list.set("hat", "black");
// list.set("ice cream", "white");
// list.set("jacket", "blue");
// list.set("kite", "pink");
// list.set("lion", "golden");
console.log(list.get("applwde"));
console.log(list.toString());
