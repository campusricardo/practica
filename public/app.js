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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
