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
    function sumOfValue(subArray) {
        let sum = subArray.reduce((acc, val) => acc + val);
        return sum;
    }

    function checkAtLeastOneValue(subArray) {
        return subArray.some((each) => each % 2 === 0);
    }

    const eachArray = nestedArray.map((eachSubArray) =>
        checkAtLeastOneValue(eachSubArray) ? sumOfValue(eachSubArray) : 0
    );

    console.log(eachArray);
}
