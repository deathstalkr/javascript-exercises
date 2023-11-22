const sumAll = function (min, max) {
	if (min < 0 || max < 0) {
		return `ERROR`;
	} else if (!(typeof min === "number") || !(typeof max === "number")) {
		return `ERROR`;
	} else if (min > max) {
		temp = min;
		min = max;
		max = temp;
		// [min, max] = [max, min]; // swap values using array destructuring
	}
	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
