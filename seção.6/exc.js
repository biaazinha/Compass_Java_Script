// escrever uma função com dois parametros que vai mostrar um array de um parametro ao outro 
const numbers1 = arrayFromRange(-10, -4);

console.log(numbers1);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
      output.push(i);
    return output;
}



//função com o método includes, retornar true se o elemento pesquisado estiver no array
const numbers2 = [1, 2, 3, 4];

console.log(includes(numbers2, -1));

function includes(array, searchElement) {
    for (let element of array)
      if (element === searchElement)
        return true;
    return false;
}


// retornar um novo array eliminando os valores passados
const numbers3 = [1, 2, 3, 4, 1, 1];

const output = except(numbers3, [1, 2, 3]);

console.log(output);

function except(array, excluded) {
    const ouput = [];
    for (let element of array)
      if (!excluded.includes(element))
        output.push(element);
    return output;
}



//array com o indice do elemento que queremos mover e um deslocamento
const numbers4 = [1, 2, 3, 4];

const output2 = move(numbers4, 1, 0);

console.log(output2);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset,');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}



//elemento de busca mostra o numero de vezes que o elemento de pesquisa aparece no array 
const numbers5 = [1, 2, 3, 4, 1];

const count = count0ccurrences(numbers5, 1);

console.log(count);

function count0ccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}




//retornar o amior numero do array
const numbers6 = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 3, 1]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    //let max = array[0];
    //for (let i = 1; i < array.length; i++)
    //  if (array[i] > max)
    //    max = array[i];
    //return max;

    return array.reduce((a, b) => (a > b) ? a : b);
}


// classificar em ordem decrescente
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.0 },
    { title: 'd', year: 2017, rating: 4.8 },
];

const titles = movies
 .filter(m => m.year === 2018 && m.rating >= 4)
 .sort((a, b) => a.rating - b.rating)
 .reverse()
 .map(m => m.title)

console.log(titles);