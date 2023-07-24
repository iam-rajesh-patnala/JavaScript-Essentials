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
    const companyId = readLine();
    const employeeId = parseInt(readLine());

    const companies = [
        {
            companyCode: "PY234",
            employees: [293, 730, 637],
        },
        {
            companyCode: "GR023",
            employees: [823, 563],
        },
        {
            companyCode: "HC754",
            employees: [511, 529, 943],
        },
        {
            companyCode: "PA439",
            employees: [276, 188, 333],
        },
        {
            companyCode: "CX536",
            employees: [431, 923],
        },
        {
            companyCode: "RD310",
            employees: [356, 901],
        },
    ];

    /* Write your code here */

    const findEmployee = () => {
        return new Promise((resolve, reject) => {
            const companyObj = companies.find(
                (eachCompany) => eachCompany.companyCode === companyId
            );
            if (companyObj !== undefined) {
                const employeeFound = companyObj.employees.includes(employeeId);
                if (employeeFound) {
                    resolve("Employee Found");
                } else {
                    reject("Employee Not Found");
                }
            } else {
                reject("Company Not Found");
            }
        });
    };

    //------------------------------------------------------------

    const result = async () => {
        try {
            const response = await findEmployee();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    result();
}
