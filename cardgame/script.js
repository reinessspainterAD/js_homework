const cards = document.querySelectorAll('.memory-card');
const gameOver = document.querySelector(".gameOver");

//для проверки были ли перевёрнуты карты
let hasFlippedCard = false;
//для ограничения переворота больше одной пары карт
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //Отвечает за состояние поворота
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    //Вводим условие, чтобы при при нажатии на одну и ту же карточку два раза
    //игра не продолжалась
    if (this === firstCard) return;
    //предотвращает переворот других карточек до того как две карты будут спрятаны или совпадут
    if (lockBoard) return;

    secondCard = this;
    lockBoard = true;

    

    checkForMatch();

    //Кнопка gameOver 
    if (document.querySelectorAll(".memory-card").length == document.querySelectorAll(".memory-card.flip").length){
        
        gameOver.style.visibility = "visible";
        gameOver.addEventListener("click", () =>{
            window.location.reload();
        });
    };
};

//Проверяет карточки на на совпвдение
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

//Отменяет переворот карточек если они угаданы верно
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}


//Переворачивает карточки если они угаданы неверно
function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1000);
}

//Обнуляем firstCard и secondCard после каждого раунда
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//перемешивание карт
//Когда у контейнера есть свойство display: flex, его элементы упорядочиваются по номеру группы
//Каждая группа определяется свойством order, которое содержит целое число.
//По умолчанию свойство order каждого flex-элемента имеет значение 0. Если групп больше одной, элементы 
//упорядочиваются по возрастанию порядка группы. Генерируем случ. число до 16 и присваиваем его свойству order
(function shuffle() {
    cards.forEach(card => {
        let ramdomPosition = Math.floor(Math.random() * 16);
        card.style.order = ramdomPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));