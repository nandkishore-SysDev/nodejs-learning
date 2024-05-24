const console = require("console");

function greet(name, myFunction) {
    console.log("Hello World");
    myFunction(name)
}

function sayName(name) {
    console.log('Hello' + '' + name);
}


setTimeout(greet, 2000, 'Radha', sayName)

// sayName('Radha')

function devide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

function add(x, y) {
    return x + y;
}


function compute(callBack, x, y) {
    return callBack(x, y)
}

console.log(compute(devide, 10, 5));
console.log(compute(multiply, 10, 5));
console.log(compute(add, 10, 5));


function display(){
    console.log("Timer displayed after 1 second")
}

setTimeout(display, 1000)
console.log("One")
console.log("Two")