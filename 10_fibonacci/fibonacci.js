const fibonacci = function (sequence) {
	if (sequence <= 0) return "OOPS";
	if (sequence == 0) return 0;

	let current = 1;
	let previous = 0;

	for (let i = 2; i <= sequence; i++) {
		let intermediate = current;
		current = current + previous;
		previous = intermediate;
	}

	return current;
};

// Do not edit below this line
module.exports = fibonacci;
