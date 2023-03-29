// https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a

const pipe =
	(...fns) =>
	x =>
		fns.reduce((y, f) => f(y), x);

const g = n => n + 1;
const f = n => n * 2;

const doStuffBetter = pipe(g, f);
console.log(
	doStuffBetter(20) // 42
);
