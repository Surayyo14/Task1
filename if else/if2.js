let a = 50;
let b = 89;
let c = 1;

let middle;


if ((a > b && a < c) || (a > c && a < b)) {
  middle = a;
}

else if ((b > a && b < c) || (b > c && b < a)) {
  middle = b;
}

else {
  middle = c;
}

console.log("O‘rtadagi son: " + middle);
