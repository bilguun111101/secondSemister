function min(a) {
    let dude = a.split(' ');
    let qwec = [];
    for(let i = 0; i < dude.length; i++) {
        if(dude[i] !== '') {
            qwec.push(parseInt(dude[i]));
        }
    }
    // console.log(Math.max(...qwec));
    let qqq = qwec[0], lll;
    for(let i = 0; i < qwec.length; i++) {
        if(qqq >= qwec[i]) {
            qqq = qwec[i];
        } else {
            lll = qwec[i];
        }
    }
    console.log("min number: ", qqq);
    console.log('max number: ', lll);
}


module.exports.min = min;