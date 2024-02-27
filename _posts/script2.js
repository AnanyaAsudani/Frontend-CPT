document.addEventListener('DOMContentLoaded', async function() {
    try {
        await initializeMemoryGame(imagePaths); 
    } catch (error) {
        console.error('Error initializing memory game:', error);
    }
});

async function initializeMemoryGame(imagePaths) {
    const cardsContainer = document.getElementById('cards-grid');
    shuffle(imagePaths);
    imagePaths.forEach((path, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const front = document.createElement('span');
        front.classList.add('symbol-front');
        const questionMark = document.createElement('img');
        questionMark.src = 'questionmark.png'; 
        questionMark.classList.add('question-mark');
        front.appendChild(questionMark);

        const back = document.createElement('span');
        back.classList.add('symbol-back');
        const image = document.createElement('img');
        image.src = path;
        back.appendChild(image);
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
        const symbol1 = card1.querySelector('.symbol-back img').src;
        const symbol2 = card2.querySelector('.symbol-back img').src;
        if (symbol1 === symbol2) {
            card1.removeEventListener('click', flipCard);
            card2.removeEventListener('click', flipCard);
            flippedCards = [];
            return;
        }
        setTimeout(() => {
            flipCard(card1);
            flipCard(card2);
            flippedCards = [];
        }, 1000);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

const imagePaths = [
    'star.png',
    'apple.png',
    'pizza.png',
    'rocket.png',
    'cat.png',
    'balloon.png',
    'watermelon.png',
    'flower.png'
];