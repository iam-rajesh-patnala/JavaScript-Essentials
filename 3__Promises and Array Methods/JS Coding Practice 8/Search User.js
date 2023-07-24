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
    const userName = readLine();
    const users = ["Abhiram", "Gabrill", "Mosh", "Alia", "Rehman", "Manoj"];

    /* Write your code here */
    users.includes(userName)
        ? console.log("User Found")
        : console.log("User Not Found");
}
