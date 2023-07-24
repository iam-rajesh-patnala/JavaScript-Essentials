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

function Rectangle(length, breadth) {
    /* Write your code here */
    this.length = length;
    this.breadth = breadth;
    this.getArea = function () {
        return this.length * this.breadth;
    };
    this.getPerimeter = function () {
        return 2 * (this.length + this.breadth);
    };
}

/* Please do not modify anything below this line */

function main() {
    const l = JSON.parse(readLine());
    const b = JSON.parse(readLine());

    const rectangle = new Rectangle(l, b);

    console.log(rectangle.getArea());
    console.log(rectangle.getPerimeter());
}
