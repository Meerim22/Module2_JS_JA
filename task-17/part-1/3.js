// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let department = arr[2];
// let position   = arr[3];

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [,, department, position] = arr;

console.log(department); // Вывело отдел разработки
console.log(position);  // Вывело программист