function swapDigits(a) {
  let yuzlik = Math.floor(a / 100);
  let onlik = Math.floor((a % 100) / 10);
  let birlik = a % 10;

  let newNumber = onlik * 100 + yuzlik * 10 + birlik;

  return newNumber;
}

let a = 345;
console.log(swapDigits(a));
