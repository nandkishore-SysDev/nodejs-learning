function greet() {
    console.log("Hello World");
}

let displayPI = function () {
    console.log("PI = 3.14");
}

greet();

displayPI();

function greet1() {
    console.log("Hello World");
}
greet1();

console.log("outside function");

function greetWithArg(name) {
    console.log('Hello, ${name}');
}

greetWithArg("John");

function greet2(name) {
    console.log('Hello: ${name}');
}

greet2("John");
greet2("David");


function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log('Sum: ${sum}');
}

addNumbers(10, 20);

function findSquare(num) {
    return num * num;
}

let square = findSquare(10);


function display() {
    console.log("This will be executed");

    return "return from function";

    console.log("This will not be executed");
}

let message = display();
console.log(message);


let squareRoot = Math.sqrt(4);

console.log(squareRoot);

let power = Math.pow(10, 11);

console.log(power);

let band = "Iron Maiden";

let bandUpper = band.toUpperCase();
console.log(bandUpper);


let square1 = function(num) {
    return num * num;
}

console.log(square1(5))