function exercicio2(array, e) {
	return array.indexOf(e);
}

console.log(exercicio2([1, 2, 3, 4, 5], 3) === 2);
console.log(exercicio2([10, 20, 30, 40, 50], 20) === 1);
console.log(exercicio2([5, 10, 15, 20, 25], 25) === 4);
console.log(exercicio2([5, 10, 15, 20, 25], 30) === -1);