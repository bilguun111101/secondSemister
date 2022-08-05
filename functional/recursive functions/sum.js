const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let sumnum = 0;

rl.question("Enter your number: ", (number) => {
    let numbernum = parseInt(number);
    console.log(sum1(numbernum))
    rl.close();
})

// const sum = (num) => {
//     if(num === 0) {
//         return sumnum;
//     }
//     sumnum += num;
//     return sum(num -= 1);
// }

const sum1 = (n) => {
    if(n < 0) 
        return 0;
    return n + sum1(n - 1);
}