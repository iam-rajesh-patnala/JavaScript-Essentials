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
    const birthdaysList = JSON.parse(readLine().replace(/'/g, '"'));
    const buntyBirthday = new Date("2000-06-13");

    /* Please do not modify anything above this line */

    // Write your code here
    let day = 0;
    let month = 0;
    let year = 0;

    function getResult(eachDate) {
        let currentDate = new Date(eachDate);
        //   console.log(currentDate);
        if (currentDate.getMonth() + 1 === buntyBirthday.getMonth() + 1) {
            month += 1;
        } else if (currentDate.getFullYear() === buntyBirthday.getFullYear()) {
            year += 1;
        } else if (currentDate.getDate() === buntyBirthday.getDate()) {
            day += 1;
        }
        // console.log(currentDate.getDate());
        // console.log(currentDate.getMonth() + 1);
        // console.log(currentDate.getFullYear());
    }

    const findDates = birthdaysList.filter((eachDate) => {
        getResult(eachDate);
    });

    console.log(day);
    console.log(month);
    console.log(year);
}


// -------------------- not fulfilled --------------------------