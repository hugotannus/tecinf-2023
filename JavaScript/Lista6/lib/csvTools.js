function csvToLines(csvText) {
    return csvText.trim().split('\n');
}

function linesToRows(lines, separador=',') {
    const rows = []

    for(let i=0; i < lines.length; i++) {
        const line = lines[i].trim();
        const row = line.split(separador);
        
        rows.push(row);
    }

    return rows;
}

function extractHeader(rows) {
    return rows.shift();
}

function extractContent(rows) {
    return rows.slice(1);
}

/**
 * Função responsável por gerar um objeto JSON à partir do
 * cabeçalho (`header`) e uma linha (`row`) extraídos da
 * tabela CSV.
 *
 * @param {Array} header - lista representa o cabeçalho da tabela.
 * @param {Array} row - lista representa uma única linha do conteúdo da tabela.
 * @returns {Object} objeto JSON onde as chaves são os elementos do cabeçalho e os valores são
os elementos correspondentes da linha do conteúdo.
 */
function rowToJSON(header, row) {
    const obj = {};

    for(let i=0; i<header.length; i++) {
        let key = header[i];
        let value = row[i];

        obj[key] = value;
    }

    return obj;
}

/**
 * Função que transforma uma lista de linhas em objeto JSON.
 * 
 * @param {Array} header - lista de palavras-chave do cabeçalho
 * @param {Array} content - lista de linhas tratadas do arquivo CSV
 * @returns lista de objetos JSON
 */
function contentToJSON(header, content) {
    const list = [];

    for(let k = 0; k < content.length; k++) {
        let row = content[k];
        let obj = rowToJSON(header, row);

        list.push(obj);
    }

    return list;

    
}

module.exports = {
    csvToLines,
    linesToRows,
    extractHeader,
    extractContent,
    contentToJSON
};