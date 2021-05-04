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

    const testResult = checkForYes(answerOne);
    console.log(testResult);

    if (testResult === true) {
        quizScore = quizScore + 1;
        console.log(answerOne, 'this is answer one');

    }

    console.log(quizScore);

    const answerTwo = prompt('Is a Line a mark with greater length than width?');

    const testResult2 = checkForYes(answerTwo);
    console.log(testResult2);

    if (testResult2 === true) {
        quizScore = quizScore + 1;
        console.log(answerTwo, 'this is answer two');

    }

    console.log(quizScore);

    const answerThree = prompt('Is a shape a closed line?');

    const testResult3 = checkForYes(answerThree);
    console.log(testResult);

    if (testResult3 === true) {
        quizScore = quizScore + 1;
        console.log(answerThree, 'this is answer Three');

    }

    console.log(quizScore);

    scoreResults.textContent = `Congratulations ${firstName} ${lastName}! You got ${quizScore} out of 3!`;

    console.log(firstName, lastName);
    console.log(scoreResults.textContent);

});

