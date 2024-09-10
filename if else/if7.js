
let x = -9; 
let result;


if (x <= 0) {
    result = -x; 
} else if (x > 0 && x < 2) {
    result = x * x; 
} else {
    result = 4; 
}

console.log("f(" + x + ") = " + result);