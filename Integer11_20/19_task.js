let a = 230; 
let birinchiRaqam = Math.floor(a / 100); 
let ikkinchiRaqam = Math.floor((a % 100) / 10); 
let uchinchiRaqam = a % 10; 

let yigindi = birinchiRaqam + ikkinchiRaqam + uchinchiRaqam; 
let kopaytma = birinchiRaqam * ikkinchiRaqam * uchinchiRaqam; 

console.log("Yig'indisi:", yigindi); 
console.log("Ko'paytmasi:", kopaytma); 



