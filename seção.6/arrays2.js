const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

//console.log(courses.includes({ id: 1, name: 'a' }));

//arrow function 
const course = courses.find(course => course.name === 'a');

console.log(course);