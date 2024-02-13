---
toc: true
comments: true
layout: post
title: Breathe Back
description: Breathe Back
permalink: /breatheback
type: tangibles
courses: { compsci: {week: 1} }
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mindful Breathing Game</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0; /* Light gray background */
            font-family: Arial, sans-serif;
        }

        #container {
            text-align: center;
            color: #333; /* Dark gray text color */
        }

        #instructions {
            font-size: 24px;
            margin-bottom: 20px;
            color: #555; /* Grayish text color */
        }

        #timer {
            font-size: 48px;
            margin-bottom: 20px;
            color: #4caf50; /* Pastel green timer color */
        }

        #startButton {
            padding: 10px 20px;
            background-color: #ffb74d; /* Pastel orange button color */
            color: white;
            border: none;
            cursor: pointer;
            font-size: 20px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        #startButton:hover {
            background-color: #ff9800; /* Darker orange on hover */
        }
    </style>
</head>
<body>
    <div id="container">
        <p id="instructions">Click the button below to start a mindful breathing exercise.</p>
        <div id="timer"></div>
        <button id="startButton" onclick="startBreathing()">Start</button>
    </div>

    <script>
        function startBreathing() {
            document.getElementById('instructions').textContent = 'Close your eyes and take a deep breath in...';
            document.getElementById('startButton').disabled = true;

            // Start the breathing exercise after 3 seconds
            setTimeout(function() {
                document.getElementById('timer').textContent = 'Inhale';
                // Change the text after 2 seconds (duration of inhale)
                setTimeout(function() {
                    document.getElementById('timer').textContent = 'Exhale';
                    // Change the text after 6 seconds (duration of exhale)
                    setTimeout(function() {
                        document.getElementById('timer').textContent = 'Inhale';
                        // Repeat the cycle after 4 seconds (duration of exhale)
                        setInterval(function() {
                            setTimeout(function() {
                                document.getElementById('timer').textContent = 'Exhale';
                            }, 4000);
                            setTimeout(function() {
                                document.getElementById('timer').textContent = 'Inhale';
                            }, 6000);
                        }, 10000);
                    }, 4000);
                }, 6000);
            }, 3000);
        }
    </script>
</body>
</html>
