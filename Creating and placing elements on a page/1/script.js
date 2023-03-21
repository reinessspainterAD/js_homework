const values = [
    { value: '1', label: "Информатика"},
    { value: '2', label: "Русский язык"},
    { value: '3', label: "Математика"},
    { value: '4', label: "Физическая культура"},
    { value: '5', label: "Химия"}
]
let chosenIndex = 0;

function createList(values, selectValue){
    const select = document.createElement("select");
    document.body.append(select);
    for(j = 0; j < values.length; j++){
        const option = document.createElement("option");
        select.append(option);
        option.value = values[j].value;
        option.textContent = values[j].label;
        (values[j].value === selectValue) ? chosenIndex = j : null;
        select.appendChild(option);
    }
    select.chosenIndex = chosenIndex;
    return select;
}
createList(values, "5")
