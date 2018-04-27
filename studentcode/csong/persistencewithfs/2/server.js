const express = require('express');
const app = express()
var fs = require('fs')

app.get('/random', (req, res) => {
var num = '';
var numNoDiv = '';

for (let i=0; i<11; i++){
    num = num + '<div>' + Math.floor(Math.random()*300) + '</div>';
    numNoDiv = numNoDiv + Math.floor(Math.random()*300) + '\n';
}
fs.writeFileSync('values.txt', numNoDiv);
res.send('<div>'+num+'</div>');
})

app.listen(3000, ()=>console.log('doing it on port 3000'))