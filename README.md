## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup
1) Content of site will be about the Elements of Art.
2) Button to start the quiz
    --Why??: need this button to launch the quiz
    --How?: button.addEventListener();
3) Content/Information about El's of Art
    --Why??: This helps user prepare for quiz questions
4) Section that holds quiz results
    --Why?: To show user their score
    --How??: <variableName>.textContent = WhateverWeWantToShowTheUser


## State - whatever is changing over time
1) User's score, will start at 0 and then icrease by one with every correct answer.


## Events
1) User clicks the button to launch the quiz on the El's of Art
    --What happens:
            -On click an alert notifies the user the quiz is about to begin.
            -user confirms they want to begin the quiz
                -if not, they click cancel and break out of quiz
            -first prompt with initial question
                -when user answers, store the response in a variable
                -evaluate the response, compare to correct answer
                -if the user input is the same as the correct answer, add to the score in an increment of 1.
                -Repeat the 'prompt' process for each question in the quiz.
                -Finally, display results output in the DOM with the user's name and score.