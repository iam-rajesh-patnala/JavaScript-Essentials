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
    const isSticksFound = JSON.parse(readLine());
    const isLighterFound = JSON.parse(readLine());

    /* Write your code here */
    const gatheringSticks = () => {
        return new Promise((Found, Notfound) => {
            isSticksFound
                ? Found("Sticks Gathered")
                : Notfound("Sticks Not Found");
        });
    };

    const lightingTheCampfire = () => {
        return new Promise((Found, Notfound) => {
            isLighterFound
                ? Found("Campfire Lighted")
                : Notfound("Lighter Not Found");
        });
    };

    const getTheStatus = async () => {
        try {
            const sticksStaus = await gatheringSticks();
            console.log(sticksStaus);
            console.log("Sticks Arranged");
            const lighterStatus = await lightingTheCampfire();
            console.log(lighterStatus);
        } catch (error) {
            console.log(error);
        }
    };
    getTheStatus();
}
