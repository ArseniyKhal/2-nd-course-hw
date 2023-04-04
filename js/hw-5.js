// Практика 1
// const user = {
// 	name: "Вася",
// 	age: 5,
// 	city: "Комарово",
// 	getInfo() {
// 		return `Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`;
// 	}
// };
// console.log(user.getInfo());

// Практика 2
// function getRectangleArea() {
// 	result = (this.width * this.height);
// 	console.log(`Площадь прямоугольника равен ${result}`);
// }
// function getRectanglePerimeter() {
// 	result = ((this.width + this.height) * 2);
// 	console.log(`Периметр прямоугольника равен ${result}`);
// }

// const square1 = {
// 	width: 2,
// 	height: 3,
// 	getArea: getRectangleArea,
// 	getPerimeter: getRectanglePerimeter,
// }
// const square2 = {
// 	width: 1,
// 	height: 4,
// 	getArea: getRectangleArea,
// 	getPerimeter: getRectanglePerimeter,
// }

// square1.getArea();
// square1.getPerimeter();
// square2.getArea();
// square2.getPerimeter();




// ================================ДОМАШНЯЯ РАБОТА=====================================

// ----------Задание 1-------------

// function giveLowerNumber(a, b) {
// 	if (a < b) {
// 		console.log(`Меньшее число a`);
// 	} else {
// 		console.log(`Меньшее число b`);
// 	}
// };

// giveLowerNumber(8, 8);


// ----------Задание 2-------------

// function parity(num) {
// 	let result = (num % 2 === 0) ? `Число четное` : `Число не четное`;
// 	console.log(result);
// };

// parity(5);


// ----------Задание 3-------------

// let square = function (num) {
// 	console.log(num ** 2);
// 	return (num ** 2);
// };

// square(7);


// ----------Задание 4-------------

// function whoAreYou() {
// 	let age = prompt("Сколько вам лет?")
// 	if (age < 0) {
// 		console.log("Вы ввели неправильное значение");
// 	} else if (0 <= age && age <= 12) {
// 		console.log("Привет, друг!");
// 	} else {
// 		console.log("Добро пожаловать!");
// 	}
// }
// whoAreYou();


// ----------Задание 5-------------

// function multiply(m, n) {
// 	if (isNaN(m) || isNaN(n)) {
// 		console.log("Одно или оба значения не являются числом");
// 	} else {
// 		return m * n;
// 	}
// }
// let result = multiply(3, 7);
// console.log(result);


// ----------Задание 6-------------

// function numberInSquare(n) {
// 	if (isNaN(n)) {
// 		console.log("Переданный параметр не является числом");
// 	} else {
// 		console.log(`n в кубе равняется ${n ** 3}`);
// 	}
// };
// numberInSquare(3);


// ----------Задание 7-------------

// function getCircleArea() {
// 	return (3.14159265359 * this.radius ** 2)
// }
// function getCirclePerimeter() {
// 	return (3.14159265359 * this.radius * 2)
// }

// const circle1 = {
// 	radius: 3,
// 	getArea: getCircleArea,
// 	getPerimeter: getCirclePerimeter,
// }
// const circle2 = {
// 	radius: 5,
// 	getArea: getCircleArea,
// 	getPerimeter: getCirclePerimeter,
// }

// console.log(circle1.getArea());
// console.log(circle2.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getPerimeter());


// ----------Задание 8-------------
let monthNumber;

function seasons(monthNumber) {
	let season;
	monthNumber = Number(prompt("введи номер месяца"));
	if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
		season = "Зима";
	} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
		season = "Весна";
	} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
		season = "Лето";
	} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
		season = "Осень";
	} else {
		console.log("нет такого месяца");
	}
	console.log(season);
	return season;
}
