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
    const nestedArray = JSON.parse(readLine());

    /* Write your code here */
    function findEven(eachSubArray) {
        return eachSubArray.some((each) => each % 2 === 0);
    }

    const result = nestedArray.map((eachSubArray) => {
        return findEven(eachSubArray)
            ? eachSubArray.reduce((acc, num) => acc * num)
            : 0;
    });
    console.log(result);
}
