// retornar se é um array ou não
console.log(sum([1, 2, 3, 4]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
      items = [...items[0]];

    return items.reduce((a, b) => a +b);
}



// objeto de circula usando a sintaxe literal do objeto
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);



//corrigindo o exc da seção 6 mostrando erro se não passar um array
try {
    const numbers = [1, 2, 3, 4];
    const count = count0ccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}


function count0ccurrences(array, searchElement) {
    if (!Array.isArray(array))
      throw new Error('Invalida array.')

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}
