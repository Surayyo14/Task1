let n = 56987; 

let maxDigit = 0;
while (n > 0) {
    let digit = n % 10; 
    if (digit > maxDigit) {
        maxDigit = digit; 
    }
    n = Math.floor(n / 10); 
}

console.log(maxDigit); 