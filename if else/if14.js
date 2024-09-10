let n = 27; 

const tens = Math.floor(n / 10);
const units = n % 10;
const swapped = units * 10 + tens;

let result = swapped <= n;
console.log(result); 