let n = 5;
let x = 2;
let sum = 1;  

for (let i = 1; i <= n; i++) {
  let fact = 1;
  let power = 2 * i;
  for (let j = 1; j <= power; j++) {
    fact *= j;
  }
  sum += Math.pow(-1, i) * Math.pow(x, power) / fact;
}

console.log("Yig‘indi: " + sum);
