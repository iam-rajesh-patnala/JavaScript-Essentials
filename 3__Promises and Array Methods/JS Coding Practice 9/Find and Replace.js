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
    const inputString = readLine();
    const searchString = readLine();
    const replaceString = readLine();

    /* Write your code here */
    const index = inputString.indexOf(searchString);
    if (index % 2 === 0) {
        const replacedString = inputString.replace(searchString, replaceString);
        console.log(replacedString);
    } else {
        console.log(inputString);
    }
}
