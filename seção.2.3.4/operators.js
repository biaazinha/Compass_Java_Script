//OPERADORES
let x = 10;
let y = 3;

//console.log(x + y);
//console.log(x - y);
//console.log(x * y);
//console.log(x / y);
//console.log(x % y);
//console.log(x ** y); // x elevado a y

//incremento (++)
console.log(x++);


//decremento
console.log(x--);


//---------------------------------------------------------------------------

//OPERADOR DE ATRIBUIÇÃO
let X2 = 10;

//são a mesma coisa
//x = x + 1;
//x += 1;

//x = x * 3
//x *= 3;


//---------------------------------------------------------------------------

//OPERADORES DE COMPARAÇÃO - boolean
let z = 1;

//relational
console.log(z > 0); //true
console.log(z >= 1); //true
console.log(z < 1); //false
console.log(z <= 1); //true

//equality
console.log(z ===  1); //true
console.log(z !== 1); //false


//---------------------------------------------------------------------------

//operador de igualdade estrita - strict equality
//mesmo tipo e valor
console.log(1 === 1); //true
console.log('1' === 1); //false

//operador de igualdade de perda - lose equality
//se o tipo não corresponde, ele converte
console.log(1 == 1); //true
console.log('1' === 1); //true


//---------------------------------------------------------------------------

//OPERADORES TERNÁRIOS
let pontos = 110;
let type = pontos > 100 ? 'gold' : 'silver';

console.log(type);


//---------------------------------------------------------------------------

//OPERADOR LÓGICO
//AND - && (só vai ser true se os dois forem true, resto false)
let soma1 = true;
let soma2 = true;
let total1 = soma1 && soma2;

console.log(total1); //true

//OR - || (só vai ser false se os dois forem false, resto true)
let soma3 = true;
let soma4 = true;
let total2 = soma3 || soma4;

console.log(total2); 
//NOT (!)
console.log(!total2); 


//---------------------------------------------------------------------------

//Falsy (false)
//undefined, null, 0, false, '', NaN
//Tudo que não é falsy é truthy

// Short-circuiting (curto-circuito) 

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.group(currentColor);


//---------------------------------------------------------------------------

//EXERCICIO
let a =  'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a); //blue
console.log(b); //red
