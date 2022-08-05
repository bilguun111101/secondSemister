const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter your number: ", (number) => {
    let numbernum = parseInt(number);
    qwer(numbernum);
    rl.close();
})

const qwer = (num) => {
    if(num > 0){
        console.log(num);
        return qwer(num -= 1)
    }
}