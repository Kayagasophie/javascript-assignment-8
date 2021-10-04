// Afunction that prints my name and age

function description (name, age){
    console.log(name, age)
}
// function call

description ("kayaga", 20)
description ("Sseruga", 10)
description ("Susan", 40)
description ("Shamim", 18)
description ("Batwawula", 45)

//function that takes another function as aparameter

function calProfit(buyingPrice){
let sellingPrice = 100000
profit = sellingPrice - buyingPrice;
return profit
}

function displayProfit(name, buyingPrice){
    let profit = calProfit(buyingPrice)
    message = "My profit is " + profit;
    console.log(message)
}

//fuction call
displayProfit("sophie", 50000)

//A forloop to print i love uganda

let country = 20;

for(let  num = 1; num < country; num++){
    console.log("I LOVE UGANDA")
}

//Arrow function with two variables

let add = (x , y) => x + y;

console.log(add(10, 20));

console.log(typeof add);



