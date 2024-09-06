let numbersToRound = [3.456, 5.678, 7.5];
let roundedValues = numbersToRound.map(num => Math.round(num * 100) / 100);

console.log(roundedValues);  // [3.46, 5.68, 7.5]
