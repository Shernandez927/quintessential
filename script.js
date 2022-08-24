
// Quiz Questions
const questions = [
    {
        number: 1,
        question: "Who did Robert Baratheon name as Protector of the Realm before his death?",
        answer: "Ned Stark",
        choices: ["Ned Stark", "Joffrey Baratheon", "Stannis Baratheon", "Renly Baratheon"]
    },
    {
        number: 2,
        question: "What is the sigil for House Bolton?",
        answer: "A flayed man",
        choices: ["A trout", "A stag", "A flayed man", "A direwolf"]
    },
    {
        number: 3,
        question: "Where was Talisa Maegyr from?",
        answer: "Volantis",
        choices: ["KingsLanding", "Dorne", "Essos", "Volantis"]
    },
    {
        number: 4,
        question: "Who trades Daenerys to the Dorthraki in exchange for an army?",
        answer: "Viserys",
        choices: ["Jorah Mormont", "Viserys", "Varys", "Khal Drogo"]
    },
    {
        number: 5,
        question: "Which of Daenerys's dragons is killed and then resurrected by the Night King?",
        answer: "Viserion",
        choices: ["Drogon", "Rhaegal", "Viserion", "Bastion"]
    },
    {
        number: 6,
        question: "What religion do the Brotherhood Without Banners preach?",
        answer: "The Lord of Light",
        choices: ["The Faith of the Seven", "The Lord of Light", "The Many-Faced God of Death", "Ghiscari"]
    },
    {
        number: 7,
        question: "Who does Arya train with in Braavos?",
        answer: "Jaqen H'ghar",
        choices: ["Jaqen H'ghar", "Syrio Forel", "The Hound", "Brienne of Tarth"]
    },
    {
        number: 8,
        question: "What animal is on Gendry Baratheon's helmet?",
        answer: "A bull's head",
        choices: ["A hound's head", "A stag's head", "A bull's head", "A direwolf's head"]
    },
    {
        number: 9,
        question: "What language is commonly used by the Red Priestess and Daenerys?",
        answer: "High Valyrian",
        choices : ["High Valyrian", "Low Valyrian", "Old Tongue of the First Men", "Dothraki"]
    },
    {
        number: 10,
        question: "Who offers to be Tyrion's champion in a trial by combat in Kingslanding after Joffrey's death?",
        answer: "Oberyn Martell",
        choices: ["The Hound", "Tywin Lannister", "Oberyn Martell", "The Mountain"]
    }
]

let finalScore = 100;


function startQuiz(){
    console.log("hi");
}
const timer = document.getElementById("timeleft");

// variables for question and answer section
var questionTitle = document.getElementById("questionasked");
var choiceA = document.getElementById("choice1");
var choiceB = document.getElementById("choice2");
var choiceC = document.getElementById("choice3");
var choiceD = document.getElementById("choice4");

//variables for final score initial submission and leaderboard
const finalResult = document.getElementById("finalscore");
const initialInput = document.getElementById("initialtext");
const goBack = document.getElementById("backtomain");
const viewLeaderboard = document.getElementById("leaderboardbtn");

// variable and event listener to start quiz
const beginQuizButton = document.querySelector(".startbtn");
beginQuizButton.addEventListener("click", startQuiz);
