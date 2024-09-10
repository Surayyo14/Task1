let price = 30; 
let on_break = true; 

const budget = 20; 

let canGiveNotebook = (price <= budget) && !on_break;

console.log(canGiveNotebook);