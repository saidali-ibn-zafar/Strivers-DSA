// printing Hey, Striver
console.log("Hey, Striver!");

// the newline character
console.log("Hey, \nStriver!");

// prompting the user to input a value for x
let x = parseInt(prompt("Enter the value of x: "));
console.log("Value of x: " + x);

// - - - -

// Number
let num = 10;
let pi = 3.14;

// String
let str = "Hello";
let anotherStr = "World";

// Boolean
let isTrue = true;
let isFalse = false;

// Undefined
let undefinedVar;

// Null
let nullVar = null;

// Object
let person = {
  name: "John",
  age: 30,
};

// Array
let fruits = ["apple", "banana", "orange"];

// Function
function add(a, b) {
  return a + b;
}

// Printing values to console
console.log("Number:", num, pi);
console.log("String:", str, anotherStr);
console.log("Boolean:", isTrue, isFalse);
console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
console.log("Object:", person);
console.log("Array:", fruits);
console.log("Function:", add(5, 3));

// - - - - -

// If else statements

let age = 10;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// switch case

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Thursday / Friday / Saturday / Sunday");
}

// - - - -

// Arrays

// In JavaScript, an array is a data structure
// used to store a collection of elements.
// Arrays can hold elements of any data type,
// including numbers, strings, objects, other
// arrays, or a mix of these types. Arrays in
//  JavaScript are zero-indexed, meaning the first element is at index 0, the second element at index 1, and so on.

// Strings

// In JavaScript, a string is a sequence of characters
// enclosed within single ('') or double ("") quotes. Strings
//  can contain letters, numbers, symbols, spaces, and special characters.

// - - - - -

// forLoop

function runForLoop(len) {
  for (let i = 0; i < len; i++) {
    console.log("this is the " + i + "'th iteration");
  }
}

// whileLoop

let n = 10;

while (n) {
  console.log(n);
  n--;
}
