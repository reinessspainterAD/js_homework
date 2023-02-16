"use strict";
let example = "Есть несколько товаров по $120 и $20 и $70 все они крутые";
const money = [];
for(let i = 0; i < example.length; i++){
    if(example[i] === "$"){
        money.push(example.slice(i + 1, example.indexOf(" ", i)));
    }
}
console.log(money);