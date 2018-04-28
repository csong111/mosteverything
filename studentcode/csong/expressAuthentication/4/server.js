const express = require('express');
const app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var fs = require('fs');
var sha1 = require('sha1');

let webpage=
`
<div>
Sign Up:
<form action='signup' method='POST'/>
<input type='text' name='user' placeholder='username'/>
<input type='text' name='pass' placeholder='password'/>
<input type='submit'/>
</form>
</div>
<div>
Log In:
<form action='login' method='POST'/>
<input type='text' name='username' placeholder='username'/>
<input type='text' name='password' placeholder='password'/>
<input type='submit'/>
</form>
</div>
`

app.get('/', (req, res) => res.send(webpage));

info=fs.readFileSync('login.txt');
app.post('/signup', (req, res) => {
    info[req.body.user] = sha1(req.body.pass);
    fs.writeFileSync('login.txt', JSON.stringify(info));
    res.send('account created')
})

app.post('/login', (req, res) => {
    if (info[req.body.username] === sha1(req.body.password)) {
        res.send('success');
    } else res.send('failure');
    
})

app.listen(3000, ()=>console.log('doing it on port 3000'))