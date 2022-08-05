const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = [1, [2, [3, 4]], [5, 5], 23];
let arr2 = [];

rl.question("Enter your number: ", (number) => {
    console.log(zadlah(arr));
    rl.close();
})

const zadlah = (arr1) => {
    arr1.forEach(arr1 => {
        if(!isNaN(arr1))
            return arr2.push(arr1);
        else
            return zadlah(arr1);
    })
    return arr2;
}