function rowToJSON(header, content) {
    const obj = {};
    console.log();
    console.log("cabeçalho:", header);
    console.log("conteúdo:", content);

    for(let i=0; i<header.length; i++) {
        let key = header[i];
        let value = content[i];

        obj[key] = value;
        console.log(obj);
    }

    // obj["nome"] = "João";
    // obj["idade"] = "28";

    return obj;
}

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