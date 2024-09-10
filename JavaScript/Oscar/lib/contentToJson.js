const { rowToJSON } = require("./rowToJson");

function contentToJSON(header, content) {
    const list = [];

    for(let k = 0; k < content.length; k++) {
        let row = content[k];
        let obj = rowToJSON(header, row);

        list.push(obj);
    }

    return list;
}

const header1 =  ["nome", "idade"];
const content1 =   [["João", "28"], ["Maria", "32"]];
const expected1 = [ { nome: "João", idade: "28" }, { nome: "Maria", idade: "32" } ];

const output1 = contentToJSON(header1, content1);

console.log(output1);
console.table(output1);