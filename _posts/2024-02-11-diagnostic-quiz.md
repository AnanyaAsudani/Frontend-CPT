---
toc: false
comments: true
layout: post
title: Diagnostic
description: Diagnostic
permalink: /diagnostic
type: tangibles
courses: { compsci: {week: 1} }
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mental Health Questionnaire</title>
    <style>
        body {
            background-color: #ffc0cb; /* Pink background color */
            font-family: Arial, sans-serif;
            text-align: center;
        }
        h1 {
            margin-top: 50px;
        }
        .question {
            margin-bottom: 20px;
        }
        .submit-button {
            padding: 15px 30px; /* Larger padding for button */
            font-size: 18px; /* Larger font size for button */
            background-color: #ff69b4; /* Pink button color */
            color: white;
            border: none;
            border-radius: 10px; /* Rounded corners for button */
            cursor: pointer;
            transition: background-color 0.3s ease; /* Smooth hover effect */
        }
        .submit-button:hover {
            background-color: #ff1493; /* Darker pink color on hover */
        }
    </style>
</head>
<body>
    <div class="container">
    <img src="https://i.postimg.cc/Vr65MXCg/image.png" width=auto height="100px"> 
        <h1>Mental Health
        Questionnaire</h1>
        <form id="questionnaireForm">
            <h2>how often do you feel tired on a daily basis. Always, sometimes, or never?</h2> 
            <label for="question1">Question 1:</label>
            <input type="text" id="question1" name="question1" required>
        <form id="questionnaireForm">
            <h2>Do you often feel irritable at other people?</h2> 
            <label for="question1">Question 2:</label>
            <input type="text" id="question1" name="question1" required>
         <form id="questionnaireForm">
            <h2>Overall, how often do you feel stressed?</h2> 
            <label for="question1">Question 3:</label>
            <input type="text" id="question1" name="question1" required>
        <form id="questionnaireForm">
            <h2>How often do you think about the meaning of life?</h2> 
            <label for="question1">Question 4:</label>
            <input type="text" id="question1" name="question1" required>
        <form id="questionnaireForm">
            <h2>How often do you feel hopeless?</h2> 
            <label for="question1">Question 5:</label>
            <input type="text" id="question1" name="question1" required>
        <form id="questionnaireForm">
            <h2>How often do you have poor appetite or difficulty eating or overeating?</h2> 
            <label for="question1">Question 6:</label>
            <input type="text" id="question1" name="question1" required>
        <form id="questionnaireForm">
            <h2>Do you have difficulty sleeping?</h2> 
            <label for="question1">Question 7:</label>
            <input type="text" id="question1" name="question1" required>
            <button onclick="window.location.href='results.html'">Submit</button>
        <div id="diagnosisResult"></div>
    <script src="script.js"></script>

