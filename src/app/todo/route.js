import { writeFile, readFile } from "fs/promises";
await writeFile("hello.txt", "Hi, i am bansi");

const file = await readFile("hello.txt", "utf-8");
console.log(file);

console.log("Written");
