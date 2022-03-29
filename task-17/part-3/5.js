func( {color: 'red', width: 400, height: 500} );

// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }

function func({color, width, height}) {
    console.log(color);  // Вывело red
    console.log(width);  // Вывело 400
    console.log(height); // Вывело 500
}