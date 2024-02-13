---
toc: false
comments: true
layout: post
title: Zen Garden
description: Zen Garden
permalink: /zengarden
type: tangibles
courses: { compsci: {week: 1} }
---

<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zen Garden with Plants</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #add8e6; /* Light blue background */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        #zen-garden {
            width: 600px;
            height: 400px;
            background-color: #f0e68c; /* Sand color */
            border: 10px solid #8b4513; /* Brown border */
            position: relative;
        }

        .tools {
            position: absolute;
            top: 20px;
            left: 20px;
        }

        button {
            padding: 10px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
            margin-right: 10px;
        }

        button:hover {
            background-color: #45a049;
        }

        /* Plant style */
        .plant {
            width: 30px;
            height: 30px;
            background-color: green; /* Default color */
            border-radius: 50%;
            position: absolute;
        }
    </style>
</head>
<body>
    <div class="tools">
        <button onclick="clearSquare()">Rake</button>
        <button onclick="changePlantColor()">Change Plant Color</button>
    </div>
    <div id="zen-garden" onclick="addPlant(event)">
    </div>

    <script>
        function addPlant(event) {
            // If clicked inside the zen garden
            if (event && event.target.id === "zen-garden") {
                const plant = document.createElement('div');
                plant.className = 'plant';
                plant.style.left = (event.clientX - event.target.offsetLeft) + 'px';
                plant.style.top = (event.clientY - event.target.offsetTop) + 'px';
                document.getElementById('zen-garden').appendChild(plant);
            }
        }

        function clearSquare() {
            // Remove all plants
            const zenGarden = document.getElementById('zen-garden');
            while (zenGarden.firstChild) {
                zenGarden.removeChild(zenGarden.firstChild);
            }
        }

        function changePlantColor() {
            // Change the color of all plants
            const plants = document.querySelectorAll('.plant');
            plants.forEach(plant => {
                plant.style.backgroundColor = getRandomColor();
            });
        }

        function getRandomColor() {
            // Generate a random color
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    </script>
</body>
</html>
## What does this do?
This game allows the user to feel calm or zen. It does so in a ay similar to that of popping bubble wrap in which the user can click on the garden and add in "plants" or the dots. By being able to change the color of these dots the user is able to calm themselves out by utilizing their motor skills to create a safe environment for themselves which allows for safety and stability. We encourage users to add a dot for every issue they have or everything they are stressed out about, seeing it change color is indication of viewing it in a new light or showing how this issue is not neccesarily exactly as negative as they view it to be, and the rake button can be used as a symbol to clear the user's issues and reset to focus. This helps with stressors and is proven to benefit induviduals with anxiety or depression.