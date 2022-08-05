function abs(a) {
    let dude = a.split(' ');
    let arr = [];
    for(let i = 0; i < dude.length; i++) {
        if(dude[i] !== ''){
            arr.push(parseInt(dude[i]));
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= 0) {
            console.log(-arr[i]);
        } else {
            console.log(arr[i])
        }
    }
}

module.exports.abs = abs;