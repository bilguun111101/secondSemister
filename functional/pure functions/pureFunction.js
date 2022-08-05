// let ioo = (arr) => {
//     let i = 0, sum = 0, sum1 = 0;
//     while(i < arr.length) {
//         sum1 = arr[i];
//         sum += sum1;
//         i++;
//     }
//     return sum;
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let dude = ioo(array);

// let ioo = (arr) => {
//     let i = 0; multi = 1; p = 0;
//     while(i < arr.lenght) {
//         p = arr[i];
//         multi *= p;
//         i++;
//     }
//     return multi;
// }

// let array = [1, 2, 3];
// console.log(ioo(array));

// function multiply(a) {
//     return (b) => {
//         return(c) => {
//             return b;
//         }
//     }
// }

let multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(9)(2)(3))