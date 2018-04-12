var shirt = document.getElementById("shirt");
var dove = document.getElementById("dove");
var randomNum = Math.round(Math.random()*(10-1)+1);
var randomTime = 1000*(randomNum*0.4 + 1);
var allButtonsClicked = false;
var buttonClicked = false;
var reStart = document.createElement('button');

function resetGame () {
    window.location.reload();
}

var count = 0;
function nextStep (clickedButton) {
    event.stopPropagation();
    buttonClicked = true;
    clickedButton.remove();
    count++;
    if (count == randomNum) {
        allButtonsClicked = true;
        dove.innerText="you surprised me!";
        shirt.appendChild(reStart);
        reStart.innerText="try again?";
        reStart.addEventListener('click', resetGame);
    }
}
function youLose() {
    if (allButtonsClicked == false) {
    dove.innerText="you lost"; 
    shirt.appendChild(reStart);
    reStart.innerText="try again?";
    reStart.addEventListener('click', resetGame);
}
}
var buttons = []
function startGame () {
    event.stopPropagation();
   startButton.remove();
   for (let i=0; i<randomNum; i++) {
    buttons[i]=document.createElement('button');
    buttons[i].innerText="don't you wish?";
    buttons[i].style.left=Math.random()*1300+1+"px";
    buttons[i].style.bottom=Math.random()*445+1+"px";
    buttons[i].style.position='absolute';
    shirt.appendChild(buttons[i]);
    shirt.addEventListener('click', youLose);
    buttons[i].addEventListener('click', () => nextStep(buttons[i]));
   };
   setTimeout(youLose, randomTime);
}
var startButton=document.createElement('button');
shirt.appendChild(startButton);
startButton.innerText="do you dare?";
startButton.addEventListener('click', startGame);