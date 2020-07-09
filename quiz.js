let countdown = 60;
let score = 0;
let timer = document.querySelector('#timer').textContent = countdown;
let intro = document.querySelector('#intro').style.display = 'block';
let question1 = document.querySelector('#question1').style.display = 'none';
let question2 = document.querySelector('#question2').style.display = 'none';
let correctBtn = document.querySelector('#correctBtn');
let incorrectBtn = document.querySelector('#incorrectBtn');

document.getElementById("startBtn").addEventListener("click", function(){
    intro = document.getElementById('intro').style.display = 'none';
    question1 = document.getElementById('question1').style.display = 'block';
    countdown--;
    console.log("Score:", score);
});
// document.getElementById("correctBtn").addEventListener("click", function(){
if (document.getElementById('correctBtn').clicked == true) {
    score++;
    console.log("Score:", score);
    alert("Correct answer was clicked");

} else {
    countdown -= 5;
    console.log("Score:", score);
};
// });