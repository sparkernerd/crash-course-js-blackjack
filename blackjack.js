
// Remember, this is just ONE POSSIBLE solution!

var deck = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

var resultElement = document.getElementById('result');
var cardDisplay = document.getElementById('cards');

document.getElementById('deal').addEventListener('click', deal);
document.getElementById('hit').addEventListener('click', addCard);


function deal() {
    resultElement.innerText = '';

    var currentCards = document.getElementsByClassName('card');
    for (var i = currentCards.length - 1; i > -1; i--) {
        cardDisplay.removeChild( currentCards[ i ] );
    }

    addCard();
    addCard();
    checkGameStatus();
}


function addCard() {
    var randomNumber = Math.floor(Math.random() * deck.length);
    var newCard = deck[ randomNumber ];

    var newCardElement = document.createElement('figure');
    newCardElement.classList.add('card');
    newCardElement.innerText = newCard;
    cardDisplay.appendChild(newCardElement);

    checkGameStatus();
}


function checkGameStatus() {
    var currentCards = document.getElementsByClassName('card');

    var totalValue = 0;

    for (var i = 0; i < currentCards.length; i++) {
        totalValue = totalValue + getCardValue( currentCards[ i ] );
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
