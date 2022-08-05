const chalk = require("chalk");
const args = process.argv.slice(2);
const str = args.join("");
let bgColor = '', color = '', text = '';
let ppp = 'hi my name is bilguun';

// console.log(str.includes('-bg'));
// if(str.includes('-bg')) {
//     let tmp = str.split("-bg")[1].split("-")[0];
// }
// if(str.includes("-c")) {
//     color = str.split('-c')[1].split('-')[0];
//     // console.log(color)
// }
// if(str.includes('-t')) {
//     text = str.split("-t")[1].split("-")[0];
//     // console.log(text)
// }
// console.log(chalk[color][bgColor](text));

// if(str.includes('-bg')) {
//     let tmp = str.split('-bg')[1].split('-')[0]
// }
// if(str.includes('-c')) {
//     let dude = str.split('-c')[1].split('-')[0];
// }
// if(str.includes('-t')){
//     let string = str.split('-t')[1].split('-')[0];
// }
// console.log(chalk[color][tmp](string));