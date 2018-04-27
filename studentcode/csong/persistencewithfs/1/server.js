const express = require('express')
const app = express();
var fs = require('fs')
//var bodyParser=require('body-parser')
//app.use(bodyParser.raw({type: '*/*'}))

app.get('/problemone', (req, res) => {
    var num = '';
    var numstring ='';
    for (let i=0; i<101; i++) {
      num = num + "<div>" + Math.floor(Math.random()*360) + "</div>"
      numstring = numstring + Math.floor(Math.random()*360) + '\n'
    }
    fs.writeFileSync('numbers.txt', numstring);
    res.send("<div>" + num + "</div>");
}
)

//var r = fs.readFileSync('numbers.txt').toString();
//num = JSON.parse(r);

app.listen(3000, ()=>console.log('doing it on port 3000'))