let a = 6.3;
let b = 8.6;

if (a >= 0 && a < 1000 && b > 0 && b < 1000) {
  let result = 9 * a * a * b - 27 * a * a * b * b + 15 * b * b;
  result = Math.round(result * 100) / 100; 
  console.log(result); 
}

a = 4.5;
b = 9.6;

if (a >= 0 && a < 1000 && b > 0 && b < 1000) {
  let result = 9 * a * a * b - 27 * a * a * b * b + 15 * b * b;
  result = Math.round(result * 100) / 100; 
  console.log(result);
}
