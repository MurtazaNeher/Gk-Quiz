var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "John",
    score: 4
  },

  {
    name: "Harry",
    score: 4
  },

  {
    name: "Murtaza",
    score: 3
  },


]

// array of objects
var questions = [{
  question: " Who is the Father of our Nation? ",
  answer: "Mahatma gandhi"
},
{
  question: " Cleanest city of India?",
  answer: "Indore"
},
{
  question: "Who is captain of indian cricket team?",
  answer: "Virat Kohli"
},
{
  question: "Giddha is the folk dance of?",
  answer: "panjab"
},
{
  question: "How many colors does indian flag has?(answer in number)",
  answer: "3"
},
{
  question: "Most populated country in the world?",
  answer: "china"
},
];

function welcomeMssg() {
  var userName = readlineSync.question("What's your name? ");

  console.log("\nWelcome " + userName + " to 'DO YOU KNOW MURTAZA' ?\n");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: \n", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it\n");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcomeMssg();
game();
showScores();
