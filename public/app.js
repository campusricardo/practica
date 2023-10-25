// classes
import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
;
const me = {
    name: 'Ricardo Franco',
    age: 17,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
// const invOne = new Invoice('Ricardo', 'Work in BAM', 250);
// const invTwo = new Invoice('Luigi', 'Works as a plumber', 300);
// console.log(invOne);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invoices.forEach((inv)=> { 
//     console.log(inv.client, inv.amount, inv.format());
// });
//const anchor = document.querySelector('a')!;
// if (anchor) {
//     console.log(anchor.href);
// }
//console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
/*
// GENERICS


const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return ({...obj, uid});
}

let docOne = addUID({name: 'yoshi', age: 40});

//let docTwo = addUID('hello');

console.log(docOne.name);

// with interfaces

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Juan'}

}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree);
console.log(docFour);
*/
// ENUMS
// an enum is like an Array 
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 3] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
})(resourceType || (resourceType = {}));
;
const docOne = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: { name: 'Juan' }
};
const docTwo = {
    uid: 2,
    resourceType: resourceType.AUTHOR,
    data: ['bread', 'milk', 'toilet roll']
};
// Tuples
// This is and array
let arr = ['ryu', 25, true];
arr[0] = true;
arr[1] = 'yoshi';
let tup = ['ryu', 25, true];
tup[0] = 'Hola';
// This is a tuple it defines the value of the objects within the array 
let student;
student = ['Xia-xia', 12323];
