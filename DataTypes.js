// JavaScript String

// string enclosed within single quotes
let fruit = 'apple';
console.log(fruit)

// string enclosed within double quotes
let country = "USA";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);

// JavaScript Number

// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);

// JavaScript BigInt

// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740999n"

let value2 = 900719925124740998n;


// JavaScript Boolean

let dataChecked = true;
console.log(dataChecked);  // true

let valueCounted = false;
console.log(valueCounted);  // false

// JavaScript undefined
let name;
console.log(name);  // undefined

// JavaScript null

let number = null;
console.log(number);  // null

// JavaScript Symbol

// two symbols with the same description
let value3 = Symbol("programiz");
let value4 = Symbol("programiz");

console.log(value1 === value2);  // false

// JavaScript Object

let student = {
    firstName: "John",
    lastName: null,
    class: 10
};