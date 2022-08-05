const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var arr = [1, 1];
var num = 1;

rl.question("Enter your number: ", (number) => {
    let numbernum = parseInt(number);
    console.log(finonaci(numbernum));
    rl.close();
})

const finonaci = (n) => {
    if(n - 1 === num)
        return arr[num];
    else if(n - 1 === 0)
        return arr[0];
    else {
        num++;
        arr[num] = arr[num - 1] + arr[num - 2];
        console.log(arr);
        return finonaci(n);
    }
}