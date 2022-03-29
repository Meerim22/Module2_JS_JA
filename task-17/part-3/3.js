func( ['Иван', 'Иванов', 'отдел разработки'] );

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
	
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

function func([name, surname, department, position = 'джуниор', salary]) {
    console.log(name);  // Вывело Иван
    console.log(surname);  // Вывело Иванов
    console.log(department); // Вывело отдел разработки
    console.log(position);  // Вывело джуниор
    console.log(salary);  // Вывело undefined
}