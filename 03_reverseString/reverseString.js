const reverseString = function(str) {
    let string = str;
    let arr = Array.from(string);
    let revString = '';
    for (let i = arr.length-1; i>=0; i--){
        revString += arr[i]; 
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
