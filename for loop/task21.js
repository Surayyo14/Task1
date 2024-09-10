let n = 5;
let sum = 1;  

for (let i = 1; i <= n; i++) {
  let fact = 1;
  for (let j = 1; j <= i; j++) {
    fact *= j;
  }
  sum += 1 / fact;
}

console.log("Yig‘indi: " + sum);
