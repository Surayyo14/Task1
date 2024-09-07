let num = 231;

let firstDigit = Math.floor(num / 100);
let lastDigit = num % 10;
let middleDigit = Math.floor((num % 100) / 10);

let result = lastDigit * 100 + middleDigit * 10 + firstDigit;

console.log(result);
