document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-grid');
    const symbols = ['🌟', '🍎', '🍕', '🚀', '🐱', '🎈', '🍉', '🌸']; 
    const cards = [...symbols, ...symbols];

    shuffle(cards);

    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const front = document.createElement('span');
        front.classList.add('symbol-front');
        front.textContent = '❓';
        const back = document.createElement('span');
        back.classList.add('symbol-back');
        back.textContent = symbol;
        card.appendChild(front); 
        card.appendChild(back);
        cardsContainer.appendChild(card);
    });

    let flippedCards = [];

    cardsContainer.addEventListener('click', function(event) {
        const clickedCard = event.target.closest('.card');
        if (!clickedCard || flippedCards.length >= 2 || clickedCard.classList.contains('flipped')) return;

        flipCard(clickedCard);
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    });

    function flipCard(card) {
        card.classList.toggle('flipped');
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.symbol-front')?.textContent;
        const symbol2 = card2.querySelector('.symbol-front')?.textContent;

        if (symbol1 === symbol2) {
            flippedCards = [];
            return;
        }

        flipCard(card1);
        flipCard(card2);
        flippedCards = [];
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});