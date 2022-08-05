// const friends = [
//     {
//         name: "Anna",
//         books: ["Dune", "Harry Potter"],
//         age: 21
//     },
//     {
//         name: "Bob",
//         books: ["War and peace", "Romeo and Juliet"],
//         age: 26
//     },
//     {
//         name: "Alice",
//         books: ["The Lord of the Rings", "The Shining"],
//         age: 18
//     },
// ]


// let arr = ['a', 'b', 'c', 'c', 'd'];
// let cArr = arr.reduce((pre, cur) => {
//     if(pre.indexOf(cur) === -1) {
//         pre.push(cur);
//     }
//     return pre;
// }, [])
// console.log(cArr)
















// let age = 20;
const { stdin } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Enter you age: ', (ageNumber) => {
    let ageSring = ageNumber.split(' ');
    let p = [];
    ageSring.forEach(doc => {
        if(isNaN(doc)){}
        else if(doc !== ''){
            p.push(parseInt(doc))
        }
    })
    console.log(p)
    // let arr = [];
    // p.forEach(doc => {
    //     if(doc !== isNaN) {
    //         arr.push(doc);
    //     }
    // })
    // console.log(...arr)
    rl.close();
})