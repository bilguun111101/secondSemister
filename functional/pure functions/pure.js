// let discount = (price, discount) => kkk = price * discount => (kkk);
// function discount(price, discount){
//     let kkk = price * discount;
//     return (kkk) => {
//         return kkk - price;
//     }
// }
// let discount = (price) => {
//     return (discount) => {
//         return price - price/discount
//     }
// }
let discount = (price) => (discount) => price - (price * discount);

console.log(discount(1000)(0.1));