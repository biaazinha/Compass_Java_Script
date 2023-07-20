//VARIÁVEIS
let nome = 'Bia';
console.log(nome);

//Não podem ser palavra chave reservada - if, else, var
//Devem ser significativos
//Não podem começar com número
//Não pode conter espaço ou hífen
//Não pode existir variáveis com nomes iguais 

//---------------------------------------------------------------------------------

//CONSTANTES
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//Valores que não vão mudar - se não da erro

//---------------------------------------------------------------------------------

//PRIMITIVOS - string, number, boolean, undefined, null
let escrita = 'oi'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let firstName = undefined;
let lastName = null; //limpar explicitamente o valor de uma variável

//---------------------------------------------------------------------------------


//REFERENCIA - objetos, arrya, functions
let person = {
    nome: 'Bia',
    idade: 18
};

//notação por ponto
person.nome = 'Bruna';

//notação de colchetes
let selection = 'nome';
person[selection] = 'Maria';

console.log(person);

//---------------------------------------------------------------------------------

//ARRAYS - 'objetos' armazenamento

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

//são bem dinamicos


//---------------------------------------------------------------------------------

//FUNCTIONS

//performing a tak - mostram algo no console
//variável dentro do parenteses - só tem significado dentro da função
function greet(nome, lastNome) {
    console.log('Hello ' + nome + ' ' + lastNome);
}

greet('Bianca', 'Ramos');

//calculos

function square(number) {
    return number * number;
}

console.log(square(2));
