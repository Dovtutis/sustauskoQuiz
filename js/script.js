//MANO VARIANTAS

let quizData = [
    {
        question:'Kuriais metais gimė Vytautas Šustauskas?',
        a: '1943',
        b: '1945',
        c: '1947',
        d: '1949',
        correct: 'b'
    },
    {
        question:'Kur gimė Vytautas Šustauskas?',
        a: 'Šiauliuose',
        b: 'Klaipėdoje',
        c: 'Kražiuose',
        d: 'Briduose',
        correct: 'c'
    },
    {
        question:'Kiek aukštojo mokslo studijų yra baigęs Vytautas Šustauskas',
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        correct: 'c'
    },
    {
        question:'Kaip vadinasi Vytauto Šustausko išleista eilėraščių knyga?',
        a: 'Ubagų Žygis',
        b: 'Ašara Dievo Aky - Lietuva Kur Tu Eini?',
        c: 'Mano Kaunas',
        d: 'Sunki Tiesa',
        correct: 'd'
    },
    {
        question:'Kokį žygį ogranizavo Vytautas Šustauskas 1997m. rugsėjo 7-10d.?',
        a: 'Ubagų žygis',
        b: 'Kauno žygis',
        c: 'Žygis už Lietuvą',
        d: 'Žygis už ūbagus',
        correct: 'a'
    },
    {
        question:'Kuriais metais Vytautas Šustauskas tapo Kauno miesto meru?',
        a: 1998,
        b: 2000,
        c: 2002,
        d: 2004,
        correct: 'b'
    },
    {
        question:'Kurio miesto mero pareigas ėjo Vytautas Šustauskas?',
        a: 'Kauno',
        b: 'Klaipėdos',
        c: 'Biržų',
        d: 'Palangos',
        correct: 'a'
    },
    {
        question:'Su kuriuo politiniu veikėjo 2016 metų rugsėjo mėn. susimušo Vytautas Šustauskas',
        a: 'Petru Gražuliu',
        b: 'Vytautu Landsbergiu',
        c: 'Juriju Subotinu',
        d: 'Laurynu Kasčiūnu',
        correct: 'c'
    },
    {
        question:'Kokiai politinei partijai nuo 1989m. atstovavo Vytautas Šustauskas?',
        a: 'Lietuvos Komunistų Partija',
        b: 'Lietuvos Sąjūdis',
        c: 'Lietuvos Krikščionių Partija',
        d: 'Lietuvos Laisvės Lyga',
        correct: 'd'
    },
    {
        question:'Su kokiu automobiliu sunkiai apgirtęs Vytautas Šustauskas 2005. pateko į avariją?',
        a: 'VW Passat',
        b: 'Chrysler 300 C',
        c: 'Opel Vectra',
        d: 'Audi 100',
        correct: 'b'
    },

];
let currentGameQuestions;
let randomNumber = 0;
let currentQuestion = {};
let correctAnswer;
let points;
let selectedAnswer;
let rbs;

const questionBox = document.getElementById('questionBox');
const submitButton = document.getElementById('submitButton');
const quizContainer = document.querySelector(".quiz-container");
const resultsDiv = document.getElementById('results');
const resultsText = document.getElementById('resultsText');
const labelA = document.getElementById('labelA');
const labelB = document.getElementById('labelB');
const labelC = document.getElementById('labelC');
const labelD = document.getElementById('labelD');
const startNewGame = document.getElementById('startNewGame');


startNewGame.addEventListener("click", startQuiz);
submitButton.addEventListener("click", checkCorrectAnswer);

startQuiz ()

function startQuiz (){
    points = 0;
    currentGameQuestions = [];
    currentGameQuestions = quizData.slice();
    quizContainer.style.display = 'block';
    resultsDiv.style.display = 'none';

    loadQuiz();
}

function loadQuiz() {
    randomNumber = Math.floor(Math.random() * currentGameQuestions.length);
    currentQuestion = currentGameQuestions[randomNumber];
    correctAnswer = currentQuestion['correct']; //Galima selectinti per skliaustus
    questionBox.innerText = currentQuestion.question; //Arba per taska
    currentGameQuestions.splice(randomNumber, 1);

    labelA.innerText = currentQuestion['a'];
    labelB.innerText = currentQuestion['b'];
    labelC.innerText = currentQuestion['c'];
    labelD.innerText = currentQuestion['d'];
}

function checkCorrectAnswer() {

    selectedAnswer = undefined;
    rbs = document.querySelectorAll('input[name="answer"]');

    for (const rb of rbs) {
        if (rb.checked) {
            selectedAnswer = rb.id;
            rb.checked = false;
            checkPoints();
        }
    }

    selectedAnswer === undefined ? alert("Pasirinkite teisingą atsakymo variantą") : null;

    //or
    // rbs.forEach((answer) =>{
    //    if (answer.checked) {
    //        selectedAnswer = answer.id;
    //        answer.checked = false;
    //    }
    // });
}

function checkPoints () {
    selectedAnswer === currentQuestion['correct'] ? points++ : null;

    if (currentGameQuestions.length === 0){
        quizContainer.style.display = 'none';
        resultsDiv.style.display = 'block';
        resultsText.innerText = `Jūs sutrinkote ${points} taškus iš 10`
    } else {
        loadQuiz();
    }
};

//FLORIN VARIANTAS


