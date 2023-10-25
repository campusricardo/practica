/*let character:string = 'mario';
let age:number = 30;
let isBlackBelt = false;


// character = 20

 character = 'luigi';

// age = 'asd'
 
 age = 40;

// isBlackBelt = 'yes';

isBlackBelt = true;

const circ = (diameter:number) => {
    return diameter * Math.PI;
}

console.log(circ(2));
*/
/*
// Arrays 


let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names[0] = 3;
// names.push(2);

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push('xd');
// numbers[0] = 'xd';

let mixed = ['ken', 4, 'chun-li', 8, 9, { a: 2}];

mixed.push({a: 3});

// Objects

let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 40;

// ninja.age = 'xd';
//ninja.skills = ['figthing', 'sneking'];

ninja = {
    name: '2',
    belt: 'orange',
    age: 2
}
*/
/*
// Explicit Types 

let character: string;
let age: number;
let isLoggedIn: boolean
// age = 'luigi'
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// Arrays
// we cannot push in this array because it is undefined 
// it's better to initialize with an empty array
let ninjas:string[] = [];

ninjas.push('shaun');
console.log(ninjas);

// Union Types


// we use parentesis when we are using arrays
let mixed: (string|number|boolean|object)[] = [];

mixed.push('hello');
mixed.push(20);
mixed.push(true);
mixed.push([1]);
mixed.push({a: 2});

console.log(mixed);

let uid: string|number;

uid = '123';
uid = 123;
// uid = true;

// Objects 

let ninjaOne: object;

// We should be carefull with this because an Array is an object too
ninjaOne =  { name: 'yoshi', age: 30};
ninjaOne = [];
console.log(ninjaOne);

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: 'Mario',
    age: 20,
    beltColor: 'black'
};

// ninjaOne = '123'
*/
// any converts typescript to javascript
/*

let age: any = 25;

age = true;

let mixed: any[] = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

console.log(age);

let ninja: {name: any, age: any};

ninja = { name: 'xd', age: true};

console.log(ninja);

*/