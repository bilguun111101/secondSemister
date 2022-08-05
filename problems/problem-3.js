let person = [
    {id: 1, name: "Dorj", age: 19},
    {id: 2, name: "Bold", age: 13},
    {id: 3, name: "Baldan", age: 15},
    {id: 4, name: "Tsetsgee", age: 20},
    {id: 5, name: "Dulma", age: 23},
]
let adults = person.filter(obj => obj.age >= 18);
console.log(...adults);