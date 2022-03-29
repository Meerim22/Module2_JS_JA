function getDay() {
    return (new Date).getDate();
}
function getMonth() {
    return (new Date).getMonth(); // начинается с 0 (январь) по 11 (декабрь)
}
function getYear() {
    return (new Date).getFullYear();
}

let arr = [2022];
let [year = getYear(), month = getMonth(), day = getDay()] = arr;

console.log(year);  // Вывело 2022
console.log(month);  // Вывело 2
console.log(day); // Вывело 29

// Cегодняшнее число 29.03.2022