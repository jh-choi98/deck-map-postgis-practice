import { loadable } from "jotai/utils";
import { atom } from "jotai";

const myAsyncAtom = atom(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return await res.json();
});

export const loadableAtom = loadable(myAsyncAtom);
