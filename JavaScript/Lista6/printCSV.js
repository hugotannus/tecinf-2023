const csvTools = require('./lib/csvTools');

function printCSV(csvText, columns, separador) {
    const lines = csvTools.csvToLines(csvText);
    const rows = csvTools.linesToRows(lines, separador);
    const header = csvTools.extractHeader(rows);
    const content = csvTools.extractContent(rows);
    const json = csvTools.contentToJSON(header, content);

    console.table(json, columns);
}

module.exports = { printCSV };