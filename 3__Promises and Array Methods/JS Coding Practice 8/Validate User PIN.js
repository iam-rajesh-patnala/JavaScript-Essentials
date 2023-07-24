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
    const userInput = parseInt(readLine());
    const correctPin = 9372;

    /* Write your code here */
    const validateUserPin = () => {
        return new Promise((valid, invalid) => {
            userInput === correctPin ? valid() : invalid();
        });
    };
    validateUserPin()
        .then(() => {
            console.log("Success");
        })
        .catch(() => {
            console.log("Please enter valid pin");
        });
}
