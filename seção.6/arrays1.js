
const numbers = [1, 2, 3, 4, 1];

//end
numbers.push(5, 6);
console.log(numbers);

//beginning
numbers.unshift(1, 2);
console.log(numbers);

//middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

//retornar indice
numbers.indexOf(1)
console.log(numbers);

//se o elemento existe no array
numbers.includes(1); //true
numbers.lastIndexOf(1);
console.log(numbers);