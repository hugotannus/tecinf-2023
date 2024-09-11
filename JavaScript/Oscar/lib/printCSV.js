const csvTools = require('./csvTools');

function printCSV(csvText, columns) {
    const lines = csvTools.csvToLines(csvText);
    const rows = csvTools.linesToRows(lines, ',');
    const header = csvTools.extractHeader(rows);
    const content = csvTools.extractContent(rows);
    const json = csvTools.contentToJSON(header, content);

    console.table(json, columns);
}

module.exports = { printCSV };