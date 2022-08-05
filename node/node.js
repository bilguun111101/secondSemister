let o = 0, arrsum = [];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("asuult: ", (answer) => {
    let asd = answer.split(' ');
    asd.forEach(doc => {
        if(doc !== '') {
            o += parseInt(doc);
        }
    })
    console.log(o)
    rl.close();
});