var bod=document.getElementById("bod");
var diva=document.getElementById("diva");
var buttonClicked=false;

function reset () {
    window.location.reload();

}

var reload = document.createElement('button');

function youWin () {
    buttonClicked=true;
    diva.innerText="WIN";
    button2.remove();
    reload.innerText="Reset game";
    bod.appendChild(reload);
    reload.addEventListener('click', reset);
}

function youLose () {
    if (buttonClicked == false) {
        diva.innerText="LOSE";
        button2.removeEventListener('click', youWin);
        button2.remove();
        reload.innerText="Reset game";
        bod.appendChild(reload);
        reload.addEventListener('click', reset);
    }
}
function startGame() {
    diva.innerText="game starting~";
    button.remove();
    button2.innerText="are you sure?"
    bod.appendChild(button2);
    button2.style.right=Math.random()*1400+1+"px";
    button2.style.top=Math.random()*450+1+"px";
    button2.style.position='absolute'
    button2.addEventListener('click', youWin);
    setTimeout(youLose, 1500);
}

var button=document.createElement('button');
bod.appendChild(button);
button.innerText="start";
button.addEventListener('click', startGame);
var button2=document.createElement('button');
