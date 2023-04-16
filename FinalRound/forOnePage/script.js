//массив для local Storage, в который будут сохранятся объекты данных
let todoArray = [];
//Создание титульной части:
function createAppTitle(title){
    let appTitle = document.createElement("h1");
    appTitle.innerHTML = title;
    
    return appTitle
}
//Создание и возвращение формы для создания задачи
function createTodoForm(){
    //Создание основных элементов
    const form = document.createElement('form');
    const input = document.createElement('input');
    const addButton = document.createElement('button');
    const wrapper = document.createElement('div');
    //Задание 8.1
    //Блокировка кнопки при пустом инпуте
    addButton.disabled = !input.value.length;
    //Разблокировка кнопки при заполненом инпуте
    input.addEventListener('input', () => {
        addButton.disabled = !input.value.length;
    });

    //Назначение классов
    form.classList.add("task-form");
    input.classList.add("form-input");
    input.placeholder = 'Что у вас запланировано?';
    addButton.classList.add("form-btn");
    wrapper.classList.add("form-btnWrapper");
    addButton.textContent = 'Добавить дело';

    wrapper.append(addButton);
    form.append(input);
    form.append(wrapper);

    return {
        form,
        input,
        addButton,
    }

}

//Создание и возвращение списка для элементов
function createTodoList(){
    const list = document.createElement("ul");
    list.classList.add("listGroup");

    return list;
};

    
//Создание и возвращение элементов
function createTodoItem(name){
    const todoItem = document.createElement("li");
    const btnWrapper = document.createElement("div");
    const doneBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    //Создание id для объекта itemObj, теперь у каждого li есть id
    const randomId = Math.random() * 10.231;
    todoItem.id = randomId.toFixed(2);

    todoItem.classList.add("item-list");
    doneBtn.classList.add("done-button");
    deleteBtn.classList.add("delete-button");
    //Пункт списка = input.value
    todoItem.textContent = name;
    doneBtn.textContent = "Готово"
    deleteBtn.textContent = "Удалить"

    btnWrapper.append(doneBtn, deleteBtn);
    todoItem.append(btnWrapper);


    return{
        todoItem,
        doneBtn,
        deleteBtn,
        btnWrapper,
    }
};

function changeItemDone(arr, item){
    //map принимает первым аргументом элемент массива, но так как массив состоит из элементов
    //, явл. объектами- пишем obj(просто название, ведь мы знаем, что это объект)
    arr.map(obj => {
        if(obj.id === item.id && obj.done === false){
            obj.done = true
        } else if (obj.id === item.id && obj.done === true){
            obj.done = false
        }
    })
}

//Кнопки
//"Готово"
function doneTodoItem(item, btn){
    btn.addEventListener("click", () =>{
        //Получаем то, что уже находится в localStorage
        todoArray = JSON.parse(localStorage.getItem(key));
        item.classList.toggle("item-success");
        //Меняем состояние done в объекте
        changeItemDone(todoArray, item);
        //Отправляем обратно
        localStorage.setItem(key, JSON.stringify(todoArray));

    })
}

//"Удалить"
function deleteTodoItem(item, btn){
    btn.addEventListener("click", () =>{
        if(confirm("Серьёзно?")){
            todoArray = JSON.parse(localStorage.getItem(key));
            //Новый, отфильтрованный массив с удалёнными элементами
            const neaList = todoArray.filter(obj => obj.id != item.id);
            localStorage.setItem(key, JSON.stringify(neaList));
            item.remove();
        }
    })
}

//Функция для создания приложения
function createTodoApp(container, title, key){
    const appTitle = createAppTitle(title);
    const appForm = createTodoForm();
    const appList = createTodoList();

    container.append(appTitle, appForm.form, appList);

    //Отображение дел из localStorage
    if(localStorage.getItem(key)){
        todoArray = JSON.parse(localStorage.getItem(key))

        for (const obj of todoArray){
            const todoItem = createTodoItem(appForm.input.value);

            todoItem.todoItem.textContent = obj.name;
            todoItem.todoItem.id = obj.id;

            if(obj.done == true){
                todoItem.todoItem.classList.add("success");
            }else{
                todoItem.todoItem.classList.remove("success");
            }
            doneTodoItem(todoItem.todoItem, todoItem.doneBtn);
            deleteTodoItem(todoItem.todoItem, todoItem.deleteBtn);

            appList.append(todoItem.todoItem);
            todoItem.todoItem.append(todoItem.btnWrapper);
        }
    }
    appForm.form.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoItem = createTodoItem(appForm.input.value);

        if(!appForm.input.value){
            return;
        }

        doneTodoItem(todoItem.todoItem, todoItem.doneBtn);
        deleteTodoItem(todoItem.todoItem, todoItem.deleteBtn);

        //Проверка на наличие в localstorage нового добавляёмого дела
        let localStorageData = localStorage.getItem(key);
        if(localStorageData == null){
            todoArray = [];
        }else{
            //Если localstorage не пустой, то будем присваивать его todoArray
            todoArray = JSON.parse(localStorageData);
        }

        //Функция создающая объекты для массива localStorage, принимает массив
        function createItemObj(arr){
            const itemObj = {
                name: appForm.input.value,
                //id Нужен для точного обращения к выбранному делу и его удалению
                id: todoItem.todoItem.id,
                done: false,  
            };
            arr.push(itemObj);
        };
        //Вызов функции, сохранение в local Storage
        //key - это элемент сохраняемый в localStorage(application)
        //передаём его будем в функцию по отрисовке страницы.
        createItemObj(todoArray)
        
        localStorage.setItem(key, JSON.stringify(todoArray));

        appList.append(todoItem.todoItem);
        //Очистка input после ввода
        appForm.input.value = '';
        //Задание 8.1
        //Блокировка после ввода input
        appForm.addButton.disabled = !appForm.addButton.disabled;
    });
}

//Отрисовка на странице
document.addEventListener("DOMContentLoaded", () =>{
    createTodoApp(document.getElementById("original"), "For Me", key= "original");
})   


//console.log(localStorage.getItem(key="original", JSON.stringify(todoArray)));
