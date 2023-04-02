//Доделать сохранение ЗАДАЧ!!!!!

window.addEventListener("load", () =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listElement = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        const task = input.value;
        if(!task){
            alert("Пожалуйста напишите себе задачу")
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        taskContentElement = document.createElement("div");
        taskContentElement.classList.add("content")

        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");
        taskInputElement.type = "text"
        taskInputElement.value = task;
        taskInputElement.setAttribute("readonly", "readonly")

        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("actions")

        const taskEditElement = document.createElement("button");
        taskEditElement.classList.add("edit");
        taskEditElement.innerHTML = "Изменить";

        const taskDeleteElement = document.createElement("button");
        taskDeleteElement.classList.add("delete");
        taskDeleteElement.innerHTML = "Удалить";

        taskActionsElement.appendChild(taskEditElement);
        taskActionsElement.appendChild(taskDeleteElement);

        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);

        input.value = "";

        taskEditElement.addEventListener("click", () =>{
            if(taskEditElement.innerText.toLowerCase() == "изменить"){
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                taskEditElement.innerHTML = "Сохранить";
            }else{
                taskInputElement.setAttribute("readonly", "readonly");
                taskEditElement.innerText = "Изменить";
            }
        })

        taskDeleteElement.addEventListener("click", () =>{
            listElement.removeChild(taskElement);
        });
    });
});