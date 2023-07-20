let numbers = [1, 2, 3, 4];
let another = numbers;

//solução 1 - nenhuma outra referencia ao array original
//numbers = [];


//solução 2
//numbers.length = 0;


//solução 3
//numbers.splice(0, numbers.length);


//solução 4
while (numbers.length > 0)
  numbers.pop()

console.log(numbers);
console.log(another);