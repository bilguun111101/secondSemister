const users = [
    { id: 11, name: 'Bat', age: 23, group: 'editor' },
    { id: 47, name: 'Bold', age: 28, group: 'admin' },
    { id: 85, name: 'Tulga', age: 34, group: 'editor' },
    { id: 97, name: 'Suren', age: 28, group: 'admin' },
    { id: 100, name: 'Buren', age: 28, group: 'dude' }
];
let arr = [], u = 0; p = 0, first = arr[0];
users.filter(a => arr.push(a.group));
arr.forEach(doc => first === doc ? u++ : p++)
console.log(u, p)