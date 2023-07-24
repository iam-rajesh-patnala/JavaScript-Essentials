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
    const candidatesList = JSON.parse(readLine().replace(/'/g, '"'));

    /* Please do not modify anything above this line */

    // Write your code here
    const finalResult = [];
    function isSelected(candidate) {
        finalResult.push(candidate);
    }

    const eachPerson = candidatesList.map((eachCandidate) => {
        eachCandidate.points.every((eachScore) => eachScore > 75)
            ? isSelected(eachCandidate.name)
            : false;
    });

    console.log(finalResult);
}
