// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере.

let message = '1) Hello JS!';
alert(message);


// 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. 
//    Затем замените значение переменной другим сообщением и выведите новое сообщение.

let ambiguous;
ambiguous = '2) a. Water wears away the stone.';
alert(ambiguous);
ambiguous = '2) b. Still waters are deep.';
alert(ambiguous);


// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.

let myName = 'Meerim Jutankeeva';
let myEmail = 'meerim.jutankeeva.kk@gmail.com';
alert(`3) My name is ${myName}`);
alert(`3) My email is ${myEmail}`);


// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. 
//    Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

const souvenir = 75;
const trinkets = 112;
let souvenirAmount = prompt('How many souvenirs do you need?', '1');
let trinketsAmount = prompt('How many trinkets do you need?', '1');
alert(`4) Total weight: ${souvenir * souvenirAmount + trinkets * trinketsAmount} гр`)


// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 

let a = prompt('5) Enter the first number', '2');
let b = prompt('5) Enter the second number', '2');
// - сумма a и b; 
alert(`5) Sum of a and b: ${a + b}`);
// - разница между a и b;
alert(`5) Difference between a and b: ${a - b}`);
// - произведение a и b;
alert(`5) Product of a and b: ${a * b}`);
// - частное от деления a на b; 
alert(`5) Quotient of dividing a by b: ${a / b}`);
// - остаток от деления a на b; 
alert(`5) Remainder of dividing a by b: ${a % b}`);
// - результат возведения числа a в степень b
alert(`5) The result of raising the number a to the power b: ${a ** b}`);