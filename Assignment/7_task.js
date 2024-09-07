let x1 = -1.4,
  y1 = 7.9;
let x2 = 6.1,
  y2 = 9.9;

let distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
distance = Math.round(distance * 100) / 100; 
console.log(distance); 

x1 = -3.9;
y1 = -8.2;
x2 = -1.3;
y2 = -2.9;

distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
distance = Math.round(distance * 100) / 100; 
console.log(distance); 
