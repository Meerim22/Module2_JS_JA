let options = {
	width:  400,
	height: 500,
};

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }
// let w = options.width;
// let h = options.height;

let {color: c = 'black', width: w, height: h} = options;

console.log(c); // Вывело black
console.log(w); // Вывело 400
console.log(h); // Вывело 500