let number = exc1(1, 2);
console.log(number);  //2

    function exc1(a, b){

    if (a > b) return a;
    return b;
}


//-----------------------------------------------------------------


function exc2(altura, largura) {
    return (largura > altura);
}
console.log(exc2(800, 600)) //false


//-----------------------------------------------------------------



const output = exc3(7);
console.log(output);

function exc3(input) {
    if (typeof input !== 'number')
    return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

    if (input % 3 === 0)
    return 'Fizz';

    if (input % 5 === 0)
    return 'Buzz';

    return input;
}


//-----------------------------------------------------------------

exc4(130);

function exc4(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
           console.log('License suspended');
        else 
           console.log('Points', points);
    }
}


//-----------------------------------------------------------------

exc5(10);

function exc5(limit) {
    for (let i = 0; i <= limit; i++){
        //if (i % 2 === 0) console.log(i, 'EVEN');
        //else console.log(i, 'ODD');

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}


//-----------------------------------------------------------------

const array = [0, null, undefined, '', 1, 2, 3];
console.log(exc6(array));

function exc6(array){
    let count = 0;
    for (let value of array)
       if (value)
          count++;
    return count;
}

//-----------------------------------------------------------------
const movie = {
    title: 'a',
    releaseYear: 2023,
    rating: 4.5,
    director: 'b'
};

exc7(movie);

function exc7(obj) {
    for (let key in obj) {
       if (typeof obj[key] === 'string')
          console.log(key, obj[key]);
    }
}


//-----------------------------------------------------------------

console.log(exc8(10));

function exc8(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
       if (i % 3 === 0 || i % 5 === 0)
          sum += i;

    return sum;
}


//-----------------------------------------------------------------

const marks = [80, 80, 50];

console.log(exc9(marks));

function exc9Grade(marks) {
    const average = exc9Average(marks);

    if (average > 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function exc9Average(array) {
    let sum = 0;
    for (let value of array) 
       sum += value;
    return sum / array.length;
}

//-----------------------------------------------------------------

exc10(10);

function exc10(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

//-----------------------------------------------------------------

exc11show(20);
 
function exc11show(limit) {
    for (let number = 2; number <= limit; number++){
        if (isPrime) console.log(number);
    }
}

function exc11Prime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false;

    return true;
}