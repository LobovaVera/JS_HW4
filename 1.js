"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

function showOddEven() {
    console.log(`0 – это ноль`);
    for (let i = 2; i < 11; i += 2) {
        console.log(`${i - 1} - нечетное число`);
        console.log(`${i} - четное число`);
    }
}
showOddEven();