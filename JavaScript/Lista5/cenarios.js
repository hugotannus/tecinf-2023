console.log(require("./local_lib"));
console.log(require("./separa"));

const lib = require("./local_lib");
console.log(lib);

// Importa função de comparação
const { compara: comparaArray } = lib;
const separarString = require("./separa");

let texto1 = "O rato roeu a roupa do rei de Roma";
let esperado1 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"];
let saida1 = separarString(' ', texto1);

console.log(comparaArray(esperado1, saida1));

let texto2 = "Ana Maria,Paulo Coelho,Carla";
let esperado2 = ["Ana Maria", "Paulo Coelho", "Carla"];
let saida2 = separarString(',', texto2);

console.log(lib.compara(esperado2, saida2));