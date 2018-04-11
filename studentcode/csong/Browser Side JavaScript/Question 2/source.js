var body = document.getElementById("main");
var gameStatus = document.getElementById("gameStatus");
var roundStarted = false;
var randomTime = Math.random() * (3000 - 1000) + 1000;
var succeeded = false;

function success() {
    succeeded = true;
    gameStatus.innerText = "you succeeded";
}

function success2(x) {
    succeeded = true;
    if (x.keyCode == 32) {
        gameStatus.innerText = "you succeeded";
    }
}

function notifyStart() {
    roundStarted = true;
    gameStatus.innerText = "round has begun";
    body.addEventListener('click', success);
    body.addEventListener('keypress', success2);
    setTimeout(fail, 500);
}

setTimeout(notifyStart, randomTime);

function fail() {
    if (succeeded === false) {
        gameStatus.innerText = "you failed";
        body.removeEventListener('click', success);
        body.removeEventListener('keypress', success2);
    }
}


