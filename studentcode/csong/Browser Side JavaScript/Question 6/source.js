var bod=document.getElementById("bod");
var clam=document.getElementById("clam");
var buttonsClicked=false;

function youWin() {
    buttonsClicked=true;
    clam.innerText="you're so naughty!";
};
function noDice() {
    if (buttonsClicked == false) {
        clam.innerText="better luck next time... or not!"
        buttons[i].removeEventListener('click', youWin);
    }
};
var buttons = []
function makeButton () {
    for (i=0; i<5; i++) {
        buttons[i]=document.createElement('button');
        startButton.remove();
        buttons[i].innerText="~catch me if you can~ ;)";
        buttons[i].style.color='pink';
        buttons[i].style.backgroundColor='black';
        buttons[i].style.left=Math.random()*1200+1+"px";
        buttons[i].style.top=Math.random()*600+1+"px";
        buttons[i].style.position='absolute';
        buttons[i].addEventListener('click', youWin);
        bod.appendChild(buttons[i]);};
        buttons=buttons+buttons[i];
        setTimeout(noDice, 3000);
}

var startButton=document.createElement('button');
bod.appendChild(startButton);
startButton.innerText="...enter the void...";
startButton.style.color='pink';
startButton.style.backgroundColor='black';
startButton.addEventListener('click', makeButton);
