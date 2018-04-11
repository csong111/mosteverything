var dadbod = document.getElementById("dadbod");
var venus = document.getElementById("venus");
var buttonClicked = false;

function winMessage () {
    buttonClicked = true;
    venus.innerText="You win $10,000!";
}
function sashay () {
    if (buttonClicked == false) {
    venus.innerText="Sashay away.";
    console.log(button2)
    button2.removeEventListener('click', winMessage);
}
}
function startMessage () {
    venus.innerText="YAS QUEEN, LET'S GO!";
    button.remove();
    dadbod.appendChild(button2);
    button2.innerText="Think you have what it takes?!";
    button2.style.right=Math.random() * 1400 + 1 + "px";
    button2.style.bottom=Math.random() * 500 + 1 + "px";
    button2.style.position = 'absolute';
    button2.addEventListener('click', winMessage);
    setTimeout(sashay, 1500);
}
var button = document.createElement('button');
dadbod.appendChild(button);
button.innerText="ALOHA";
button.addEventListener('click', startMessage);
var button2 = document.createElement('button');
