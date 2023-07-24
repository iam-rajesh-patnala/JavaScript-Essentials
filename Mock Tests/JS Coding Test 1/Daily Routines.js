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
    const isHotWaterReady = JSON.parse(readLine());
    const isBreakfastReady = JSON.parse(readLine());

    /* Please do not modify anything above this line */

    // Write your code here
    const checkStatusHotWater = () => {
        return new Promise((resolve, reject) => {
            isHotWaterReady
                ? resolve("Taken Shower")
                : reject("Hot Water Not Ready");
        });
    };
    const checkStatusBreakfast = () => {
        return new Promise((resolve, reject) => {
            isBreakfastReady
                ? resolve("Had Breakfast")
                : reject("Breakfast Not Ready");
        });
    };
    const checkStatusWork = () => {
        return new Promise((resolve, reject) => {
            resolve("Got to Work");
        });
    };

    const result = async () => {
        try {
            const getStatusHotWater = await checkStatusHotWater();
            console.log(getStatusHotWater);
            const getStatusBreakfast = await checkStatusBreakfast();
            console.log(getStatusBreakfast);
            const getStatusWork = await checkStatusWork();
            console.log(getStatusWork);
        } catch (error) {
            console.log(error);
        }
    };
    result();
}
