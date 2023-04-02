let min = Math.ceil(1);
let max = Math.floor(50);
let number = Math.floor(Math.random() * (max - min)) + min;
console.log(number);

let isGuessing = true;

function startGame(){
    while(isGuessing){
        let userNumber = prompt(`Давайте сыграем в игру, я загадываю число - вы отгадываете.
        Число уже загадано, введите ваш ответ: `);
        console.log(typeof(parseInt(userNumber)));

        if(isNaN(userNumber)){
            alert("Пожалуйста, введите ваш ответ: ");
            continue
        }
        if(userNumber === null){
            alert("Всего хорошего;)");
            break;
        }
        if(parseInt(userNumber) === number){
            alert("Вы победили!!");
            break;
        }else if(userNumber < number){
            alert("Больше!");
        }else if(userNumber > number){
            alert("Меньше!");
        }
    }
}
startGame();