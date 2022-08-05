const readline = require('readline');
const rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("Enter your number: ", (numbers) => {
    // let numberString = numbers.split(' ');
    // let arrNumbers = [], i = 0;
    // while (i < numberString.length) {
    //     if(numberString[i] !== '') {
    //         arrNumbers.push(parseInt(numberString[i]));
    //     }
    //     i++
    // }
    // console.log(sayMyName(numbers));
    // console.log(double(...arrNumbers))
    // let add = add2;
    // console.log(add(...arrNumbers))
    // let sum = 1, multi = 0;
    // for(let j = 0; j < arrNumbers.length; j++) {
    //     arrNumbers[j] % 2 ? sum *= arrNumbers[j] : multi += arrNumbers[j];
    // }
    // console.log("sum:",sum)
    // console.log("multi: ",multi)
    console.log(getAccess(numbers))
    rl.close();
})
function add2(a, b) {
    return a + b;
}

let pipe = {
    x
}

const sayMyName = (name) => `Hello, ${name}`;

const double = (x, b) => {
    return x * 2;
}

const getAccess = (allowed) => {
    if(allowed === 'allowed') {
        return true;
    } else {
        return false;
    }
}
