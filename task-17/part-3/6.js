func( {width: 400, height: 500} );

// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
	
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

function func({width, height, color = 'black'}) {
    console.log(width);  // Вывело 400
    console.log(height); // Вывело 500
    console.log(color);  // Вывело black
}