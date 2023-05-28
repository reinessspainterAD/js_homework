(function() {
    // создаем и возвращаем заголовок приложения
    function createAppTitle(title){
       let appTitle = document.createElement('h2');
       appTitle.innerHTML = title;
       return appTitle;
    }
    //создаем и возвращаем форму для создания дела
    function createTodoItemForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите новое дело';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        //Как это выглядит в HTML

        // <form class = "input-group', 'mb-3">
        //     <input class = "form-control" placeholder = "Введите новое дело">
        //         <div class="input-group-append">
        //             <button class="btn', 'btn-primary"> Добавить дело </button>
        //         </div>
        // </form>

        return {
            form,
            input,
            button,
        };
    }
    //создаем и возвращаем список элементов
    function createTodoList(){
        let  list  = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }
    // создаём и возвращаем элемент для списка дел
    function createTodoItem(name) {
        let  item = document.createElement('li');
        //кнопки перемещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавливаем стили для элемента списка, а также для размещения кнопок
        //в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        //приложению нужен доступ к самому элементу и кнопкам,
        // чтобы обрабатывать события нажатия
        let lll = document.querySelector(".list-group")
        lll.append(item)
        return {
            item,
            doneButton,
            deleteButton,
        }
    }
    ///ПОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА
    async function getTodoList(){
        const response = await fetch("http://localhost:3000/api/todos");
        //ДЕЙСТВИЕ ПРОДОЛЖАЕТСЯ ТОЛЬКО ЕСЛИ СТАТУС RESPONSE В ДИАПОЗОНЕ 200-299
        if(response.ok){
            const todoArray = await response.json();
            for(let i = 0; todoArray.length > i; i++){
                const todoItem = createTodoItem(todoArray[i].name);
                todoItem.item.id = todoArray[i].id
                
                if(todoArray[i].done){
                    todoItem.item.classList.add("list-group-item-success");
                }
                //////////////////////////////
                ///ИЗМЕНЕНИЕ ПАРАМЕТРА DONE 
                todoItem.doneButton.addEventListener("click", async function(){
                    const response = await fetch(`http://localhost:3000/api/todos/${todoItem.item.id}`,{
                        method: "PATCH",
                        body: JSON.stringify({
                            done: !todoItem.item.classList.contains("list-group-item-success"),
                        }),
                        headers:{
                            "Content-Type": "application/json",
                        },
                    });

                    if(response.ok){
                        todoItem.item.classList.toggle("list-group-item-success");
                    }
                });
                ///УДАЛЕНИЕ ЭЛЕМЕНТА С СЕРВЕРА И ИЗ СПИСКА
                todoItem.deleteButton.addEventListener("click", function(){
                    console.log(todoItem.item.id)
                    if(confirm("Вы уверены?")){
                        const response = fetch(` http://localhost:3000/api/todos/${todoItem.item.id}`,{
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body:{}
                        }).then(response => response.json());

                        //todoItem.item.remove();
                        if (response.ok){
                            todoItem.item.remove();
                        }
                    }
                });
                //Используется здесь и на 141 строке, создаётся на 135 строке, служит связью, чтобы можно было добавить новый элемент списка в todoList
                external.append(todoItem.item);
            } 
        }
    }

    let external;
    document.addEventListener('DOMContentLoaded', function (){
       let container = document.getElementById('todo-app');
       let todoAppTitle = createAppTitle('Список дел');
       let todoItemForm = createTodoItemForm();
       let todoList = createTodoList();
       external = todoList;
       // let todoItems = [createTodoItem('Сходить за хлебом'), createTodoItem('Купить молоко')];

       container.append(todoAppTitle);
       container.append(todoItemForm.form);
       container.append(todoList);

       getTodoList();
       // todoList.append(todoItems[0].item);
       // todoList.append(todoItems[1].item);

        //браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function (e) {
            //эта строчка необходима, чтобы предотвратить стандартное действие браузера
            //в этом случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();

            //игнорируем создание элемента, если пользователь ничего не ввёл в поле
            if (!todoItemForm.input.value) {
                return ;
            }

            // //создаём и добавляем в список новое дело из поля для ввода
            // todoList.append(createTodoItem(todoItemForm.input.value).item);

            /*let  todoItem = createTodoItem(todoItemForm.input.value);*/

            //ОТПРАВКА ДАННЫХ НА СЕРВЕР
            const response = fetch("http://localhost:3000/api/todos",{
                method:"POST",
                body: JSON.stringify({
                    name: todoItemForm.input.value,
                    owner: "Daniel",
                    done: false,
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            

            // добавляем обработчики на кнопки
            /*todoItem.doneButton.addEventListener('click',function (){
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function (){
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                }
            });*/

            //создаём и добавляем в список новое дело с название из поля для ввода
            /*todoList.append(todoItem.item);

            //обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';*/
        });
    });
})();