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
    let side = JSON.parse(readLine());

    /* Please do not modify anything above this line */

    /*
     * Write the arrow function here and log the output.
     */
    let val = (side) => side * side;
    console.log(val(side));
}
