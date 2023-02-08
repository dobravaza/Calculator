const allButtons = document.querySelectorAll('.btn')
const currentScreen = document.querySelector('.screen-current')

const displayCurrent = function (event) {
	const buttonText = event.target.textContent
	if (buttonText >= '1' && buttonText <= '9') {
		currentScreen.textContent += buttonText
	}
}

allButtons.forEach(function (button) {
	button.addEventListener('click', displayCurrent)
})
