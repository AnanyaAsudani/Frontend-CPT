
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two Buttons</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Two Buttons Page</h1>
    <button id="button1">Button 1</button>
    <button id="button2">Button 2</button>

    <!-- JavaScript example to add functionality to the buttons -->
    <script>
        // Add event listeners to the buttons
        document.getElementById('button1').addEventListener('click', function() {
            alert('Button 1 clicked!');
        });

        document.getElementById('button2').addEventListener('click', function() {
            alert('Button 2 clicked!');
        });
    </script>
</body>
</html>
