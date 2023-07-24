// Resolve the Promise

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 2000);
    });
};

console.log(myPromise());
myPromise().then((fromResolve) => {
    console.log(fromResolve);
});

// Reject the Promise
const myPromise2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Rejected");
        }, 1000);
    });
};

console.log(myPromise2());
myPromise2().catch(function (fromReject) {
    console.log(fromReject);
});

// ----------------------------------------------

// async // await

const url = "https://apis.cdcbp.in/jokes/random";
const asyncPromise = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};
console.log(asyncPromise());


