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
    const isResourceAvailable = JSON.parse(readLine());

    /* Write your code here */
    const plantTree = () => {
        return new Promise((resolve, reject) => {
            isResourceAvailable
                ? resolve("Tree Planted")
                : reject("Resource not available");
        });
    };
    //---------------
    const myPromise = async () => {
        try {
            const plantingStatus = await plantTree();
            console.log(plantingStatus);
        } catch (error) {
            console.log(error);
        }
    };

    // ----- another way


    // const treeStatus = async () => {
    //     try {
    //         const result = await new Promise((resolve, reject) => {
    //             isResourceAvailable
    //                 ? resolve("Tree Planted")
    //                 : reject("Resource not available");
    //         });
    //         console.log(result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // treeStatus();
    
}
