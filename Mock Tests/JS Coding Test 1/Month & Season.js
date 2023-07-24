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
    const month = readLine();

    /* Please do not modify anything above this line */

    // Write your code here
    switch (month) {
        case "December":
            console.log("Winter");
            break;
        case "January":
            console.log("Winter");
            break;
        case "February":
            console.log("Spring");
            break;
        case "March":
            console.log("Spring");
            break;
        case "April":
            console.log("Summer");
            break;
        case "May":
            console.log("Summer");
            break;
        case "June":
            console.log("Summer");
            break;
        case "July":
            console.log("Monsoon");
            break;
        case "August":
            console.log("Monsoon");
            break;
        case "September":
            console.log("Monsoon");
            break;
        case "October":
            console.log("Autumn");
            break;
        case "November":
            console.log("Autumn");
            break;
        default:
            console.log("Invalid Month");
    }
}
