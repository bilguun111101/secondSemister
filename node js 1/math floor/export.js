function floor(a) {
    let dude = a.split(' ');
    let arr = [];
    for(let i = 0; i < dude.length; i++) {
        if(dude[i] !== '') {
            arr.push(parseInt(dude[i]));
        }
    }
    console.log(Math.floor(...arr));
}

module.exports.floor = floor;