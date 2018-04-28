const express = require('express');
const app = express();
var fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

let loginFirst = 
`
<form action='/submit' method='POST'>
Favourite animal? <input type='text' name='animal'/>
<input type='submit'/>
</form>

`
fs.writeFileSync('animal.txt', ''); //create empty animal.txt file before kickoff

app.get('/', (req, res) => {
   var r = fs.readFileSync('animal.txt').toString();
    if (r.length > 0) {
        res.send(r);
    }
    else res.send(loginFirst)});

app.post('/submit', (req, res) => {
    //console.log(req.body.animal)
    fs.writeFileSync('animal.txt', req.body.animal);
    //res.redirect('/');
})

app.listen(3000, ()=>console.log('doing it on port 3000'))
