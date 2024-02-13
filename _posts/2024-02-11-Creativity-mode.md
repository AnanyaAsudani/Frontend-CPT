---
toc: true
comments: true
layout: post
title: Creativity
description: Creativity
permalink: /creativity
type: tangibles
courses: { compsci: {week: 1} }
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Selection</title>
    <style>
        body {
            background-color: #ffc0cb; /* Pink background color */
            font-family: Arial, sans-serif;
            text-align: center;
        }
        h1 {
            margin-top: 50px;
        }
        .game-button {
            padding: 50px 90px; /* Larger padding for buttons */
            font-size: 18px; /* Larger font size for buttons */
            margin: 20px; /* Margin between buttons */
            background-color: #a8bd9d; /* Pink button color */
            color: white;
            border: none;
            border-radius: 30px; /* Rounded corners for buttons */
            cursor: pointer;
            transition: background-color 0.3s ease; /* Smooth hover effect */
        }
        .game-button:hover {
            background-color: #a8bd9d; /* Darker pink color on hover */
        }
    </style>
</head>
<body>
    <div>
        <h1>Select a Game</h1>
        <button onclick="window.location.href='{{site.baseurl}}/zengarden'">Zen Garden</button>
        <button onclick="window.location.href='{{site.baseurl}}/breatheback'">Breathe</button>
        <button class="game-button" onclick="window.location.href='game3.html'">Game 3</button>
        <button class="game-button" onclick="window.location.href='game4.html'">Game 4</button>
        <button class="game-button" onclick="window.location.href='game5.html'">Game 5</button>
        <button class="game-button" onclick="window.location.href='game6.html'">Game 6</button>
        <button class="game-button" onclick="window.location.href='game7.html'">Game 7</button>
        <button class="game-button" onclick="window.location.href='game8.html'">Game 8</button>
        <!-- Add more buttons for additional games -->
    </div>
</body>
</html>
