// -----------------------------------------------  String Methods

// -- find()
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);

// -- trim()
const message = "    Good Morning!    ";
console.log(message);
console.log(message.trim());

// -- slice()
const sentence = "The Roses are Red, the Lilies are White";
console.log(sentence.slice(0, 7));
console.log(sentence.slice(-5));

// -- toUpperCase()
const sentence2 = "The Roses are Red, the Lilies are White";
console.log(sentence2.toUpperCase());

// -- toLowerCase()
const sentence3 = "The Roses are Red, the Lilies are White";
console.log(sentence3.toLowerCase());

// -- split()
const sentence4 = "The-key-is-blue";
const words = sentence4.split("-");
console.log(words);

// -- replace()
const sentence5 = "Sunday is my favorite day";
const newSentence = sentence5.replace("Sunday", "Monday");
console.log(newSentence);

// -- includes()
const sentence6 = "The Roses are Red, the Lilies are White";
const word = sentence6.includes("White");
console.log(word);

// -- concat()
const firstName = "Preethi";
const LastName = "Neela";

const FullName = firstName.concat(" ", LastName);
console.log(FullName);

// -- indexOf()
const sentence7 = "Preethi is a good Girl";
const index = sentence7.indexOf("i");
console.log(index);

// -- startWith()
const name = "Bhargav is a good Boy";
const start = name.startsWith("B");
console.log(start);

// -- endsWith()
const name2 = "Bhargav is a good Boy";
const end = name2.endsWith("Boy");
console.log(end);

// -- tostring()
const number = 101;
const string = number.toString();
console.log(string);
console.log(typeof string);

// -- substring()
const name3 = "Thor son of odin";
const substring = name3.substring(0, 5);
console.log(substring);

// -- length()
const name4 = "Rajesh Patnala";
const length = name4.length;
console.log(length);
