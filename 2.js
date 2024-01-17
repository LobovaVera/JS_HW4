"use strict";

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/


const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = [...arr.splice(0, 2), 100, ...arr.splice(3, 2)];
console.log(newArr);