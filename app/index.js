// app/index.js

const calc = require('./calc');

const numbersToAdd = [];
let sumSoFar = 0;

const readline = require('readline');


const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'OHAI DIS IS CMK> '
});

rl.prompt();

rl.on(
	'line',
	(line) => {
		let numberToAdd = Number.parseInt( line.trim() );
		numbersToAdd.push(numberToAdd);
		sumSoFar += numberToAdd;
		console.log(`Sum so far: ${sumSoFar}`);
		rl.prompt();
	}
).on(
	'close',
	() => {
		console.log('Ok. Good times. Good times.');
		let controlSum = calc.sum(numbersToAdd);
		console.log(`Just one last check. The last sum should be: ${controlSum}`);
		console.log('Buh bye!');
		process.exit(0);
	}
);
