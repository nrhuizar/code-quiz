const questions = [
    { question: "Which is NOT a part of CRUD?", answer: "Create Repeat Update Deconste", answerCheck: 1 },
    { question: "Which reference means this or this?", answer: "=== && || //", answerCheck: 2 },
    { question: "Arrays in JavaScript contain ___.", answer: "data secrets everything conditionals", answerCheck: 0 },
    { question: "Where push and pull front end data?", answer: "localStorage reality word.doc localSession", answerCheck: 0 },
    { question: "What is the html landing page file named?", answer: "lp.html home.html front.html index.html", answerCheck: 3 },
    { question: "What is used to style an html page?", answer: "JS CSS API CRUD", answerCheck: 1 },
  ];
const score = 0;
const i = 0;
const t = 100
const body = document.body;
const splitAnswer = questions[i].answer.split(" ");
const currentQuestion = questions[i].question

const Q = document.querySelector('#question')
const A1 = document.querySelector('#a')
const A2 = document.querySelector('#b')
const A3 = document.querySelector('#c')
const A4 = document.querySelector('#d')

localStorage.setItem('youGotHighScore', false)

//set initial question
Q.textContent = currentQuestion;
//set initial answers
A1.textContent = "1. " + splitAnswer[0]
A2.textContent = "2. " + splitAnswer[1]
A3.textContent = "3. " + splitAnswer[2]
A4.textContent = "4. " + splitAnswer[3]


const changeAnswers = (answerValue) => {
    if (questions[i].answerCheck == answerValue) {
        score++;
        console.log(score, 'Current correct answers.');
    } else if (questions[i].answerCheck != answerValue) {
        t = t-10;
    }
        i++;
        currentQuestion = questions[i].question;
        Q.textContent = currentQuestion;
        splitAnswer = questions[i].answer.split(" ");
        A1.textContent = "1. " + splitAnswer[0];
        A2.textContent = "2. " + splitAnswer[1];
        A3.textContent = "3. " + splitAnswer[2];
        A4.textContent = "4. " + splitAnswer[3];
}

A1.addEventListener('click', () => {
    changeAnswers(0);
})

A2.addEventListener('click', () => {
    changeAnswers(1);
});

A3.addEventListener('click', () => {
    changeAnswers(2);
});

A4.addEventListener('click', () => {
    changeAnswers(3);
});

//timer
const timer = document.querySelector('#timer');
const goToNewPage = false;
timer.textContent = 'Timer: ' + t + ' seconds';

setInterval ( () => { 
    if (t === 0 || i === questions.length) {
    clearInterval()
    finalScore = t+score;
    console.log('final score: ', finalScore)
    localStorage.setItem('recentScore', finalScore);
        t=-1;
        i++;

    
        while(!initials){
            var initials = prompt('What are your initials?');
        }

    const check = localStorage.getItem('check');

    //if check = checked then there is a list of players
    if (check === 'checked') {
        const localStoragePlayers = localStorage.getItem('players');
        const highScore = localStoragePlayers.split('/');

        //If the players current score is > than the high score update high score
        if (finalScore > highScore[1]){
        localStorage.setItem('players', initials + '/' + finalScore)
        localStoragePlayers = localStorage.getItem('players');
        localStorage.setItem('youGotHighScore', true)
        goToNewPage = true;
        } else{
        goToNewPage = true;
        }
    } else{
        localStorage.setItem('players', initials + '/'+ finalScore);
        localStorage.setItem('check', 'checked')
        localStorage.setItem('youGotHighScore', true)
        goToNewPage = true;
    }

} else if (t > 0){
    console.log(i)
    t--;
    timer.textContent = 'Timer: ' + t + ' seconds';
    return;
};
if (goToNewPage === true) {
    console.log(goToNewPage)
    window.location='./highscore.html';
}
}, 1000);

const recentScore = localStorage.getItem('recentScore');
console.log(recentScore);

const yourScore = document.querySelector('.score');
if (recentScore){
yourScore.textContent = 'Your Score: ' + recentScore;
}
const showHighScore = localStorage.getItem('players').split('/');
    const highScoreInitials = document.querySelector('#initials');
    const highScoreScore = document.querySelector('#highScore');
    highScoreInitials.textContent = "Initials: " + showHighScore[0].toUpperCase();
    highScoreScore.textContent = "Score: " + showHighScore[1];


const youGotHighScore = document.querySelector('h1');
if (localStorage.getItem('youGotHighScore') == 'true'){
    youGotHighScore.textContent = 'You Got The High Score!'
}
