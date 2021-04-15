const recentScore = localStorage.getItem('recentScore');
console.log(recentScore);

if (recentScore){
    const yourScore = document.querySelector('#yourScore');
    yourScore.innerHTML = 'Your Score: ' + recentScore;
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