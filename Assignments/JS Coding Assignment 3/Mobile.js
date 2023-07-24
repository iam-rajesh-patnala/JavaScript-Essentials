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

class Mobile {
    /*
     * Write your code here
     */
    constructor(brand, ram, batteryStatus, song, isCallInProgress) {
        this.brand = brand;
        this.ram = ram;
        this.batteryStatus = batteryStatus;
        this.song = song;
        this.isCallInProgress = isCallInProgress;
    }
    // playMusic
    playMusic() {
        console.log(`Playing ${this.song} Song`);
    }

    //stopMusic
    stopMusic() {
        console.log(`Music Stopped`);
    }

    //fullCharge
    fullCharge() {
        if (this.batteryStatus < 100) {
            this.batteryStatus = 100;
            console.log(`Mobile Fully Charged`);
        } else if (this.batteryStatus === 100) {
            console.log("Mobile Already Fully Charged");
        }
    }

    //makeCall
    makeCall() {
        this.isCallInProgress = true;
        console.log(`Calling...`);
    }

    //endCall
    endCall() {
        if (this.isCallInProgress) {
            console.log(`Call Ended`);
            this.isCallInProgress = false;
        } else {
            console.log(`No Ongoing Call to End`);
        }
    }
}

/* Please do not modify anything below this line */

function main() {
    const brand = readLine();
    const ram = readLine();
    const batteryStatus = parseInt(readLine());
    const song = readLine();
    const isCallInProgress = JSON.parse(readLine());

    /* Please do not modify anything above this line */

    // Write your code here new
    const myMobile = new Mobile(
        brand,
        ram,
        batteryStatus,
        song,
        isCallInProgress
    );

    /* Please do not modify anything below this line */

    myMobile.fullCharge();

    myMobile.playMusic();
    myMobile.stopMusic();

    myMobile.endCall();
    myMobile.makeCall();
    myMobile.endCall();
}
