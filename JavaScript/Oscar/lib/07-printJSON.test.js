const { readFileSync } = require('fs');
const { printCSV } = require('./printCSV');

const csvText = readFileSync('../oscar_best_pictures.csv', 'utf-8');
const columns = ["Filme", "Diretor", "Ano"]

printCSV(csvText, columns);