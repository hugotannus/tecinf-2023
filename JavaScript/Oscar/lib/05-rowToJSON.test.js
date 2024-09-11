const { rowToJSON } = require("./csvTools");

const header1 =  ["nome", "idade"];
const content1 =   ["João", "28"];
const expected1 = { nome: "João", idade: "28" };

const output1 = rowToJSON(header1, content1);

console.log(JSON.stringify(expected1) === JSON.stringify(output1));

const header2 =  ["produto", "preco"];
const content2 =   ["Arroz", "25.00"];
const expected2 =  { produto: "Arroz", preco: "25.00" };

const output2 = rowToJSON(header2, content2);

console.log(JSON.stringify(expected2) === JSON.stringify(output2));