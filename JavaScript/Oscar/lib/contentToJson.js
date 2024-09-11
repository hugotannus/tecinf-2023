const { contentToJSON } = require("./csvTools");

const header1 =  ["nome", "idade"];
const content1 =   [["João", "28"], ["Maria", "32"]];
const expected1 = [ { nome: "João", idade: "28" }, { nome: "Maria", idade: "32" } ];

const output1 = contentToJSON(header1, content1);

console.log(output1);
console.table(output1);