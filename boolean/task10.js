function areBothEven(a, b) {
    return (a % 2 === 0 && b % 2 === 0);
}


console.log(areBothEven(4, 2)); // True
console.log(areBothEven(5, 3)); // False
console.log(areBothEven(2, 8)); // True
console.log(areBothEven(1, 4)); // False