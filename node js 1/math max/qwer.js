let qwer = require('./export');

let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// radius circle ------------------------------------------------------

// rl.question("Enter your radius: ", (enter) => {
//     let dude = enter.split(' ');
//     for(let i = 0; i < dude.length; i++) {
//         if(dude[i] !== ''){
//             qwer.log(dude[i]);
//             break;
//         }
//     }
//     rl.close();
// })

// ====================================================================

rl.question("Enter your numbers: ", (numbers) => {
    qwer.log(numbers);
    rl.close();
})