const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

//enumerar propriedades

for (let key in circle)
console.log(key, circle[key]);

for (let key of Object.keys(circle))
console.log(key);

for (let entry of Object.entries(circle))
console.log(entry);


//copiar - 3 maneiras:

//const another = {};
//for (let key in circle)
//another[key] = circle[key];

//const another = Object.assign({}, circle);

//const another = { ...circle };

console.log(another);