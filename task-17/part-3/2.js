func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }

function func([name, surname, ...info]) {
    console.log(name);  // Вывело Иван
    console.log(surname);  // Вывело Иванов
    console.log(info); // Вывело (3) ['отдел разработки', 'программист', 2000]
}