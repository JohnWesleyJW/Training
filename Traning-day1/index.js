console.log("mike testing 123")

// let name = 'JW';
// console.log(name);

// let firstName = "John";
// let lastName = "Wesley";

// firstName = "John";

// console.log(firstName + " " + lastName);

// let interestRate = 0.3;

// interestRate = 1;
// console.log(interestRate);

// const PI = 3.14;
// console.log(PI);
// PI = 1; //Uncaught TypeError: Assignment to constant variable.
// console.log(PI);

//------------------------------------------------------------------------------

//data types

//primitive //reference

//primitive - String, Number, Boolean, undefined, Null
//reference - Objects, Arrays and Functions

let name = 'JW'; //String Literal
let age = 25; //Number Literal
let isApproved = true; //Boolean Literal - true or false
let firstName = undefined;
let lastName = null; //typeOf() returns object

//------------------------------------------------------------------------------

//Dynamic Typing

console.log("typeof(name) : " + typeof(name)); 
name = 2;
console.log("typeof(name) : " + typeof(name)); 

console.log("typeof(age) : " + typeof(age)); 
age = 25.25;
console.log("typeof(age) : " + typeof(age));

console.log("typeof(isApproved) : " + typeof(isApproved));
console.log("typeof(firstName) : " + typeof(firstName));
console.log("typeof(lastName) : " + typeof(lastName));

//------------------------------------------------------------------------------

//Object - typeOf(object) is object

let person = {
 name: "John Wesley",
 age: 25
};

console.log(person)
console.log("typeof(person) : " + typeof(person))
console.log("person.name : " + person.name);
console.log("person.age : " + person.age);

//Dot notation
person.name = "Brian Alsruhe";
person.age = 45;

console.log(person)
console.log("person.name : " + person.name);
console.log("person.age : " + person.age);

//Bracket Notation - good for dynamic access
person['name'] = "Bro Code";
person['age'] = 30;

console.log(person);
console.log("person['name'] : " + person['name']);
console.log("person['age'] : " + person['age']);

let propertyToSelect = "name";
console.log(person[propertyToSelect]); 

//------------------------------------------------------------------------------

//Arrays - typeOf(array) is object

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log("typeof(selectedColors) : " + typeof(selectedColors));
console.log("selectedColors : " + selectedColors);
console.log(selectedColors[0]);
selectedColors[0] = 123;
console.log(selectedColors[0]);
selectedColors[0] = 'green';
console.log(selectedColors[0]);

selectedColors[2] = 1234;
selectedColors[3] = "yellow"

console.log("using for loop...........");
for (let i = 0; i < selectedColors.length; i++) {
   console.log(selectedColors[i]);    
}

console.log("using foreach loop............");
selectedColors.forEach(color => {
    console.log(color);
} )

console.log("selectedColors.length : " + selectedColors.length);


//------------------------------------------------------------------------------

//Functions

function greet() {
    console.log("Good Morning");
}

greet();

function greetUser(name, age) {
    console.log("Hello " + name + ". You are " + age);
    console.log(`Hello ${name} . You are ${age}`);
}

greetUser("Brad Traversy", 40);
greetUser(person.name, age);


function square(number) {
    return number * number;
}

console.log("square(5) : " + square(5));

let squareOf10 = square(10);
console.log("square(10) : " + squareOf10);

//arrow functions

let multiplyFunction = (a, b) => a * b;
console.log("multiplyFunction(2,5) : " + multiplyFunction(2,5));

let sayGoodMorningFn = () =>  {return "Hello World"};
console.log("sayGoodMorningFn : " + sayGoodMorningFn());