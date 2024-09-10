function areBothPositive(a, b) {
    return (a > 0 && b > 0);
}


console.log(areBothPositive(11, 16)); // True
console.log(areBothPositive(-5, 8));  // False
console.log(areBothPositive(9, -1));  // False
console.log(areBothPositive(-4, -3)); // False