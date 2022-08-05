
// function long(a) {
//     console.log("Toirgiin urt n : ", 2 * Math.PI * a);
// }

function long(a) {
    let dude = a.split(' ');
    let qwec = [];
    for(let i = 0; i < dude.length; i++) {
        if(dude[i] !== '') {
            qwec.push(parseInt(dude[i]));
        }
    }
    // console.log(Math.max(...qwec));
    let qqq = 0;
    for(let i = 0; i < qwec.length; i++) {
        if(qqq <= qwec[i]) {
            qqq = qwec[i];
        }
    }
    console.log(qqq);
}


module.exports.log = long;