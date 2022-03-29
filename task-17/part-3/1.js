func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }

function func([name, surname, department, position, salary]) {
    console.log(name);  // Вывело Иван
    console.log(surname);  // Вывело Иванов
    console.log(department); // Вывело отдел разработки
    console.log(position);  // Вывело программист
    console.log(salary);  // Вывело 2000
}