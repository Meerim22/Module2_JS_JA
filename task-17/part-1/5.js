// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }

let arr = ['Иван', 'Иванов', 'отдел разработки'];
let [name, surname, department, position = 'джуниор', salary] = arr;

console.log(name);  // Вывело Иван
console.log(surname);  // Вывело Иванов
console.log(department); // Вывело отдел разработки
console.log(position);  // Вывело джуниор
console.log(salary);  // Вывело undefined