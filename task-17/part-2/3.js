let options = {
	width:  400,
	height: 500,
};

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }
// let width  = options.width;
// let height = options.height;

let {color = 'black', width, height} = options;

console.log(color); // Вывело black
console.log(width); // Вывело 400
console.log(height); // Вывело 500