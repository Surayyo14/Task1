let n = 56987; 

let maxDigit = -1; 
let maxIndex = -1;
let digits = n.toString().split(''); 

for (let i = 0; i < digits.length; i++) {
    let digit = parseInt(digits[i]);
    if (digit > maxDigit) {
        maxDigit = digit; 
        maxIndex = i; 
    }
}

console.log(maxDigit, maxIndex); 