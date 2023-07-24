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

function Circle(radius) {
    /* Write your code here */
    this.radius = radius;
    this.getArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    this.getCircumference = function () {
        return 2 * 3.14 * this.radius;
    };
}

/* Please do not modify anything below this line */

function main() {
    const radius = JSON.parse(readLine());

    const circle1 = new Circle(radius);

    console.log(circle1.getArea());
    console.log(circle1.getCircumference());
}
