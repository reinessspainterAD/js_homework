"use strict";
const arr = [10,4,445,3];

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j]
    arr[j] = tmp;
}
if (arr[0] > arr[3]) {
    swap(arr, 0, 3);
}
if (arr[1] > arr[3]) {
    swap(arr, 1, 3);
}
if (arr[2] > arr[3]) {
    swap(arr, 2, 3);
}
if (arr[0] > arr[2]) {
    swap(arr, 0, 2);
}
if (arr[1] > arr[2]) {
    swap(arr, 1, 2);
}
if (arr[0] > arr[1]) {
    swap(arr, 0, 1);
}
console.log(arr);