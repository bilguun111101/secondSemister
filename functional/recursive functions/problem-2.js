const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter your number: ", (number) => {
    let numbernum = parseInt(number); 
    console.log(partral(numbernum));
    rl.close();
})

const partral = (n) => {
    if(n === 0)
        return 1;
    return n * partral(n - 1);
}