const quoteButton = document.getElementById('js-new-quote');
const answerButton = document.getElementById('js-tweet');
const quoteText = document.getElementById('js-quote-text');
const answerText = document.getElementById('js-answer-text');

const apiEndpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let quote = '';
let answer = '';


quoteButton.addEventListener('click', getQuote);
answerButton.addEventListener('click', displayAnswer);

getQuote();

function getQuote()
{
    console.log('Getting new quote.');
    fetch(apiEndpoint) 
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text();
        })
        .then((text) => {
            const result = JSON.parse(text);
            quote = result.question;
            answer = result.answer;
            displayQuote();
            answerText.textContent = '_________________________________________';
        })
        .catch(error => {
            console.log('Error: ', error);
        });
}

function displayQuote() {
    quoteText.textContent = quote;
}
function displayAnswer() {
    answerText.textContent = answer;
}