const express=require('express')
const app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

var webpage = 
`
<form action='/hello' method='POST'>
    Username:<input type='text' name='username'/>
    Password:<input type-'text name='password'/>
    <input type='submit'/>
</form>


`
app.get('/', (req, res) => res.send(webpage))

app.post('/hello', (req, res) => {
    if ((req.body).username.length > 9 && (req.body).password.length > 9) {
        res.send('success')
    }
    else res.send('failure')
})

app.listen(3000, () => console.log('doing it on port 3000'))