const { stdin, stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(": ", (numbers) => {
    // console.log(
    //     numbers.split(' ')
    //     .filter(string => string !== '')
    //     .map(Number)
    //     .filter(a => a % 2 === 0)
    //     .reduce((acc, cur) => acc * cur)
    // )
    // ---------------
    console.log(...
        numbers.split(' ')
        .filter(string => string !== '')
        .map(Number)
        .map((number, index) => 2022 - number + index)
    )

    // console.log(...
    //     numbers.split(' ')
    //     .map(Number)
    //     .filter(a => a !== NaN)
    //     .filter(string => string !== '')
    //     .map(number => 2022 - number)
    // )
    rl.close();
})

// const a = [1, 2, 3, 4].map(a => a * 2)
// console.log(a);