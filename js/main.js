// ----------играем во Времена года -------------

function seasons() {
	let season;
	const monthNumber = Number(prompt("введи номер месяца"));
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


// ----------играем в Запомни слова -------------

function memorizeWords() {
	let regexp = /^[а-яА-Я]*$/;
	let firstEl;
	let secondEl;
	let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	fruits = fruits.sort(() => Math.random() - 0.5);
	alert(fruits);

	console.log(fruits[0]);//подсказка
	console.log(fruits[fruits.length - 1]);//подсказка

	firstEl = prompt('Чему равнялся первый элемент массива?');
	if (regexp.test(firstEl)) {
		secondEl = prompt('Чему равнялся последний элемент массива?');
		if (regexp.test(secondEl)) {
			if (firstEl.toLowerCase() === fruits[0].toLowerCase() && secondEl.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
				alert('Молодец, угадал!')
			} else if (firstEl.toLowerCase() === fruits[0].toLowerCase() || secondEl.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
				alert('Вы были близки к победе!')
			} else {
				alert('Вы не угадал ни одного элемента.\nПопробуй еще раз')
			}
		} else {
			alert('Введены некорректные символы');
		}
	} else {
		alert('Введены некорректные символы');
	}
};