var roundStarted = false;
var bod = document.getElementById("bodacious");
var divine = document.getElementById("divine");
var randomTime = Math.random() * (3000-1000) + 1000;
var succeeded = false;

function youFail () {
    if (succeeded == false) {
        divine.innerText="you messed up";
        bod.removeEventListener('click', youWin);
        bod.removeEventListener('keypress', youWin2);
}
}
function youWin() {
    succeeded = true;
    divine.innerText="that's it, sweetie!";
}
function youWin2 (x) {
    succeeded = true;
    if (x.keyCode == 32) {
        divine.innerText="that's it, sweetie!";
    }
}
function helloMessage () {
    divine.innerText="it's ON!";
    button.remove();
    bod.addEventListener('click', youWin);
    bod.addEventListener('keypress', youWin2);
    setTimeout(youFail, 500);
}

function startMessage () {
    setTimeout(helloMessage, randomTime);
}

var button = document.createElement('button');
bod.appendChild(button);
button.innerText="coucou";
button.addEventListener('click', startMessage);


