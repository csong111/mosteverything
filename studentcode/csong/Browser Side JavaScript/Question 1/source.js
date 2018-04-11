var gameStatus = document.getElementById("gameStatus");
var body = document.getElementById("main");
var won = false;

function win () {
    won = true;
    gameStatus.innerText="you won!";
}
body.addEventListener('click', win);

function lose () {
    if (won == false) {
        gameStatus.innerText="you lost!";
        body.removeEventListener('click', win);
    }
}
setTimeout(lose, 1000);