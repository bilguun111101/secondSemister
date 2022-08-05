const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
];

const availableCoins = [500, 200, 100, 50, 20, 10];

rl.question(('Enter your number of product: '), (number) => {
    rl.question(("Enter your cash: "), (cash) => {
        let CashNumber = parseInt(cash);
        let InpNumber = parseInt(number), i = 0, arr = [];
        while (i < products.length) {
            if(products[i].number === InpNumber){
                arr.push(products[i]);
                CashNumber -= products[i].price;
            }
            i++;
        }
        console.log(arr[0].name);
        console.log(condition(CashNumber, InpNumber));
        rl.close();
    })
})
const condition = (number, cash) => {
    let money = cash;
    let ooo = products[0].price, lll = products[0].price, ppp = products[0].number, bbb = products[0].number;
    products.forEach(doc => {
        if(ooo >= doc.price){
            ooo = doc.price;
        }
        if(doc.number <= ppp){
            ppp = doc.number
        }
        else if(bbb <= doc.number){
            bbb = doc.number
        }
    })
    // if(bbb > number || ppp < number) return 'Please Enter your currect product number';
    // else if(ooo > cash) return 'Please Enter your currect cash';
    // else return answer(money);
    return answer(money)
}

const answer = (cash) => {
    let mm = [], j = 0;
    availableCoins.forEach(doc => {
        if(doc <= cash) {
            while (j < Math.floor(cash / doc)) {
                mm.push(doc);
                cash -= doc;
                j++;
            }
            j = 0;
        }
    })
    console.log("Hariult: ", mm);
    return mm;
}