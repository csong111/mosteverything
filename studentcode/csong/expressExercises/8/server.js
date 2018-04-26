const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

var webpage =
`
<form action='/submitForm' method='POST'>
Username: <input type='text' name='username'/>
Password: <input type='text' name='password'/>
Repeat: <input type='text' name='repeat'/>
<input type='submit'/>
</form>
`

app.get('/', (req, res) => res.send(webpage))

app.post('/submitForm', (req, res) => {
    if ((req.body).username.length > 1 && (req.body).password.length > 1 && (req.body).repeat === (req.body).password) {
        res.send('Success')
    } else res.send('Failure')
})

app.listen(3000, () => console.log('doing it on port 3000'))