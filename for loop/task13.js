let n = 5; 
let sum = 0;

for (let i = 1; i <= n; i++) {
  let term = 1 + (i / 10); 
  if (i % 2 === 0) {
    sum -= term;
  } else {
    sum += term;
  }
}

console.log("Yig‘indi: " + sum); 
