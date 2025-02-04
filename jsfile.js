const questions = [
    {
        questions: "What type of date do you want?",
        answers:[
            {text:"Cinema Date", correct:true},
            {text:"Stay At home winking face", correct:true},
            {text:"Go Ice Skating", correct:true},
            {text:"Go To some restaurant", correct:true},
            {text:"Ontario Lake Date", correct:true},
        ]
    },
    {
        questions: "WHat Foods Do you want?",
        answers:[
            {text:"SUSHI", correct:true},
            {text:"Jollibee", correct:true},
            {text:"Owl Of Minerva", correct:true},
            {text:"Shawarma", correct:true},
            {text:"Cafe foods", correct:true},
        ]
    },
    {
        questions: "Our DATE will Happen in?",
        answers:[
            {text:"Feb 17", correct:true},
            {text:"Feb 9", correct:true},
            {text:"Feb 14", correct:true},
            {text:"Feb 15", correct:true},
            {text:"Feb 16", correct:true},
        ]
    },
    {
        questions: "Do you want to be Nasty Nasty...hehehe?",
        answers:[
            {text:"YES NO QUESTIONS ASK", correct:true},
            {text:"YES WITH PROTECTION", correct:true},
            {text:"YES WITH STRAPS", correct:true},
            {text:"ALL OF THE ABOVE", correct:true},
            {text:"NO (BOOOOOO)", correct:true},
        ]
    }
];

const questionElement = document.getElementById("questions")
const answerButtons = document.getElementById("answers")
const nextButton = document.getElementById("next-button")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionsNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionsNo + ".  " + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn1");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswers);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswers(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === true;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((Button) => {
        if(answerButtons.dataset.correct === "true"){
            answerButtons.classList.add("correct");
        }
    });
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();