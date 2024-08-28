function div(a, b) {
	let resto = Number(a) % Number(b);
	let q = (a - resto) / b;

	return q;
}

console.log(div(4,4));		// q: 1  r: 0
console.log(div(5,4));		// q: 1  r: 1
console.log(div(6,4));		// q: 1  r: 2
console.log(div(7,4));		// q: 1  r: 3
console.log(div(8,4));		// q: 2  r: 0
console.log(div(9,4));		// q: 2  r: 1
