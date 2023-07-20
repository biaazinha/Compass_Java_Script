const numbers = [1, 2, 3, 4];

//end
const last = numbers.pop();  //remove ultimo elemento
console.log(numbers);

//beginning
const first = numbers.shift(); //remove primeiro elemento
console.log(numbers);

//middle
numbers.splice(2, 1);  //remove em algum lugar no meio
console.log(numbers);