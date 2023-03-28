export default function caesarCipher(str, num) {
	let output = '';

	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);

		if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
			const isUpperCase = code >= 65 && code <= 90;
			const shift = isUpperCase ? 65 : 97;
			const shiftedCode = ((code - shift + num) % 26) + shift;

			output += String.fromCharCode(shiftedCode);
		} else {
			output += str[i];
		}
	}

	return output;
}
