//Взять из localStorage и отрисовать его на странице списком
let sadness = JSON.parse(localStorage.getItem(key="original"));
console.log(sadness)

for(i = 0; i < sadness.length; i){
    let something = document.createElement("li")
    something.textContent = 
}

//console.log(localStorage.getItem(key="original", JSON.stringify(todoArray)));