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
    const name = readLine();
    const role = readLine();
    const salary = JSON.parse(readLine());

    function Employee(name, role, salary) {
        /* Please do not modify anything above this line */

        // Write your code here
        this.name = name;
        this.role = role;
        this.salary = salary;
        this.getTaxAmount = function () {
            let percentage = 0;
            if (this.salary >= 1000000) {
                percentage = 10;
            } else if (this.salary >= 500000) {
                percentage = 5;
            }
            const taxAmount = (this.salary * percentage) / 100;
            return taxAmount;
        };
    }

    // Write your code here
    const employee1 = new Employee(name, role, salary);

    /* Please do not modify anything below this line */

    console.log(employee1.getTaxAmount());
}
