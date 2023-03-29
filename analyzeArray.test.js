import analyzeArray from './analyzeArray';

test('analyzeArray', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('analyzeArrayToFail', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).not.toEqual({
		average: 5,
		min: 2,
		max: 6,
		length: 3,
	});
});
