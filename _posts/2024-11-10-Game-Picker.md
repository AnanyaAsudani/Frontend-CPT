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
        button {
            padding: 100px 130px; /* Larger padding for buttons */
            font-size: 40px; /* Larger font size for buttons */
            margin: 30px; /* Margin between buttons */
            background-color: #a8bd9d; /* Pink button color */
            color: white;
            border: none;
            border-radius: 10px; /* Rounded corners for buttons */
            cursor: pointer;
            transition: background-color 0.3s ease; /* Smooth hover effect */
        }
        button:hover {
            background-color: #a8bd9d; /* Darker pink color on hover */
        }
    </style>
</head>
<body>
    <div>
        <h1>Select a Game Mode</h1>
        <button onclick="window.location.href='{{site.baseurl}}/creativity'">Creativity Mode</button>
        <button onclick="window.location.href='{{site.baseurl}}/diagnostic'">Diagnostic Mode</button>
    </div>
</body>
</html>
