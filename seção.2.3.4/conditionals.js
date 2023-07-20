//IF e ELSE IF
let hour = 10;

if (hour >= 6 && hour < 12) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon');
else 
    console.log('Good evening');



//SWITCH CASE
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;

    case 'moderator':
        console.log('Moderator user');
        break;
    
    default:
        console.log('Unknown user');
}


//FOR - loops
for (let i = 0; i <= 5; i++){
    if (i % 2 !== 0) console.log(i);
}



//WHILE  -- tem no começo que pode não ser válido
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}



//DO-WHILE  -- avaliada no final
let j = 0;
do {
    if (i % 2 !== 0) console.log(j);
    i++;
} while (i <= 5);



//FOR-IN - iterar sobre as propriedades de um objeto
const person = {
    nome: 'Marcos',
    idade: 12
};

for (let key in person) //key - nome da variavél
console.log(key, person[key]);


//FOR-OF - iterar os elementos ou itens em um array
const colors = ['red', 'green', 'blue'];

for (let color of colors)
console.log(color);



//Palavras chave
//BREAK AND CONTINUOUS
let k = 0;
while (k <= 10) {
    //if (k === 5) break;
    if ( k % 2 === 0){
        k++;
        continue;
    }

    console.log(k);
    k++;
}