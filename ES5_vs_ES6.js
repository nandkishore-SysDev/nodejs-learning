// Reducing code with Arrow Function

const { rejects } = require("assert");
const { resolve } = require("path");

// Here is the ES5 version
function greetings(name) {
    return 'Hello' + name
}

// Here is the ES6 version
const greetings = (name) => {
    return `hello ${name}`;
}

// Have a look at another way we can define a function in ES6
const greetings = name => `hello ${name}`;

// Manipulating objects in ES6 vs ES5

var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, b: 3, c: 4 }
var obj3 = Object.assign(obj1, obj2)

// We have to merge the object using Object.assign() which takes both objects as input and outputs the merged object.
//  Let’s take a look how we can tackle this problem in ES6.

var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, b: 3, c: 4 }
var obj3 = { ...obj1, ...obj2 }

// Let’s take a look at object destructuring now.
//  If you have to extract multiple values from ES5 you have to write 3–4 lines of code like this:

var obj1 = { a: 1, b: 2, c: 3, d: 4 }
var a = obj1.a
var b = obj1.b
var c = obj1.c
var d = obj1.d

//  Time consuming 😕. Oh wait! we have ES6 here to rescue us.

const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const { a, b, c, d } = obj1

//  We define a object like this in ES5

var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a: a, b: b, c: c, d: d }

// In ES6 you will do something like this:

// Yeah, if the name of the key and the variable we are going to assign to that key are same you can use this shorthand.


var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a, b, c, d }

// Here is an example how we write an Async function in ES5

function isGreater(a, b, cb) {
    var greater = false
    if (a > b) {
        greater = true
    }
    cb(greater)
}

isGreater(1, 2, function (result) {
    if (result) {
        console.log('greater');
    } else {
        console.log('smaller')
    }
})


// ES6

const isGreater = (a,b) => {
    return new Promise ((resolve, reject) => {
        if(a > b) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isGreater(1,2) 
.then(result => {
    console.log('greater')
})
.catch(result => {
    console.log('smaller')
})

// Let’s take a look how we export a module in ES5

var myModule = {x: 1, y: function(){console.log('This is ES5')}}

module.export = myModule;

// Here is the ES6 implementation

const myModule = {x: 1, y: () => {console.log('THis is ES6')}}

export default myModule

// importing modules in ES5 version

var myModule = require('./myModule');

//  Here is the ES6 version

import myModule from './myModule'

// module file you will export your module something like this

export const x = 1;
export const y = 2;
export const z = 'String';

// And import them something like this
// Here we used ES6 object destruction to import multiple child modules from one single module.

import {x, y, z} from './myModule';
