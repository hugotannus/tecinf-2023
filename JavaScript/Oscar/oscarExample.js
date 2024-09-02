const fs = require('fs');
const csvOscar = fs.readFileSync('./oscar_best_pictures_from_xls.csv').toString();

console.log(csvOscar);
console.log(typeof csvOscar);

const { csv2JSON } = require('csv');
const objJson = csv2JSON(csvOscar);

console.log(objJson);
console.table(objJson);
