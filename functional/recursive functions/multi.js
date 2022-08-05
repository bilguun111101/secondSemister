const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// let sumnum = 1;

rl.question("Enter your number: ", (number) => {
    let arr = [], i = 0;
    let string = number.split(' ');
    while(i < string.length){
        if(string[i] !== '')
            arr.push(parseInt(string[i]));
        i++
    }
    let numbernum = parseInt(number);
    console.log(multi(arr[0], arr[1]))
    rl.close();
})

const multi = (n, l) => {
    if(l === 0)
        return 1;
    else 
        return n * exponent(n, l -= 1);
}