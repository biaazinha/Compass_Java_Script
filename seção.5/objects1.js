//object oriented programing - programação orientada a objetos
//podemos colocar funções dentro de um objeto


//FUNÇÃO DE FÁBRICA
//notação camelo - oneTwoThree

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


//FUNÇÃO DE CONSTRUTOR
//this - referencia ao objeto que esta executando um trecho
//notação pascal - OneTwo

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

//new - cria um objeto vazio
const circle = new Circle(1);
