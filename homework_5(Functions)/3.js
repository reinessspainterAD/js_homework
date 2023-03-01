"Use strict";
const lameArray = [NaN, 0, 4545, false, -22, '', undefined, 47, null]
function remove(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isNaN(arr[i]) || arr[i] === 0 || arr[i] === false || arr[i] === "" || arr[i] === undefined || arr[i] === null) {
            arr.splice(i, 1);
        }
    }

    console.log(arr);
}

remove(lameArray);