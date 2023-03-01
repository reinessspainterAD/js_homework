"Use strict";

function stateOfAge(num){
    if(num > 0 && num <= 17){
        console.log(num, "- ребёнок");
    }if(num >= 18 && num <= 30){
        console.log(num, "- молодой");
    }if(num >= 30 && num <= 55){
        console.log(num, "- зрелый");
    }if(num >= 55){
        console.log(num, "- старый");
    }
}
stateOfAge(100)