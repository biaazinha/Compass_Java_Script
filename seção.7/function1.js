// function declaration 
walk();

function walk() {
    console.log('walk');
}

//anonymous function expression
run();

const run = function() {
    console.log('run');
};


//arguments
function sum(){
    let total = 0;
    for (let value of arguments)
      total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));


//operador rest

// zero ou o resto dos parametros
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));


//default paramters
function interest (principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, undefined,  5));


//getters and setters
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName (value) {
        if (typeof value !== 'string')
        throw new Error('Value is not a string.');
        
        const parts = value.split(' ');
        if (parts.length !== 2) 
          throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';
}
catch (e) {
    calert(e);
}

person.fullName = 'John Smith';

console.log(person);


//escope
const color = 'red';  //global

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);   
}

function stop() {
        const message = 'bye';
}

start();
