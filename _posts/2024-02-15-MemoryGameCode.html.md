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
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <div id="cards-grid">
    </div>
    <script src="script2.js" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', async function() {
            try {
                await initializeMemoryGame(imagePaths); 
            } catch (error) {
                console.error('Error initializing memory game:', error);
            }
        });
    </script>
</body>
</html>