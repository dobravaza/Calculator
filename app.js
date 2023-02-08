const allButtons = document.querySelectorAll('.btn')
const currentScreen = document.querySelector('.screen-current')
const clear = document.querySelector('.btn-red')
const deleteBtn = document.querySelector('.btn-blue')
const addButton = document.querySelector('.btn-plus')
const equalBtn = document.querySelector('.equal')

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

let firstNumber, secondNumber

addButton.addEventListener('click', function () {
	firstNumber = Number(currentScreen.textContent)
	currentScreen.textContent = ''
})

equalBtn.addEventListener('click', function () {
	secondNumber = Number(currentScreen.textContent)
	sum = firstNumber + secondNumber
	currentScreen.textContent = sum
	firstNumber = null
	secondNumber = null
})
