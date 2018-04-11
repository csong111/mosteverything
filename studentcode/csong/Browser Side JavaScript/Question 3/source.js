var bod = document.getElementById("bod");
var lstatus = document.getElementById("status");
var roundStarted = false;
var randomTime = Math.random() * (3000-1000)+1000;
var buttonClicked = false;

function youWin () {
    buttonClicked = true;
    lstatus.innerText = "you won";
}
function clickWrong () {
    buttonClicked = false;
    if (buttonClicked == false);
        lstatus.innerText = "you lost";
}
function startRound () {
    roundStarted = true;
    var button = document.createElement('button');
    bod.appendChild(button)
    button.innerText="click this";
    button.style.top=Math.random() * 450 + 1 + "px";
    button.style.right=Math.random() * 1400 + 1 + "px";
    button.style.position='absolute';
    button.addEventListener('click', youWin)
    setTimeout(clickWrong, 1500);
}
setTimeout(startRound, randomTime);
