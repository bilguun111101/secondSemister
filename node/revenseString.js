const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter your string: ', (answer) => {
    let revense = '';
    for(let i = answer.length - 1; i >= 0; i--) {
        revense += answer[i];
    }
    let i = 0;
    console.log(revense);
    rl.close();
})