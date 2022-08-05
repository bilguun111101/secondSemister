const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let ppp = '';

rl.question("Enter your number: ", (number) => {
    let string = number.split('');
    let max = string.length - 1;
    console.log(reverse(max, string))
    // console.log(reverse1(string))
    rl.close();
})

const reverse = (max, string) => {
    if(max === -1)
        return ppp;
    ppp += string[max];
    return reverse(max -= 1, string);
}

// const reverse1 = (string) => {
//     if(string.length === 1)
//         return string
//     return string.slice(1, string.length) + string[0];
// }