"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/
//создаем новый массив случайных чисел
const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 10));
}
console.log(arr)
//1
console.log(arr.reduce((sum, num) => { return num + sum }, 0));
//2
/**
 * Получаем минимальное значение массива
 * @param {array} array - массив чисел на проверку
 * @returns {number} - минимальное значение массива
 */
function getMinValue(array) {
    let min = array[0];
    for (let k = 1; k < array.length; k++) {
        if (array[k] < min) {
            min = array[k];
        }
    }
    return min;
}

console.log(getMinValue(arr));
//3
/**
 * Создает новый массив, содержащий индексы вхоодного массива, в которых значение равно number 
 * @param {array} array 
 * @param {number} number 
 * @returns новый массив, содержащий индексы входного массива
 */
function getNumberIndexNewArray(array, number = 3) {
    const resArr = [];
    for (let j = 0; j < array.length; j++) {
        if (array[j] === number) {
            resArr.push(j);
        }
    }
    return resArr;
}
// const arri = [2, 3, 4, 5, 3, 4, 3, 3, 3];
console.log(getNumberIndexNewArray(arr, 3));