import { HashMap } from "./hash-map.mjs";

const list = new HashMap();
list.set("apple", "red");
list.set("banana", "yellow");
list.set("carrot", "orange");
list.set("dog", "brown");
list.set("elephant", "gray");
list.set("frog", "green");
list.set("grape", "purple");
list.set("hat", "black");
list.set("ice cream", "white");
list.set("jacket", "blue");
list.set("kite", "pink");
console.log(list.toString());
list.set("lion", "golden");
list.set("moon", "silver");
console.log(list.toString());
console.log(list.hash("apple"));