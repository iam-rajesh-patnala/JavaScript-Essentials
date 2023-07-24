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
    const wordsList = JSON.parse(readLine().replace(/'/g, '"'));
    const vowelsList = ["a", "e", "i", "o", "u"];

    /* Please do not modify anything above this line */

    // Write your code here
    //   const stringToLower = wordsList.map((each) => each.toLowerCase());

    let res = [];
    const getResults = wordsList.map((eachString) => {
        let val = vowelsList.filter((eachVowel) =>
            eachString.toLowerCase().includes(eachVowel)
        );
        //   console.log(val);
        if (val.length > 0) {
            res.push(eachString);
        }
    });

    //   const result = getResults.map((eachList))

    console.log(res);
}
