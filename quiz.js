let countdown = 60;
let score = 0;
let startBtn = document.getElementById('startBtn');


let timer = document.querySelector('#timer').textContent = countdown;
let introContainer = document.querySelector('#intro-container').style.display = 'block';
let questionContainer = document.querySelector('#question-container').style.display = 'none';
let questionText = document.getElementById('question-text');
let questions = [
    {
        question: "Question 2",
        options: ["A", "B", "C", "D"]
        answer: "A"
    },
    {
        question: "Question 2",
        options: ["A", "B", "C", "D"]
        answer: "A"
    },
    {
        question: "Question 3",
        options: ["A", "B", "C", "D"]
        answer: "A"
    }
]
// let question2 = document.querySelector('#question2').style.display = 'none';
// let correctBtn = document.querySelector('#correctBtn');
// let incorrectBtn = document.querySelector('#incorrectBtn');

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    console.log("Quiz has been started");
    countdown--;
    console.log("Timer has started!");
    intro = document.getElementById('intro-container').style.display = 'none';
    questions = document.getElementById('question-container').style.display = 'block';
    for (var i=0; i < questions.length; i++) {
        questions.question.textContent(question);
    }
}

// document.getElementById("startBtn").addEventListener("click", function(){
//     question1 = document.getElementById('question1').style.display = 'block';
//     countdown--;
//     console.log("Score:", score);
// });
// // document.getElementById("correctBtn").addEventListener("click", function(){
// if (document.getElementById('correctBtn').clicked == true) {
//     score++;
//     console.log("Score:", score);
//     alert("Correct answer was clicked");

// } else {
//     countdown -= 5;
//     console.log("Score:", score);
// };
// // });