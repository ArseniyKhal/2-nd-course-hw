// ================================ДОМАШНЯЯ РАБОТА=====================================

// ----------Задание 1 -------------

const getResult = (array, callback) => {
	return callback(array);
}

const sum = (arr) => {
	let reduceSum = arr.reduce(function (previousValue, item) {
		return item + previousValue;
	});
	console.log(reduceSum);
}

const mult = (arr) => {
	let reduceMult = arr.reduce(function (previousValue, item) {
		return item * previousValue;
	});
	console.log(reduceMult);
}

getResult([3, 4, 1, 9], sum);
//getResult([3, 4, 1, 9], mult);


// ----------Задание 2 -------------

// const users = [
// 	{ name: 'Jon', age: 22 },
// 	{ name: 'Richard', age: 18 },
// 	{ name: 'Anton', age: 32 },
// 	{ name: 'Lida', age: 23 },
// 	{ name: 'Bob', age: 44 }
// ];

// const getSortedArrayObj = (Obj) => {
// 	Obj.sort(compareUser);
// 	console.log(Obj);
// }

// function compareUser(a, b) {
// 	if (a.age > b.age) return 1;
// 	if (a.age < b.age) return -1;
// 	return 0;
// }

// getSortedArrayObj(users);


// ----------Задание 3 -------------

// const each = (arr, callback) => {
// 	console.log(callback(arr));
// 	return callback(arr);
// }

// const reversArr = (arr) => {
// 	return arr.reverse();
// };

// const toNumberArr = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (isNaN(Number(arr[i]))) {
// 			arr.splice(i, 1);
// 		} else {
// 			arr[i] = Number(arr[i]);
// 		};
// 	};
// 	return arr;
// }

// const arr = [1, '4', false, 9, 'two'];
// // const arr = [1, '4', 9, 'two'];
// // each(arr, reversArr); // ['two', 9, '4', 1]
// each(arr, toNumberArr); // [1, 4, 0, 9]


// ----------Задание 4 -------------

// const timer = (deadline) => {
// 	const interval = setInterval(() => {
// 		console.log(new Date());
// 	}, 3000);

// 	setTimeout(() => {
// 		clearInterval(interval);
// 		console.log('30 секунд прошло')
// 	}, deadline * 1000)
// };

// timer(30);


// ----------Задание 5 -------------

// function calling() {
// 	console.log('Звоню!');
// 	beeps()
// };

// function beeps() {
// 	setTimeout(() => {
// 		console.log('Идут гудки...');
// 		talk();
// 	}, 1000);
// }

// function talk() {
// 	console.log('Разговор')
// }

// calling();
// //beeps();
// //talk();