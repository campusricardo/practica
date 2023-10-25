"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Ricardo', 'Work in BAM', 250);
const invTwo = new Invoice('Luigi', 'Works as a plumber', 300);
console.log(invOne);
invOne.client = 'yoshi';
invOne.amount = 400;
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
