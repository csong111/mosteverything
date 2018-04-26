const express=require('express')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.raw({type: '*/*'}))

var webpage=
`
<form action='/hello' method='POST'>
    <input type='text' username='somename'/>
    <input type='text' password='someword'/>
    <input type='submit'/>
</form>
`
app.get('/', (req, res) => res.send(webpage))

app.post('/hello', (req, res) => {
    if (JSON.parse(req.body).username && JSON.parse(req.body).password) {
        res.send('success')
    }
    else res.send('failure')
})

app.listen(3000, ()=> console.log('Doing it on port 3000'))