const chocolates = [
    {dark: true, flavour: "strawberry"},
    {dark: false, flavour: "strawberry"},
    {dark: false, flavour: "almond"},
    {dark: true, flavour: "almond"},
    {dark: false, flavour: "lemon"},
]
// const checkProperty = (a) => (b) => (obj) => obj[a] === b;
// const darkChocolates = chocolates.filter(checkProperty("flavour")("strawberry"));
// console.log(darkChocolates);
const checkProperty = (a) => (b) => (obj) => {
    if(obj[a] === b) return obj[a] === b;
    else console.log('No')
}
const darkChocolates = chocolates.filter(obj => checkProperty("flavour")("strawberry")(obj));
console.log(...darkChocolates);