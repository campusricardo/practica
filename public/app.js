// classes
import { Invoice } from "./classes/invoice.js";
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
greetPerson(me);
const invOne = new Invoice('Ricardo', 'Work in BAM', 250);
const invTwo = new Invoice('Luigi', 'Works as a plumber', 300);
console.log(invOne);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
