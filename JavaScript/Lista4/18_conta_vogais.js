const vogais = ["a", "e", "i", "o", "u"];

exports.contaVogais = function contaVogais(texto) {
    let letras = texto.split('');
    let result = letras.filter(letra => vogais.includes(letra));

    return result.length;
}

console.log(contaVogais("hello"));
console.log(contaVogais("aeiou"));
console.log(contaVogais("javascript"));