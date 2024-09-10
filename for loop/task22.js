let n = 5;
let x = 2;
let sum = 1; 

for (let i = 1; i <= n; i++) {
  let fact = 1;
  for (let j = 1; j <= i; j++) {
    fact *= j;
  }
  sum += Math.pow(x, i) / fact;
}

console.log("Yig‘indi: " + sum);
