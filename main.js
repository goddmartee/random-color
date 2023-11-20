const span = document.querySelector('span');

function getRandomUnitHexColor() {
	const unitHexColor = Math.floor(Math.random() * 256).toString(16);

	return unitHexColor.length === 1 ? '0' + unitHexColor : unitHexColor;
}

function getRandomColor() {
	const red = getRandomUnitHexColor();
	const green = getRandomUnitHexColor();
	const blue = getRandomUnitHexColor();

	return '#' + red + green + blue;
}

function copyText(value) {
	navigator.clipboard.writeText(value);
}

document.querySelector('button').addEventListener('click', () => {
	const hexColor = getRandomColor();

	span.textContent = hexColor.toUpperCase();
	document.querySelector('main').style.backgroundColor = hexColor;
});

span.addEventListener('click', () => {
	copyText(span.textContent);

	span.textContent = 'Copied!';
});
