const allButtons = document.querySelectorAll('.btn')
const currentScreen = document.querySelector('.screen-current')
const clear = document.querySelector('.btn-red')
const deleteBtn = document.querySelector('.btn-blue')
const addButton = document.querySelector('.btn-plus')
const equalBtn = document.querySelector('.equal')
const minus = document.querySelector('.minus')
const divide = document.querySelector('.divide')
const multiplication = document.querySelector('.multiplication ')

//czyszczenie calego currentscreen
clear.addEventListener('click', () => {
	currentScreen.textContent = ''
})
//usuwanie jednej cyfry w kalkulatorze
deleteBtn.addEventListener('click', () => {
	currentScreen.textContent = currentScreen.textContent.slice(0, -1)
})
//wyswietlanie cyfer w current screen
const displayCurrent = function (event) {
	const buttonText = event.target.textContent
	if (buttonText >= '0' && buttonText <= '9') {
		currentScreen.textContent += buttonText
	} else if (buttonText === '.' && !currentScreen.textContent.includes('.')) {
		currentScreen.textContent += buttonText
	}
}
//przefiltrowanie nodelist
allButtons.forEach(function (button) {
	button.addEventListener('click', displayCurrent)
})

let operator = ''

let firstNumber, secondNumber
// minus
minus.addEventListener('click', function () {
	firstNumber = Number(currentScreen.textContent)
	currentScreen.textContent = `${firstNumber} - `
	operator = 'minus'
})
// add
addButton.addEventListener('click', function () {
	firstNumber = Number(currentScreen.textContent)
	currentScreen.textContent = ''
	currentScreen.textContent = `${firstNumber} + `
	operator = 'add'
})

divide.addEventListener('click', function () {
	firstNumber = Number(currentScreen.textContent)
	currentScreen.textContent = `${firstNumber} ÷ `
	operator = 'divide'
})
multiplication.addEventListener('click', function () {
	firstNumber = Number(currentScreen.textContent)
	currentScreen.textContent = `${firstNumber} * `
	operator = 'multiplication'
})

equalBtn.addEventListener('click', function () {
	secondNumber = Number(currentScreen.textContent.split(' ')[2])
	currentScreen.textContent = ''
	if (operator === 'add') {
		currentScreen.textContent = firstNumber + secondNumber
		// firstNumber = 0
		// secondNumber = 0
	} else if (operator === 'minus') {
		currentScreen.textContent = firstNumber - secondNumber
		firstNumber = 0
		secondNumber = 0
	} else if (operator === 'divide') {
		currentScreen.textContent = firstNumber /= secondNumber
		firstNumber = 0
		secondNumber = 0
	} else if (operator === 'multiplication') {
		currentScreen.textContent = firstNumber *= secondNumber
		firstNumber = 0
		secondNumber = 0
	}
})
