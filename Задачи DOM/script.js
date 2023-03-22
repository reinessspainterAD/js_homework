//1. Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c
//текстом "Привет Мир!"
let btn = document.querySelector(".btn");
function sayHello(){
  alert("Привет Мир!");
}
btn.addEventListener("click", sayHello);
  
  //2. Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике
  //на кнопку, заполняем инпут текстом "test@email.ru"*/
  let input1 = document.getElementById("input1");
  let inpbtn1 = document.querySelector(".inpbtn1")
  function insertInput(){
    input1.value = "test@email.com";
  };
  inpbtn1.addEventListener("click", insertInput)
  
  // 3. Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при
  // нажатии на кнопку, выводится алерт с текстом "Вы ввели 'текст инпута'"
  // или "Вы ничего не ввели в поле".
  let input2 = document.getElementById("input2");
  let inpbtn2 = document.querySelector(".inpbtn2")
  function checkingForInput(){
    if(input2.value == ""){
      alert("Вы ничего не ввели в поле");
    } else{
      alert(`Вы ввели: ${input2.value}`);
    }
  }
  inpbtn2.addEventListener("click", checkingForInput);
  
  // 4. Выводим кнопку с текстом "Поменять" и два инпута, при клике на кнопку
  // инпуты меняются своим введеным текстом
  let buttonFor4Ex = document.querySelector(".buttonFor4Ex")
  function changingInputs(){
    let first = document.querySelector(".firstInputToChange");
    let second = document.querySelector(".secondInputToChange");
    let clear = first.value;
    first.value = second.value;
    second.value = clear;
  }
  buttonFor4Ex.addEventListener("click", changingInputs);
  
  // 5. Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из
  // них блокирует инпут с помощью атрибута disabled, а другая разблокирует
  array = ["ban", "unBan"];
  let block = document.getElementById("disabled");
  
  array.forEach((element) =>
    document.getElementById(element).addEventListener("click", () => {
      element === array[0]
        ? (block.disabled = true)
        : block.removeAttribute("disabled");
    })
  );
  // 6. Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем
  // на скрыть, квадрат исчезает и текст кнопки меняется на "показать
  // квадрат" и так можно кликать сколько угодно раз.
  let square = document.querySelector(".square");
  let squarebutton = document.getElementById("squarebutton");
  document.getElementById("squarebutton").addEventListener("click", () => {
    if (squarebutton.innerHTML == "Скрыть квадрат") {
      square.style.cssText = "display: none;";
      squarebutton.innerHTML = "Показать квадрат";
    } else {
      square.style.cssText = "display: block;";
      squarebutton.innerHTML = "Скрыть квадрат";
    }
  });
  // 7. Выводим красный квадрат, при наведении на него он становиться
  // зеленым, а когда уводим курсор от него, обратно красным.
  eventarray = ["mouseover", "mouseleave"];
  let color = document.querySelector(".squarecolor");
  eventarray.forEach((element) =>
    color.addEventListener(element, () => {
      element == eventarray[0]
        ? (color.style.cssText = "background: #008000;")
        : (color.style.cssText = "background: #FF0000;");
    })
  );
  
  // 8. Вывести 4 красных квадрата, при клике на любой, он становиться
  // зеленым, при этом если есть уже зеленый квадрат, то он становиться
  // обратно красным и так можно кликать на любой квадрат, он становиться
  // зеленым, а старый зеленый квадрат обратно крассным и тд. (Сделать
  // задачу так, чтобы можно было добавить ещё хоть 100 квадратов при этом
  // скрипт не надо менять).

  
  let eight = document.querySelectorAll(".squareID");
  eight.forEach(element => element.addEventListener("click", () => {
    eight.forEach(element => {
      element.style.cssText = "background: red;"
    })
    element.style.cssText = "background: green;"
  }));
  
