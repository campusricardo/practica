// classes
import { ListTemplate } from "./classes/ListTemplate.js";
import {Invoice} from "./classes/invoice.js";
import {Payment} from "./classes/payments.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];

// docs.push(docOne);
// docs.push(docTwo);

// interfaces

interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
};

const me: IsPerson = {
    name: 'Ricardo Franco',
    age: 17,
    speak(text: string):void {
        console.log(text);
        
    },
    spend(amount: number): number {
        console.log(`I spend ${amount}`);
        return amount
        
    }
};

const greetPerson = (person: IsPerson) => { 
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

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;

const toFrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance

const ul: HTMLUListElement = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e)=> { 
    e.preventDefault();
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else { 
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
enum resourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
    uid: number;
    resourceType: resourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: { name: 'Juan'}

}

const docTwo: Resource<string[]> = {
    uid: 2,
    resourceType: resourceType.AUTHOR,
    data: ['bread', 'milk', 'toilet roll']
}


// Tuples

// This is and array
let arr:(string|number|boolean)[] = ['ryu', 25, true];
arr[0] = true;
arr[1] = 'yoshi';

let tup: [string, number, boolean] = ['ryu', 25, true];

tup[0] = 'Hola';
// This is a tuple it defines the value of the objects within the array 
let student: [string, number];

student = ['Xia-xia', 12323];

