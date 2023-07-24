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

/* Please do not modify anything above this line */

function main() {
    const myArray = JSON.parse(readLine().replace(/'/g, '"'));

    /* Write your code here */
    
    // const flattening = myArray.flat();
    // console.log(...flattening);

    const flattenedArray = myArray.reduce((accumulator, currentValue) => {
        return [...accumulator, ...currentValue];
    });
    console.log(...flattenedArray);
}
