//Задание 1
// let twoHi = 0;
// while (twoHi < 2) {
// 	console.log("Привет");
// 	twoHi++;
// }

//Задание 2
// let numbers = 1;
// while (numbers <= 5) {
// 	console.log(numbers);
// 	numbers++;
// }

//Задание 3
// let Numbers = 7;
// while (numbers <= 22) {
// 	console.log(Numbers);
// 	Numbers++;
// }

//Задание 4
// const obj = {
// 	'Коля': '200',
// 	'Вася': '300',
// 	'Петя': '400',
// };
// for (key in obj) {
// 	if (obj[key]) {
// 		console.log(`${key} - зарплата ${obj[key]} долларов.`);
// 	}
// }

//Задание 5
// let n = 1000;
// let num = 0;
// do {
// 	(n = n / 2);
// 	num++;
// 	console.log(n);
// 	console.log(num);
// } while (n > 50);
// if (n < 50) {
// 	console.log(`В результате получится число ${n}\nБудет произведено ${num} итераций`);
// }

//Задание 6
let fridayNumber = 3; //номер первой пятницы месяца (число от 1 до 7)
for (fridayNumber; fridayNumber <= 31; fridayNumber = fridayNumber + 7) {
	console.log(`Сегодня пятница, ${fridayNumber}-е число. Необходимо подготовить отчет.`);
}





