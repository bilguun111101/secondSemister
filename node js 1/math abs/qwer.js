let qwer = require('./export');

let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter your number: ', (number) => {
    qwer.abs(number);
    rl.close();
})