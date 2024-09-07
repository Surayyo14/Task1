let a = 2;
let b = 3;

let innerExpression = Math.sqrt(
  Math.pow(a, 3) - Math.pow(b, 3) + (Math.pow(a, 3) + Math.pow(b, 3))
);

let result = Math.sqrt(innerExpression);

console.log(result);
