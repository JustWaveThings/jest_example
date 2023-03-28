import caesarCipher from './caesarCipher';

test('caesarCipher a - b', () => {
	expect(caesarCipher('a', 1)).toBe('b');
});

test('caesarCipher a - a', () => {
	expect(caesarCipher('a', 26)).toBe('a');
});

test('caesarCipher a - b', () => {
	expect(caesarCipher('a', 27)).toBe('b');
});

test('caesarCipher A - B', () => {
	expect(caesarCipher('A', 1)).toBe('B');
});

test('caesarCipher A - A', () => {
	expect(caesarCipher('A', 26)).toBe('A');
});

test('caesarCipher A - B', () => {
	expect(caesarCipher('A', 27)).toBe('B');
});

test('caesarCipher - Hello, World!', () => {
	expect(caesarCipher('Hello, World!', 5)).toBe(`Mjqqt, Btwqi!`);
});
