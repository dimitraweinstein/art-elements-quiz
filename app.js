// import functions and grab DOM elements
const button = document.getElementById('button');


// initialize state

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    //post click goes here
    //this is what happens when you click
    alert('Welcome! The Elements of Art Quiz is about to begin!');

    const takeQuiz = confirm('Are you ready to take the quiz?');
    console.log(takeQuiz);

    if (takeQuiz === false) {
        return;
    }

    const firstName = prompt('What is your first name?');

    const lastName = prompt('What is your last name?');

    


});