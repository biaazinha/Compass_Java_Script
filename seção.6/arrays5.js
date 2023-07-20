const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];
console.log(combined);

// const copy = combined.slice();
const copy = [...combined];

const slice = combined.slice(2);
console.log(slice);
