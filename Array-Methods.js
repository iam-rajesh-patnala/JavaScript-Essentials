// -----------------------------------------------  Array Methods

// -- find()
const ages = [3, 10, 18, 20];

const value = ages.find(function (age) {
    return age > 18;
});
console.log(value);

// -- map()

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((number) => number * number);
console.log(result);

// -- filter()
const numbersArray = [1, -2, -3, 4, -5];
const positiveNumbers = numbersArray.filter((number) => number > 0);
console.log(positiveNumbers);

// -- reduce()
const numbersArray2 = [1, 2, 3, 4, 5];
const sum = numbersArray2.reduce((total, number) => total + number);
console.log(sum);

// -- forEach()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach((fruit) => console.log(fruit));

// -- every()
const numbersArray3 = [23, 56, 2, 33, 90, 10];
const result1 = numbersArray3.every((number) => number < 100);
console.log(result1);

// -- some()
const names = ["Preethi", "Rajesh", "Bhargav", "Kiran", "John", "Wick"];
const result2 = names.some((name) => name === "Kiran");
console.log(result2);

// -- reverse()
const wordsArray = ["Tin", "Pin", "Win", "Sin", "Bin"];
const reverse = wordsArray.reverse();
console.log(reverse);

// -- flat()
const numbersArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const numbersArray5 = [[1, 2, 3], [[[4, 5, 6]]], [7, 8, 9]];

console.log(numbersArray4.flat());
console.log(numbersArray5.flat(2));

////////////////////////////////////////////////
//finding Unique values in the array

//using Set
let myArray = ["3", "2", "3", "3", "4", "2", "5", "4", "3", "5", "10"];
let unqElements = [...new Set(myArray)];
console.log(unqElements);

//using filter method
let myArray2 = ["3", "2", "3", "3", "4", "2", "5", "4", "3", "5", "10"];
let unqElements2 = [];

unqElements2 = myArray2.filter(
    (value, index, arr) => arr.indexOf(value) === index
);

console.log(unqElements2);
