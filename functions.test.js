import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} from "./functions.js";

test("capitalises a string", () => {
	expect(capitalize("test")).toBe("Test");
});

test("capitalises a single letter", () => {
	expect(capitalize("t")).toBe("T");
});

test("reverses a string", () => {
	expect(reverseString("test")).toBe("tset");
});

test("calculator adds", () => {
	expect(calculator.add(2, 2)).toBe(4);
});

test("calculator subtracts", () => {
	expect(calculator.subtract(2, 2)).toBe(0);
});

test("calculator divides", () => {
	expect(calculator.divide(2, 2)).toBe(1);
});

test("calculator multiplies", () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesar encrypts", () => {
	expect(caesarCipher("castle")).toBe("dbtumf");
});

test("caesar encrypts edges", () => {
	expect(caesarCipher("zzz ZZZ")).toBe("aaa AAA");
});

test("caesar ignores punctuation", () => {
	expect(caesarCipher("Hello!, Your's?! OK.")).toBe("Ifmmp!, Zpvs't?! PL.");
});

test("analyses arrays average", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("analyses arrays minimum", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("analyses arrays max", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("analyses arrays length", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("returns object with arrays info", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
