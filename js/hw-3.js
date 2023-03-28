//Задание 1
// let password = '123456';
// let enteredPas = prompt("Введите пароль");
// if (enteredPas === password) { console.log("Пароль введен верно"); }
// else { console.log("Пароль введен неправильно"); }

//Задание 2
// let c = prompt("введи число");
// if (c > 0 && c < 10) { console.log("Верно"); }
// else { console.log("Неверно"); }

//Задание 3
// let d = prompt("введи первое число");
// let e = prompt("введи второе число");
// if (d > 100 || e > 100) { console.log("верно") }
// else { console.log("не верно"); }

//Задание 4
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

//Задание 5
// let monthNumber = Number(prompt("введи номер месяца"));
// switch (monthNumber) {
// 	case 12:
// 	case 1:
// 	case 2: console.log("Зима"); break;
// 	case 3:
// 	case 4:
// 	case 5: console.log("Весна"); break;
// 	case 6:
// 	case 7:
// 	case 8: console.log("Лето"); break;
// 	case 9:
// 	case 10:
// 	case 11: console.log("Осень"); break;
// 	default: console.log("нет такого месяца"); break;
// }

//Задание 7
// let someNumber = prompt("Пожалуйста, введите любое число");
// if (isNaN(someNumber)) {
// 	alert("это не число");
// } else {
// 	// Проверка на четность
// 	if ((someNumber % 2) === 0) { alert("Число четное"); }
// 	else { alert("Число не четное") };
// }

//Задание 8 && 9
const clientOS = Number(prompt("Какая у вас установлена ОС?\n(введите 0 если iOS, введите 1 если Android"));
if (isNaN(clientOS)) {
	alert("это не число");
} else if (clientOS > 1 || clientOS < 0) {
	alert("это не 0 или 1");
} else {
	const clientDeviceYear = Number(prompt("Какой год выпуска вашего телефона?"));
	if (isNaN(clientDeviceYear)) {
		alert("введи год выпуска нормально");
	} else if (clientOS === 0 && clientDeviceYear >= 2015) {
		console.log("Установите версию приложения для iOS по ссылке");
	} else if (clientOS === 0 && clientDeviceYear < 2015) {
		console.log("Установите облегченную версию приложения для iOS по ссылке");
	} else if (clientOS === 1 && clientDeviceYear >= 2015) {
		console.log("Установите версию приложения для Android по ссылке");
	} else {
		console.log("Установите облегченную версию приложения для Android по ссылке");
	}
}
