const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
	return arr.reduce((product, current) => product * current);
};

const power = function (number, power) {
	return Math.pow(number, power);
};

const factorial = function (number) {
	if (number == 0) {
		return 1;
	}
	let factorial = 1;
	for (let i = number; i > 0; i--) {
		factorial *= i;
	}
	return factorial;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
