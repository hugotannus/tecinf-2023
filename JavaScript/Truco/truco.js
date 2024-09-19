// let deckId = '';
let deckId = "4sff83670lab";
let listOfCards = "4c,7h,7d,3c,3h,3s,3d,2c,2h,2s,2d,jc,jh,js,jd,kc,kh,ks,kd,qc,qh,qs,Qd,Ac,Ah,As,Ad"

/* Funções de acesso à API */

function Deck() {
    console.log("Criou um baralho.")
}

const deck1 = Deck();
const deck2 = new Deck();

console.log(Deck);
console.log(deck1);
console.log(deck2);

function gerarBaralho() {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${listOfCards}`)
        .then(getJsonData)
        .then(atualizaInfo)
        .then(setDeckId)
        .catch(erro => alert(erro));
}

function olharCartas() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
        .then(getJsonData)
        .then(atualizaInfo)
        .then(imprimeTabela)
        .then(mostraCartas)
        .catch(erro => alert(erro));
}

function reembaralhar() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=false`)
        .then(getJsonData)
        .then(atualizaInfo)
        .catch(erro => alert(erro));
}

/* Funções Privadas */

function getJsonData(response) {
    return response.json();
}

function atualizaInfo(jsonData) {
    if (!jsonData.success)
        throw new Error("Oops! Tente reembaralhar as cartas");

    const deck_id = jsonData.deck_id;
    const remaining = jsonData.remaining;

    const info1 = document.getElementById("deck_id");
    const info2 = document.getElementById("remaining");

    info1.innerText = deck_id;
    info2.innerText = remaining;

    return jsonData;
}

function setDeckId(jsonData) {
    deckId = jsonData.deck_id;

    return jsonData;
}

function imprimeTabela(json) {
    console.table(json.cards, ["code", "image", "value", "suit"]);
    console.log("restam", json.remaining, "cartas")

    return json;
}

function constroiCarta(cardId, cardImage) {
    const card = document.getElementById(cardId);
    
    let img = card.querySelector('img');
    if (img == null) img = document.createElement('img');
    
    img.setAttribute('src', cardImage);
    card.append(img);
}

function mostraCartas(jsonData) {
    const cards = jsonData.cards;
    
    for (let i=0; i < cards.length; i++) {
        const cardId = `carta${i + 1}`;
        const cardImage = cards[i].image;

        constroiCarta(cardId, cardImage);
    }

    return true;
}