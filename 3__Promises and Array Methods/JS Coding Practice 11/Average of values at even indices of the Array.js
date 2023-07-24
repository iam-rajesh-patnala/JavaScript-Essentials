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
    const integers = JSON.parse(readLine());

    /* Write your code here */
    // let total = 0;
    // function sumNum(num) {
    //     total += num;
    // }
    // const noOfEvenIndices = Math.ceil(integers.length / 2);
    // const result = integers.forEach((value, index) =>
    //     index % 2 === 0 ? sumNum(value) : false
    // );
    // console.log(total / noOfEvenIndices);

    // Another way
    let sumOfValues = 0;
    integers.forEach((value, index) => {
        if (index % 2 === 0) {
            sumOfValues += value;
        }
    });

    const lengthOfArray = integers.length;
    const noOfEvenIndex = Math.ceil(lengthOfArray / 2);
    const average = sumOfValues / noOfEvenIndex;
    console.log(average);
}
