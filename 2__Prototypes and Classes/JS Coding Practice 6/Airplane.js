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

function Airplane(name, inAir) {
    this.name = name;
    this.isFlying = inAir;
}

function main() {
    const airplaneName = readLine();
    const inAir = JSON.parse(readLine());

    const airplane = new Airplane(airplaneName, inAir);

    /* Write your code here */
    Airplane.prototype.takeOff = function () {
        console.log(`${this.name} is taking off`);
        this.isFlying = true;
    };
    Airplane.prototype.land = function () {
        console.log(`${this.name} is landing`);
        this.isFlying = false;
    };

    let result = inAir ? airplane.land() : airplane.takeOff();

    console.log(`Is Airplane flying? ${airplane.isFlying}`);
}
