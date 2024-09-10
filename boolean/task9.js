function areBothNegative(a, b) {
    return (a < 0 && b < 0);
}

console.log(areBothNegative(-5, -9)); // True
console.log(areBothNegative(-4, 8));   // False
console.log(areBothNegative(10, -2));  // False
console.log(areBothNegative(4, 3));    // False