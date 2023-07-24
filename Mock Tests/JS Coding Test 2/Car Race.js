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

// Create your Super Class Race and Sub Class Car here

// Superclass------------------------------------------------------------------------
class Race {
    constructor(playerName) {
        this.playerName = playerName;
    }
    startRace() {
        return `Race has started`;
    }
    endRace() {
        return `${this.playerName} is the winner`;
    }
}

// Subclass------------------------------------------------------------------------
class Car extends Race {
    constructor(playerName, nitro, speed) {
        super(playerName);
        this.nitro = nitro;
        this.speed = speed;
    }
    applyBreak() {
        this.speed = 0;
    }
    nitroBoost() {
        if (this.nitro > 0) {
            this.nitro -= 50;
            this.speed += 50;
        }
    }
    accelerate() {
        this.nitro += 10;
        this.speed += 20;
    }
}

/* Please do not modify anything below this line */

function main() {
    const playerName = readLine();
    const nitro = JSON.parse(readLine());
    const speed = JSON.parse(readLine());

    const car1 = new Car(playerName, nitro, speed);

    console.log(car1.startRace());
    car1.nitroBoost();
    console.log(`Speed ${car1.speed}; Nitro ${car1.nitro}`);
    car1.accelerate();
    console.log(`Speed ${car1.speed}; Nitro ${car1.nitro}`);
    console.log(car1.endRace());
    car1.applyBreak();
    console.log(`Speed ${car1.speed}; Nitro ${car1.nitro}`);
}
