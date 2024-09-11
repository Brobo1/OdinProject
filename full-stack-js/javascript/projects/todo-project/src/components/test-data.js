import * as objs from "./objects";

const date = new Date();

export const testTodo = objs.createTodo(
  "ayoo",
  "this is ayo...",
  "tomorrow",
  `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
  [objs.note("note1").str, objs.note("note2").str, objs.note("note3").str],
  [objs.checkItem("check1", false), objs.checkItem("check2", true)],
);
