"Use strict";
const someArray = [1, 2, 3, 4, 5, 1, 2, 3, 7, 8, 9];

function removeDuplicates(arr){
    let result = arr.filter(function(item, index, array){
        return array.indexOf(item) === index;
    });
    return result
}
console.log(removeDuplicates(someArray))