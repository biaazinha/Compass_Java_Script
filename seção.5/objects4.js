let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);


//value vs reference types

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);