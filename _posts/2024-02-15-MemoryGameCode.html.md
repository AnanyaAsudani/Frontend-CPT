---
toc: true
comments: true
layout: post
title: Memory
permalink: /memory
type: tangibles
courses: { compsci: {week: 8} }
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Game</title>
    <style>
        body {
            margin: 0;
            background-color: #fff;
            color: #000;
            overflow: hidden;
        }

        #cards-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .card {
            width: 100px;
            height: 100px;
            margin: 10px;
            background-color: #ddd;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            cursor: pointer;
            transition: transform 0.3s ease;
            position: relative;
        }

        .symbol-front {
            display: block;
        }

        .symbol-back {
            display: none;
        }

        .card.flipped .symbol-front {
            display: none;
        }

        .card.flipped .symbol-back {
            display: block;
        }
    </style>
</head>
<body>
    <div id="cards-grid">
    </div>
    <script>
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
                const symbol1 = card1.querySelector('.symbol-back')?.textContent;
                const symbol2 = card2.querySelector('.symbol-back')?.textContent;

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
        });
    </script>
</body>
</html>