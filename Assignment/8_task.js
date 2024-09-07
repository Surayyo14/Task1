let x1 = -9.7,
  y1 = -9.9;
let x2 = 0.0,
  y2 = 2.9;
let x3 = -0.1,
  y3 = 5.2;

let a = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
let b = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
let c = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);

let p = (a + b + c) / 2;

let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
area = Math.round(area * 100) / 100;

let perimeter = Math.round((a + b + c) * 100) / 100;
console.log(perimeter);
console.log(area);
