function olharCartas() {
    fetch('https://deckofcardsapi.com/api/deck/4sff83670lab/draw/?count=3')
    .then(converteParaJson)
    .then(imprimeTabela)
    .then(mostraCartas);

    function converteParaJson(data) {
        const obj = data.json();
        return obj;
    }

    function imprimeTabela(json) {
        console.table(json.cards, ["code", "image", "value", "suit"]);
        console.log("restam", json.remaining, "cartas")
        
        return json.cards;
    }
    
    function mostraCartas(cards) {
        const img0 = document.getElementById('carta0');
        const img1 = document.getElementById('carta1');
        const img2 = document.getElementById('carta2');
        
        img0.setAttribute('src', cards[0].image);
        img1.setAttribute('src', cards[1].image);
        img2.setAttribute('src', cards[2].image);
    }
}
