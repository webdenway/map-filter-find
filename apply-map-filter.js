const students = [
    { id: 21, name: 'kamal' },
    { id: 31, name: 'hasan' },
    { id: 41, name: 'monir' },
    { id: 71, name: 'sumon' }
];

const names = students.map(s => s.name);

const ids = students.map(i => i.id)
const bigger = students.filter(k => k.id > 30);
const biggerOne = students.find(k => k.id > 30);

console.log(bigger);
console.log(biggerOne);