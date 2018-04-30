const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.urlencoded({extended: true}))

let webpage = 
`
<div>
Login:
<form action = '/signin' method='POST'>
<input type='text' name='username' placeholder='username'/>
<input type='text' name= 'password' placeholder='password'/>
<input type='submit'/>
</form>
</div>
<div>
Sign-up:
<form action = '/signup' method='POST'>
<input type='text' name='newUser' placeholder='username'/>
<input type='text' name='newPass' placeholder='password'/>
<input type='submit'/>
</form>
</div>

`

// fs.writeFileSync('login.txt')

app.get('/', (req, res) => res.send(webpage));

let info = fs.readFileSync('login.txt');
app.post('/signup', (req, res) => {
    info[req.body.newUser]=req.body.newPass;
    fs.writeFileSync('login.txt', JSON.stringify(info))
    res.send('account created');
})

app.post('/signin', (req, res) => {
    if (info[req.body.username] === req.body.password) {
        res.send('login successful');
    } else res.send('login failed :(');
})

app.listen(3000, ()=>console.log('doing it on port 3000'));