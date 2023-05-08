/* eslint-env es6 */

function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1) 
}

function reverseString(string) {
	return string.split("").reverse().join("");
}

const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	divide: (a, b) => a / b,
	multiply: (a, b) => a * b
}

function caesarCipher(string) {
	let result = [];
	for (let i = 0; i < string.length; i++) {
		let charCode = string.charCodeAt(i);
		if (charCode === 90) charCode = 65;
		else if (charCode === 122) charCode = 97;
		else if (charCode >= 65 && charCode < 122) charCode += 1;
		result.push(charCode);
	}
	return String.fromCharCode(...result);
}

function analyzeArray(arr) {
	return {
		average: (() => arr.reduce((prev, cur) => prev += cur, 0) / arr.length)(),
		min: (() => Math.min(...arr))(),
		max: (() => Math.max(...arr))(),
		length: arr.length
	}
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};