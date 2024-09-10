
let x1 = 0.5; 
let x2 = -5;  


let result1;
if (x1 > 0) {
    result1 = 2 * Math.sin(x1); 
} else if (x1 > -6 && x1 <= 0) {
    result1 = x1 - 6;
} else {
    result1 = "X qiymati chegara ichida emas."; 
}


let result2;
if (x2 > 0) {
    result2 = 2 * Math.sin(x2);
} else if (x2 > -6 && x2 <= 0) {
    result2 = x2 - 6;
} else {
    result2 = "X qiymati chegara ichida emas.";
}


console.log("f(" + x1 + ") = " + result1);
console.log("f(" + x2 + ") = " + result2);