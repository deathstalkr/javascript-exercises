const findTheOldest = function (object) {
	currentYear = new Date().getFullYear();
	sorted = object.sort((firstPerson, secondPerson) => {
		if (
			firstPerson.yearOfDeath == null ||
			secondPerson.yearOfDeath == null
		) {
			if (
				currentYear - firstPerson.yearOfBirth >
				currentYear - secondPerson.yearOfBirth
			) {
				return -1;
			} else {
				return 1;
			}
		} else if (
			firstPerson.yearOfDeath - firstPerson.yearOfBirth >
			secondPerson.yearOfDeath - secondPerson.yearOfBirth
		) {
			return -1;
		} else {
			return 1;
		}
	});

	return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
