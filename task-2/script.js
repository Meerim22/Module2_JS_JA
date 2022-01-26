// // 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**

// let str1 = '1) aaa@bbb@ccc';
// alert(str1.replace(/@/g, '!'));


// // 2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.

// let str2 = '2) js';
// alert(str2.toUpperCase());


// // 3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.

// let str3 = '3) JS';
// alert(str3.toLowerCase());


// // 4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.

// let str4 = 'I am a hero!';
// alert(`4) Sentence "I am a hero!" has ${str4.length} characters`);


// // 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. 
// //    Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.

let creditCard = prompt('Your card number:', '1111222233334444');
alert(`Your card number: ${creditCard.slice(0, -4).replace(/(\d*)/, '************')}${creditCard.slice(-4)}`);
