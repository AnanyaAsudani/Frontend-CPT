document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-grid');
    
    const symbols = ['🌟', '🍎', '🍕', '🚀', '🐱', '🎈', '🍉', '🌸'];
    
    const cards = [...symbols, ...symbols];
    
    shuffle(cards);
    
    cards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-front">${symbol}</div>
            <div class="card-back">❓</div>`;
        cardsContainer.appendChild(card);
    });
    
    let flippedCards = [];
    
    cardsContainer.addEventListener('click', function(event) {
        const clickedCard = event.target.closest('.card'); 
        if (!clickedCard || flippedCards.length >= 2) return;
    
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
        const symbol1 = card1.querySelector('.card-front').innerText;
        const symbol2 = card2.querySelector('.card-front').innerText;
    
        if (symbol1 === symbol2) {
            flippedCards = [];
        }else {
            flipCard(card1);
            flipCard(card2);
            flippedCards = [];
        }
    }
        
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});