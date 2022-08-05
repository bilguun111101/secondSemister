const phone = () => new Promise((resolve, reject) => {
    let time = Math.round(Math.random() * 4) * 1000;
    setTimeout(() => {
        let happyDad = Math.round(Math.random());
        if(happyDad) {
            let phone = {
                brand: 'LG',
                color: 'black'
            }
            resolve(phone);
        } else {
            reject("he said sorry");
        }
    },time)
})




const remax = () => new Promise((resolve, reject) => {
    let time = Math.round(Math.random() + 3) * 1000;
    setTimeout(() => {
        let happyDad = Math.round(Math.random());
        if(happyDad) {
            let hp = {
                headPhone: 'head phone',
                brand: 'Iphone',
                color: 'red'
            }
            resolve(hp);
        } else {
            reject("He can't buy head phone")
        }
    }, time);
})

const askMom1 = async () => {
    try {
        const response = await phone();
        console.log(response);
        try{
            const res = await remax();
            console.log(res)
        } catch (err) {
                console.log("He can't buy head phone");
        }    
    } catch (err) {
        console.log('He said no')
    }
}

// let askMom = async () => {
//     return phone
//         .then((data) => {
//             if(data) {
//                 console.log(data);
//                 return remax
//                     .then((el) => console.log(el))
//                     .catch((err) => console.log(err));
//             }
//         })
//         .catch((err) => console.log(err));
// }


console.log(askMom1());
// console.log(Math.round(Math.random() * 9));
