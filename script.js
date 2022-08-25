// Quiz Questions
const questions = [
  {
    // number: 1,
    question:
      "Who did Robert Baratheon name as Protector of the Realm before his death?",
    answer: "Ned Stark",
    choices: ["Ned Stark", "Joffrey Baratheon", "Stannis Baratheon","Renly Baratheon"],
  },
  {
    // number: 2,
    question: "What is the sigil for House Bolton?",
    answer: "A flayed man",
    choices: ["A trout", "A stag", "A flayed man", "A direwolf"],
  },
  {
    // number: 3,
    question: "Where was Talisa Maegyr from?",
    answer: "Volantis",
    choices: ["KingsLanding", "Dorne", "Essos", "Volantis"],
  },
  {
    // number: 4,
    question: "Who trades Daenerys to the Dorthraki in exchange for an army?",
    answer: "Viserys",
    choices: ["Jorah Mormont", "Viserys", "Varys", "Khal Drogo"],
  },
  {
    // number: 5,
    question:
      "Which of Daenerys's dragons is killed and then resurrected by the Night King?",
    answer: "Viserion",
    choices: ["Drogon", "Rhaegal", "Viserion", "Bastion"],
  },
  {
    // number: 6,
    question: "What religion do the Brotherhood Without Banners preach?",
    answer: "The Lord of Light",
    choices: [
      "The Faith of the Seven",
      "The Lord of Light",
      "The Many-Faced God of Death",
      "Ghiscari",
    ],
  },
  {
    // number: 7,
    question: "Who does Arya train with in Braavos?",
    answer: "Jaqen H'ghar",
    choices: ["Jaqen H'ghar", "Syrio Forel", "The Hound", "Brienne of Tarth"],
  },
  {
    // number: 8,
    question: "What animal is on Gendry Baratheon's helmet?",
    answer: "A bull's head",
    choices: [
      "A hound's head",
      "A stag's head",
      "A bull's head",
      "A direwolf's head",
    ],
  },
  {
    // number: 9,
    question:
      "What language is commonly used by the Red Priestess and Daenerys?",
    answer: "High Valyrian",
    choices: [
      "High Valyrian",
      "Low Valyrian",
      "Old Tongue of the First Men",
      "Dothraki",
    ],
  },
  {
    // number: 10,
    question:
      "Who offers to be Tyrion's champion in a trial by combat in Kingslanding after Joffrey's death?",
    answer: "Oberyn Martell",
    choices: ["The Hound", "Tywin Lannister", "Oberyn Martell", "The Mountain"],
  },
];

// variables for beginning question index, and score
var finalScore = 0;
// let totalTime = 90;
var questionIndex = 0;

function startQuiz() {
  questionIndex = 0;
  totalTime = 90;
  timer.textContent = totalTime;
  // hides leaderboard button and intro elements and displays question elements
  viewLeaderboard.style.display = "none";
  quizIntro.style.display = "none";
  quizQuestionsSection.style.display = "block";
  answerCheck.style.display = "block";
  // timer function
  var startTimer = setInterval(function () {
    if (totalTime >= 0) {
      timer.textContent = totalTime + " seconds remaining";
      totalTime--;
    } else if (totalTime === 0 || questionIndex < questions.length - 1) {
      clearInterval(startTimer);
      gameOver();
    }
  }, 1000);

  newQuestion();
}

// function to display questions from object
function newQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(e) {
  if (questions[questionIndex].answer === e.target.innerHTML) {
    answerCheck.textContent = "Correct!"; // displays correct feedback after answer is selected
    finalScore++;
    // questionIndex++;
    // newQuestion();
  } else {
    answerCheck.textContent = "Incorrect, you lost 10 seconds of time"; // displays incorrect feedback after wrong answer is selected
    totalTime -= 10;
    // finalScore--;
    // questionIndex++;
    // newQuestion();
  }
    questionIndex++;
    // newQuestion();
  // if statement to que to next question
  if (questionIndex < questions.length) {
    newQuestion();
  } else {
    gameOver();
  }
}

function gameOver() {
  quizEnd.style.display = "block";
  viewLeaderboard.style.display = "none";
  quizIntro.style.display = "none";
  quizQuestionsSection.style.display = "none";
  answerCheck.style.display = "none";

  finalResult.textContent = finalScore;

}

function storeInitials(event) {
  event.preventDefault();

  if(initValue.value === "") {
    window.alert("Please enter initials");
    return;
  } else {
    highScoreName.textContent = initValue.value + " " + finalScore + "/10";
  }
  var storeInitials = localStorage.setItem("highScoreName", JSON.stringify(highScoreName));
  var alreadyStoredInitials = JSON.parse(localStorage.getItem("highscorename"));
  // localStorage.setItem(initValue)
  showLeaderboard();
}

// function to display leaderboard before and after taking quiz
function showLeaderboard() {
  leaderBoard.style.display = "block";
  quizIntro.style.display = "none";
  quizEnd.style.display = "none";
}

// function to return to main screen after viewing leaderboard
function backToMain() {
  leaderBoard.style.display = "none";
  quizIntro.style.display = "block";
}

// variables for timer
const timer = document.getElementById("timeleft");
const quizIntro = document.getElementById("quizbegin");

// variables for question and answer section
var quizQuestionsSection = document.getElementById("quizquestions");
var questionTitle = document.getElementById("questionasked");
var choiceA = document.getElementById("choice1");
var choiceB = document.getElementById("choice2");
var choiceC = document.getElementById("choice3");
var choiceD = document.getElementById("choice4");
var answerCheck = document.getElementById("answercheck");

// event listeners for answer buttons to check for correctness
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);

//variables for final score initial submission and leaderboard
const quizEnd = document.getElementById("quizend");
var finalResult = document.getElementById("finalscore");
var initValue = document.getElementById("initialtext");
var highScoreName = document.getElementById("highscoretext")
const initialInput = document.getElementById("submitbtn");
const leaderBoard = document.getElementById("leaderboard");
const goBack = document.getElementById("backtomain");
goBack.addEventListener("click", backToMain);
const viewLeaderboard = document.getElementById("leaderboardbtn");
viewLeaderboard.addEventListener("click", showLeaderboard);

// event listeners to initialize startQuix function
const beginQuizButton = document.querySelector(".startbtn");
beginQuizButton.addEventListener("click", startQuiz);

//
initialInput.addEventListener("click", storeInitials);
