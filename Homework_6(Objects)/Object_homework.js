/*1 Задание*/
let user = {
    name: "John",
    surname: "Smith",
};
user.name = "Pete";
delete user.name;
console.log(user);

/*2 Задание*/
let object = {
    "Коля": "1000" , "Вася": "500" , "Петя": "200" 
};
console.log(object["Коля"]);

/*2.1 Задание*/
const array =[
    {
        name: "Коля",
        age: 12,
    },
    {
        name: "Петя",
        age: 13
    },
];
function test(_array){
    const clearArray = [];
    for(let i = 0; i < _array.length; i++){
        clearArray.push(`${_array[i].name} ${_array[i].age} лет`);
    }
    return clearArray;
}
console.log(test(array));

/*3 Задание*/
let userS = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    },
];
let lol;
for(let i = 0; i < userS.length; i++){
    userS[i].name == "Bob" ? (lol = userS[i].name) : null;
    userS[i].name == "Anna" ? delete userS[i] : null;
}
console.log(lol, userS[0], userS[1], userS[2]);

/*4 Задание*/
n1 = "Juan"
n2 = "Horseman"
let main = {
    name: n1,
    surname: n2,
    hi: function(){
        console.log(main.name, main.surname);
    },
    sHi: function(){
        console.log(`My name is ${main.name} ${main.surname}`);
        delete this.hi;
    }
}  
main.sHi();

/*5 Задание*/
let firstNum = 12;
let secondNum = 30;
calculator = {
    fNum: firstNum,
    sNum: secondNum,
    sum: function(){
        return console.log(this.fNum + this.sNum)
    },
    mul: function(){
        return console.log(this.fNum * this.sNum)
    }
}
calculator.mul()

/*6 Задание*/
let temporary = 0;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

for(let summ in salaries){
    temporary += salaries[summ];
}
let sum = temporary;
console.log(sum);

/*7 Задание*/
let user3 = {
    name: "John",
    age: 30
};
if (user3.hasOwnProperty('age')) {
    console.log("Объект не пустой и в нём есть ключ age");
}

/*9 Задание*/
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number'){
            obj[key] *= 2;    
        }
    }
}
multiplyNumeric(menu);
console.log(menu);