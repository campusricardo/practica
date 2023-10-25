// classes

class Invoice {
    client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
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

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invoices.forEach((inv)=> { 
    console.log(inv.client, inv.amount, inv.format());
    
});

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

form.addEventListener('submit', (e)=> { 
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
    
});

