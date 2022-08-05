function round(a) {
    let dude = a.split();
    let arr = [];
    for(let i = 0; i < dude.length; i++) {
        if(dude[i] !== '') {
            arr.push(parseInt(dude[i]));
        }
    }
    console.log(Math.round(arr));
}

module.exports.round = round;