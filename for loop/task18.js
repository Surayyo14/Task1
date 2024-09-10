let a = 2;  
let n = 5;  
let sum = 0;

for (let i = 0; i <= n; i++) {
  sum += Math.pow(a, i) * Math.pow(-1, i); 
}

console.log("Yig‘indi: " + sum);
