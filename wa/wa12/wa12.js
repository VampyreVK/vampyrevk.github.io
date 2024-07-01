const quoteButton = document.getElementById("js-new-quote");
const answerButton = document.getElementById("js-tweet");
const quoteText = document.getElementById("js-quote-text");
const answerText = document.getElementById("js-answer-text");
const changelogButton = document.getElementById("js-changelog-button");

// New API - https://opentdb.com/api_config.php
const apiEndpoint = "https://opentdb.com/api.php?amount=10&category=30";

let results = [];
let quote = "";
let correctAnswerIndex = 0;

//gets first set of quotes
getQuote();

quoteButton.addEventListener("click", getQuote);
answerButton.addEventListener("click", displayAnswer);

changelogButton.addEventListener("click", () => {
    const changelogBox = document.getElementById("changelog");
    const changelog = changelogBox.querySelector("ul");

    if (changelog.style.display === "none" || changelog.style.display === "") {
        changelog.style.display = "block";
        changelogButton.textContent = "Hide Changelog";
    } else {
        changelog.style.display = "none";
        changelogButton.textContent = "Show Changelog";
    }
});

function getQuote() {
    console.log("Getting new quote.");
    
    if (results.length === 0) {
        fetch(apiEndpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((jsonResponse) => {
                results = jsonResponse.results;
                for (let result of results) {
                    console.log(result);
                }
                processResults();
            })
            .catch((error) => {
                console.log("Error: ", error);
                quoteText.textContent = "Error getting quote: Too many requests. Please wait a few seconds before continuing.";
            });
    } else {
        processResults();
    }
}

function processResults() {
    quote = results[0].question.replaceAll("&quot;", '"');
    correctAnswerIndex = Math.floor(Math.random() * (results[0].incorrect_answers.length + 1));

    //clear answers
    const list = answerText.querySelector("ul");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    
    let incorrectAnswerCount = 0;
    for (let i = 0; i < results[0].incorrect_answers.length + 1; i++) {
        let answer = document.createElement("li");
        if (i === correctAnswerIndex) {
            answer.textContent = results[0].correct_answer.replaceAll("&quot;", '"');
        } else {
            answer.textContent = results[0].incorrect_answers[incorrectAnswerCount].replaceAll("&quot;", '"');
            incorrectAnswerCount++;
        }
        list.appendChild(answer);
    }
    displayQuote();
    results.shift();
}

function displayQuote() {
    quoteText.textContent = quote;
}

function displayAnswer() {
    const answerElements = answerText.querySelectorAll("li");
    answerElements[correctAnswerIndex].classList.add("correct-answer");
}
