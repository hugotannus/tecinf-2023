
const fs = require('fs');
const { printCSV } = require('csv');

const csvOscar = fs.readFileSync('./oscar_best_pictures_from_xls.csv', 'utf-8');

printCSV(csvOscar);
