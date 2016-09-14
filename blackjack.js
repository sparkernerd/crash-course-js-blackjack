
// Remember, this is just ONE POSSIBLE solution!

var cards = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

var resultElement = document.getElementById('result');
var cardDisplay = document.getElementById('cards');

document.getElementById('deal').addEventListener('click', deal);
document.getElementById('hit').addEventListener('click', hit);

function deal() {
    resultElement.innerText = '';

    var allCards = document.getElementsByClassName('card');
    for (var i = allCards.length - 1; i > -1; i--) {
        cardDisplay.removeChild( allCards[ i ] );
    }

    hit();
    hit();
    checkGameStatus();
}

function hit() {
    var randomNumber = Math.floor(Math.random() * cards.length);
    var newCard = cards[ randomNumber ];

    var newCardElement = document.createElement('figure');
    newCardElement.classList.add('card');
    newCardElement.innerText = newCard;
    cardDisplay.appendChild(newCardElement);

    checkGameStatus();
}


function checkGameStatus() {
    var allCards = document.getElementsByClassName('card');

    console.log('Cards: ', allCards);

    var totalValue = 0;

    for (var i = 0; i < allCards.length; i++) {
        totalValue = totalValue + getCardValue( allCards[ i ] );
    }

    if ( totalValue === 21 ) {
        result.innerText = 'BLACKJACK!';
    } else if ( totalValue > 21 ) {
        result.innerText = 'BUST!';
    }
}

function getCardValue(cardElement) {
    var cardValue = 0;

    if (cardElement.innerText === 'J' || cardElement.innerText === 'Q' || cardElement.innerText === 'K') {
        cardValue = 10;

    } else if (cardElement.innerText === 'A') {
        cardValue = 11;

    } else {
        cardValue = Number(cardElement.innerText);

    }

    return cardValue;
}
