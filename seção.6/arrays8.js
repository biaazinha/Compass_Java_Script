const numbers = [1, -1, 2, 3];

// every()
// some()

const atLeastOnePositive = numbers.some(function(value){
    return value >= 0;
});

console.log(atLeastOnePositive);



//filtrar
const filtered = numbers.filter(n => n >= 0);

console.log(filtered);


//mapear
const items = numbers 
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(items);



//reduzir a matriz para calcular
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

//let sum = 0;
//for (let n of numbers)
//sum += n;

console.log(sum);
