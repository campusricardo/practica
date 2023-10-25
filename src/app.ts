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

greetPerson(me);

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

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(
        toFrom.value, 
        details.value,
        amount.valueAsNumber
        );
    } else { 
        doc = new Payment(
            toFrom.value, 
            details.value,
            amount.valueAsNumber
            );
    }

    list.render(doc, type.value, 'end');
    
});

