var mug = document.getElementById('mug');
var cup = document.getElementById('cup')
var randomTime = 1000*Math.round((Math.random()*(8-2)+2));
var audio = new Audio('gonghit.mp3');
var began = false;
var resetButton = document.createElement('button');
mug.style.backgroundImage = "url('emerald_site.gif')";
var leftAvatar = document.getElementsByClassName('leftAvatar')[0];
var rightAvatar = document.getElementsByClassName('rightAvatar')[0];

function playNoise () {
    cup.innerText="GAME STARTING \nPlayer 1: press Q. \nPlayer 2: press P.";
    audio.play();
    began = true;
    leftAvatar.className="leftAvatar";
    rightAvatar.className="rightAvatar";
};

var noiseTimeout = setTimeout(playNoise, randomTime);

function verifyPress(x){
    clearTimeout(noiseTimeout);
    if (x.keyCode !== 81 && x.keyCode!== 80) return;
    resetButton.addEventListener('click', () => window.location.reload());
    if(!began) {
        if (x.keyCode === 81) {
            cup.innerText="Player 1: the earlybird does NOT get the worm.";
        }
        if (x.keyCode === 80) {
            cup.innerText="Player 2: you would've been disqualified if you were in the Olympics.";
        }
    }
    else {
        if (x.keyCode === 81) {
            cup.innerText="Player 1: surprisingly, you won this time!";
        }
        if (x.keyCode === 80){
            cup.innerText="Player 2: this isn't a real game, though!";
        }
    }
    mug.removeEventListener('keydown', verifyPress);
    mug.appendChild(resetButton); 
    resetButton.innerText="try again?";
    resetButton.style.color='coral';
    resetButton.style.backgroundSize='large';
    resetButton.style.backgroundColor='black';
    resetButton.className='butty';
}
mug.addEventListener('keydown', verifyPress);