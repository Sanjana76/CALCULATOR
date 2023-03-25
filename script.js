let result = document.getElementById('result');

function addDigit(digit) {
	result.value += digit;
}

function addSymbol(symbol) {
	result.value += symbol;
}

function clearResult() {
	result.value = '';
}

function deleteDigit() {
	result.value = result.value.slice(0, -1);
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = 'Error';
	}
}
