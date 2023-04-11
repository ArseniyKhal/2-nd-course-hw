// ================================ДОМАШНЯЯ РАБОТА=====================================

// ----------Задание 1 -------------

// const str = 'js'
// console.log(str.toUpperCase());


// ----------Задание 2 -------------

// const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция', 'Сервелат Московский', 'Сгущённое молоко'];
// const search = 'молоко';
// const result = [];

// products.forEach((product) => {
// 	if (product.toLowerCase().includes(search.toLowerCase())) {
// 		result.push(product);
// 	}
// });
// console.log(result);


// ----------Задание 3 -------------

// let num = 32.58884;
// console.log(num);
// console.log('До меньшего целого: ' + Math.floor(num));
// console.log('До большего целого: ' + Math.ceil(num));
// console.log('До ближайшего целого: ' + Math.round(num));


// ----------Задание 4 -------------

// let nums = [52, 53, 49, 77, 21, 32];
// console.log('Наименьшее число: ' + Math.min.apply(null, nums));
// console.log('Наибольшее число: ' + Math.max.apply(null, nums));


// ----------Задание 5 -------------

// function getRandomInt() {
// 	console.log(Math.round(Math.random() * 10))
// };
// getRandomInt();


// ----------Задание 6 -------------

// let arrayOfNumbers = [];

// function getRandomInt(num) {
// 	for (let i = 0; i < num / 2; i++) {
// 		arrayOfNumbers.push(Math.round(Math.random() * num))
// 	}
// };

// getRandomInt(8);
// console.log(arrayOfNumbers);


// ----------Задание 7 -------------

// function getRandomInt(minValue, maxValue) {
// 	return Math.round(Math.random() * (maxValue - minValue) + minValue);
// };

// console.log(getRandomInt(15, 5));


// ----------Задание 8 -------------

// let currentDate = new Date();
// console.log(currentDate);


// ----------Задание 9 -------------

// let currentDate = new Date();
// console.log('Текущая дата: ' + currentDate);
// currentDate.setDate(currentDate.getDate() + 73);
// console.log('Дата через 73 дня: ' + currentDate);


// ----------Задание 10 -------------

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();

// function convertDate() {
// 	let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] +
// 		" " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
// 	let timeDate = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()
// 	console.log(fullDate);
// 	console.log(timeDate);
// };
// convertDate(myDate);


// ----------Задание 11 -------------
//..в файле main.js