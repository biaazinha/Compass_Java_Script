const circle = {
    radius: 1
};

//sempre podemos alterar o objeto do circulo

//cicrcle = {};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);