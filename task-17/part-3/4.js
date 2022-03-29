func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );

// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
	
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }

function func(department, [name, surname], [year, month, day]) {
    console.log(department); // Вывело отдел разработки
    console.log(name);  // Вывело Иван
    console.log(surname);  // Вывело Иванов
    console.log(year);  // Вывело 2018
    console.log(month);  // Вывело 12
    console.log(day);  // Вывело 31
}