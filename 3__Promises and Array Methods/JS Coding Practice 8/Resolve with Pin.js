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
    const pin = parseInt(readLine());

    /* Write your code here */
    const userPin = new Promise((resolve, reject) => {
        resolve(console.log(pin));
    });

    userPin.then();

    // Another type
    const pinuser = () => {
        return new Promise((resolve, reject) => {
            resolve(pin);
        });
    };
    pinuser().then((response) => {
        console.log(response);
    });
}
