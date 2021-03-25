// // timer
// const timeLeft = 100;
// const timer = document.getElementById('timer');
// const timerId = setInterval(countdown, 1000);

// function countdown() {
//     if (timeLeft == -1) {
//         clearTimeout(timerId);

//     } else {
//         timer.innerHTML = timeLeft + ' seconds remaining';
//         timeLeft--;
//     }
// }

let questions = [
    { question: "What does the D in CRUD stand for?", answer: "Delete Destroy Dance Deploy", answerCheck: 0 },
    { question: "What version was the arrow function introduced?", answer: "ES4 ES5 ES6 ES7", answerCheck: 2 },
    { question: "What property is used to access a location in an object?", answer: "Index Rout Key Claw", answerCheck: 2 },
    { question: "What is used to access a location in an array?", answer: "Index Rout Key Claw", answerCheck: 0 },
    { question: "What is the html landing page file named?", answer: "lp.html home.html front.html index.html", answerCheck: 3 },
    { question: "What is used to style an html page?", answer: "JS CSS API CRUD", answerCheck: 1 },
  ];
let score = 0;
let i = 0;
let t = 120
let body = document.body;
let splitAnswer = questions[i].answer.split(" ");
let currentQuestion = questions[i].question

let Q = document.querySelector('#question')
let A1 = document.querySelector('#a')
let A2 = document.querySelector('#b')
let A3 = document.querySelector('#c')
let A4 = document.querySelector('#d')

localStorage.setItem('youGotHighScore', false)

//set initial question
Q.textContent = currentQuestion;
//set initial answers
A1.textContent = "1. " + splitAnswer[0]
A2.textContent = "2. " + splitAnswer[1]
A3.textContent = "3. " + splitAnswer[2]
A4.textContent = "4. " + splitAnswer[3]


let changeAnswers = (answerValue) => {
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
let timer = document.querySelector('#timer');
let goToNewPage = false;
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

    let check = localStorage.getItem('check');

    //if check = checked then there is a list of players
    if (check === 'checked') {
        let localStoragePlayers = localStorage.getItem('players');
        let highScore = localStoragePlayers.split('/');

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
