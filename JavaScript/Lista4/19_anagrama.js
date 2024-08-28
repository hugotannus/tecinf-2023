function anagrama(str1, str2) {
	let s1 = str1.split("").sort().join("");
	let s2 = str2.split("").sort().join("");

	return s1 === s2;
}

console.log(anagrama("listen", "silent") === true);
console.log(anagrama("hello", "world") === false);
console.log(anagrama("evil", "vile") === true);
