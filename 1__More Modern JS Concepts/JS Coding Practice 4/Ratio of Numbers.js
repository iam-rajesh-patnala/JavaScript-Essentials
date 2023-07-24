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

function NumberPair(firstNumber, secondNumber) {
    /* Write your code here. */
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.getRatio = function () {
        const ratio = this.firstNumber / this.secondNumber;
        return ratio;
    };
}

/* Please do not modify anything below this line */

function main() {
    const firstNumber = JSON.parse(readLine());
    const secondNumber = JSON.parse(readLine());

    const numberPair1 = new NumberPair(firstNumber, secondNumber);

    console.log(numberPair1.getRatio());
}
