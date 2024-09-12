const { readFileSync } = require('fs');
const { printCSV } = require('./printCSV');

const csvPokemon = readFileSync('./assets/pokemon_combined.csv', 'utf-8');
const pokemonColumns = ["Name", "Type", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

printCSV(csvPokemon, pokemonColumns);

const csvText = readFileSync('./assets/oscar_best_pictures.csv', 'utf-8');
const columns = ["Filme", "Diretor", "Ano"]
printCSV(csvText, columns);

const csvText2 = readFileSync('./assets/oscar_best_pictures_from_xls.csv', 'utf-8');
const separador2 = ";"
printCSV(csvText2, columns, separador2);