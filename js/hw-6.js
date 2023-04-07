// Практика 1

// const newspaper = {
// 	sports: {
// 		title: 'ARod Hits Home Run',
// 		writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
// 	},
// 	business: {
// 		title: 'GE Stock Dips Again',
// 		writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
// 	},
// 	movies: {
// 		title: 'Superman Is A Flop',
// 		writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
// 	},
// }




// ================================ДОМАШНЯЯ РАБОТА=====================================

// ----------Задание 1 -------------

// let numbers = [1, 5, 4, 10, 0, 3]

// for (let item of numbers) {
// 	if (item === 10) {
// 		console.log(item);
// 		break;
// 	} else {
// 		console.log(item);
// 	}
// }


// ----------Задание 2 -------------

// let numbers = [1, 5, 4, 10, 0, 3]

// numbers.forEach((el, index) => {
// 	if (el === 4) {
// 		console.log(`У числа ` + (el) + ` позиция ${index}`)
// 	};
// });


// ----------Задание 3 -------------

// let numbers = [1, 3, 5, 10, 20]
// numbers = numbers.join(' ')
// console.log(numbers);


// ----------Задание 4 -------------

// let allNumbers = [];
// for (let i = 0; i < 3; i++) {
// 	allNumbers.push([]);
// 	for (let j = 0; j < 3; j++) {
// 		allNumbers[i].push(1);
// 	}
// }
// console.log(allNumbers);


// ----------Задание 5 -------------

// let numbers = [1, 1, 1]
// numbers.push(2, 2, 2);
// console.log(numbers);


// ----------Задание 6 -------------

// let numbers = [9, 8, 7, 'a', 6, 5]
// numbers = numbers.sort();
// numbers.pop();
// console.log(numbers);


// ----------Задание 7 -------------

// let numbers = [9, 8, 7, 6, 5]
// let num = Number(prompt("Введите число от 1 до 10"));
// let search = numbers.includes(num);
// if (search) {
// 	console.log("Такое число содержится в массиве");
// } else {
// 	console.log("Нет такого числа");
// };


// ----------Задание 8 -------------

// let line = 'abcdef';
// let arr = line.split('');
// arr = arr.reverse();
// arr = arr.join('');
// console.log(arr);
// console.log(typeof arr);


// ----------Задание 9 -------------

// let numbers = [
// 	[1, 2, 3,],
// 	[4, 5, 6]
// ];

// let allNumbers = [];
// for (let i = 0; i < numbers.length; i++) {			// перебор массива numbers
// 	for (let j = 0; j < numbers[0].length; j++) {	// перебор подмассивов
// 		allNumbers.push(numbers[i][j]);
// 	}
// }
// console.log(allNumbers);


// ----------Задание 10 -------------

// let numbers = [3, 9, 8, 1, 7, 4, 4, 6, 1, 5]		// 10 элементов

// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[++i]) {
// 		i--;
// 		let sum = numbers[i] + numbers[++i];
// 		console.log(sum);
// 		i--;
// 	} else {
// 		break;
// 	}
// }


// ----------Задание 11 -------------

// let numbers = [3, 9, 8, 1, 4, 6, 5]
// let squareNumbers = numbers.map(item => (item ** 2));
// console.log(squareNumbers);


// ----------Задание 12 -------------

// let words = [
// 	'Создайте',
// 	'',
// 	'функцию',
// 	'которая принимае',
// 	'массив',
// 	'строк',
// ]
// let sumSymbol;

// function countingSymbol() {
// 	let wordsSplit = words.map(item => (item.split('')));
// 	sumSymbol = wordsSplit.map(el => el.length);
// 	return sumSymbol;
// };

// countingSymbol(words);
// console.log(sumSymbol);


// ----------Задание 13 -------------

// let numbers = [3, -2, 8, 1, -4, 6, 5];
// let negative;

// function negativeValues() {
// 	negative = numbers.filter(el => el < 0);
// 	return negative;
// };

// negativeValues(numbers);
// console.log(negative);


// ----------Задание 14 -------------

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomNumbers = [];

// for (let i = 0; i < 10; i++) {
// 	randomNumbers.push(getRandomInt(1, 10));
// }

// const evenValues = randomNumbers.filter(el => el % 2 === 0);

// console.log(randomNumbers);
// console.log(evenValues);


// ----------Задание 15 -------------
// let i = 0;
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomNumbers = [];

// for (; i < 6; i++) {
// 	randomNumbers.push(getRandomInt(1, 10));
// }

// const sum = randomNumbers.reduce((a, b) => a + b);
// const averageValue = (sum / i);

// console.log(randomNumbers);
// console.log(`Сумма всех чисел равна ${sum}`);
// console.log(`Среднее значение ${averageValue}`);