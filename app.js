// import functions and grab DOM elements
import { checkForYes } from './utils.js';



const button = document.getElementById('button');
const scoreResults = document.getElementById('score-results');

// initialize state

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    //post click goes here
    //this is what happens when you click
    alert('Welcome! The Elements of Art Quiz is about to begin!');

    const takeQuiz = confirm('Are you ready to take the quiz?');

    if (takeQuiz === false) {
        return;
    }

    const firstName = prompt('What is your first name?');

    const lastName = prompt('What is your last name?');

    console.log(lastName);

    const answerOne = prompt('True or False: A form is a three-dimensional shape.');

    let quizScore = 0;

    if (checkForYes(answerOne)) {
        quizScore = quizScore + 1;

    }

    console.log(quizScore);

    const answerTwo = prompt('Is a Line a mark with greater length than width?');

    if (checkForYes(answerTwo)) {
        quizScore = quizScore + 1;

    }

    console.log(quizScore);

    const answerThree = prompt('Is a shape a closed line?');

    if (checkForYes(answerThree)) {
        quizScore = quizScore + 1;

    }

    console.log(quizScore);

    scoreResults.textContent = `Congratulations ${firstName} ${lastName}! You got ${quizScore} out of 3!`;

    console.log(firstName, lastName);
    console.log(scoreResults.textContent);

});

