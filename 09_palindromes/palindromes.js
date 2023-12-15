const palindromes = function (string) {
	transform = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return transform.split("").reverse().join("") == transform;
    
    // conventional method
	// length = transform.length - 1;
	// for (let i = 0; i <= length / 2; i++) {
	// 	if (!(transform[i] == transform[length - i])) {
	// 		return false;
	// 	}
	// }
	// return true;
};

// Do not edit below this line
module.exports = palindromes;
