var mug = document.getElementById('mug');
var cup = document.getElementById('cup')
var randomTime = 1000*Math.round((Math.random()*(8-2)+2));
var audio = new Audio('slap.mp3');
var began = false;
var resetButton = document.createElement('button');

function playNoise () {
    cup.innerText="game starting. \nplayer 1: press Q. \nplayer 2: press P.";
    audio.play();
    began = true;
};

setTimeout(playNoise, randomTime);

function verifyPress(x){
    mug.removeEventListener('keydown', verifyPress);
    mug.appendChild(resetButton); 
    resetButton.innerText="play again?";
    resetButton.addEventListener('click', () => window.location.reload());
    if(!began) {
        if (x.keyCode === 81) {
            cup.innerText="player 1, you lost";
        }
        if (x.keyCode === 80) {
            cup.innerText="player 2, you lost";
        }
    }
    else {
        if (x.keyCode === 81) {
            cup.innerText="player 1, you win.";
        }
        if (x.keyCode === 80){
            cup.innerText="player 2, you win.";
        }
    }
}
mug.addEventListener('keydown', verifyPress);