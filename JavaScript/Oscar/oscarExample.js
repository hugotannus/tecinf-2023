const fs = require('fs');
const csvOscar = fs.readFileSync('./oscar_best_pictures_from_xls.csv').toString();

console.log(csvOscar);
console.log(typeof csvOscar);

const { csv2JSON } = require('csv');
const objJson = csv2JSON(csvOscar);

console.log(objJson);
// console.table(objJson);
console.table(objJson, ["Filme", "Diretor", "Ano"]);



/* Estado A: CSV
---------
`nome;idade
João;28
Maria;32`
*/

/* Estado D: Lista de Strings (linhas)
---------
[
    "nome;idade",
    "João;28",
    "Maria;32"
]
*/

/* Estado E: Lista de colunas
---------
[
    ["nome", "idade"],
    ["João", "28"],
    ["Maria","32"]
]
*/

/* Estado F: Cabeçalho
---------
["nome", "idade"]
*/

/* Estado G: Conteúdo da tabela (lista de colunas)
---------
[
    ["João", "28"],
    ["Maria","32"]
]
*/

/* Estado C: Objeto JSON
---------
[
    {
        nome: "João",
        idade: "28"
    },
    {
        nome: "Maria",
        idade: "32"
    },
]
*/