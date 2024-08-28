function compara(str1, str2) {
    return JSON.stringify(str1) == JSON.stringify(str2);
}

function separaTexto(separador, texto){
    return texto.split(separador);
}

module.exports = { compara, separaTexto };
