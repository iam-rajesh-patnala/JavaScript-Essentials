"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((str) => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nestedArray = JSON.parse(readLine().replace(/'/g, '"'));
    const depth = JSON.parse(readLine());

    /* Please do not modify anything above this line */

    // Write your code here
    const flattenArray = nestedArray.flat(depth);
    const result = flattenArray.map((eachWord) =>
        eachWord.length % 2 === 0
            ? eachWord.toLowerCase()
            : eachWord.toUpperCase()
    );
    console.log(result);
}
