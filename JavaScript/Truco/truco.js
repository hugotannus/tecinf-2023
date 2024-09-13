function converteParaJson(data) {
    const obj = data.json();
    return obj;
}
function imprimeTabela(json) {
    console.table(json.cards, ["code", "image", "value", "suit"]);
    console.log("restam", json.remaining, "cartas")
}

fetch('https://deckofcardsapi.com/api/deck/4sff83670lab/draw/?count=3')
.then(converteParaJson)
.then(imprimeTabela);