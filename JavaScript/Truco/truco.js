const deckId = "4sff83670lab";
const deck = new Deck(deckId);

function Deck(deckId) {
    let deckId = deckId;
    let listOfCards = "4c,7h,7d,3c,3h,3s,3d,2c,2h,2s,2d,jc,jh,js,jd,kc,kh,ks,kd,qc,qh,qs,Qd,Ac,Ah,As,Ad";

    /* Métodos públicos */

    this.gerarBaralho = function () {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${listOfCards}`)
            .then(function (response) {
                const jsonData = response.json();
                return jsonData;
            })
            .then(atualizaInfo)
            .then(setDeckId)
            .catch(erro => alert(erro));
    }

    this.olharCartas = function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
            .then((response) => {
                return response.json()
            })
            .then(atualizaInfo)
            .then(mostraCartas)
            .catch(erro => alert(erro));
    }

    this.reembaralhar = function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=false`)
            .then(response => response.json())
            .then(atualizaInfo)
            .catch(erro => alert(erro));
    }

    /* Métodos Privados */

    const setDeckId = (jsonData) => {
        this.deckId = jsonData.deck_id;
        return jsonData;
    }

    const atualizaInfo = (jsonData) => {
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

    function constroiCarta(cardId, cardImage) {
        const card = document.getElementById(cardId);

        let img = card.querySelector('img');
        if (img == null) img = document.createElement('img');

        img.setAttribute('src', cardImage);
        card.append(img);
    }

    function mostraCartas(jsonData) {
        const cards = jsonData.cards;

        for (let i = 0; i < cards.length; i++) {
            const cardId = `carta${i + 1}`;
            const cardImage = cards[i].image;

            constroiCarta(cardId, cardImage);
        }

        return true;
    }
}