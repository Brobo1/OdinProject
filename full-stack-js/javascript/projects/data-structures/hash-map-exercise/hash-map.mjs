export function HashMap() {
  this.size = 16;
  this.buckets = new Array(this.size).fill(null);
  this.load = 0.75
  
  
  this.hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }
    return hashCode;
  }
  
  this.set = (key, value) => {
    let index = this.hash(key);
    this.buckets[index] = value;
  };

  this.get = (key) => {
    return this.buckets[this.hash(key)];
  };

  this.has = (key) => {
    return !!this.buckets[this.hash(key)];
  };

  this.remove = (key) => {
    this.buckets[this.hash(key)] = null;
  };

  this.length = () => {
    let counter = 1;
    for (const bucketsKey of this.buckets) {
      if (bucketsKey) {
        counter++;
      }
    }
    return counter;
  };

  this.clear = () => {
    this.buckets.fill(null);
  };

  this.keys = () => {
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        arr.push(i);
      }
    }
    return arr;
  };

  this.values = () => {
    let arr = [];
    for (const item of this.buckets) {
      if (item) arr.push(item);
    }
    return arr;
  };

  this.entries = () => {
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        arr.push([i, this.buckets[i]]);
      }
    }
    return arr;
  };

  this.toString = () => {
    return this.buckets;
  };

}

