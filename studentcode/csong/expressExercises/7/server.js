const express=require('express')
const app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

var webpage = 
`
<form action='/hello' method='POST'>
    <input type='text' name= 'username' placeholder='username'/>
    <input type-'text name= 'password' placeholder='password'/>
    <input type='submit'/>
</form>


`
app.get('/', (req, res) => res.send(webpage))

app.post('/hello', (req, res) => {
    if (req.body.username.length > 9 && req.body.password.length > 9) {
        res.send('success')
    }
    else res.send('failure')
})

app.listen(3000, () => console.log('doing it on port 3000'))

//alternate way if using app.use(bodyParser.raw({type: '*/*'}))
//username=hotdog&password=123456
//let componenets=req.body.toString().split('&')
//console.log(components[0]) => username=hotdog
//console.log(components[1]) => password=123456
//let usernameComponents=components[0]
//let passwordComponents=components[1]
//usernamePart=usernameComponents.split('=') => ['username', 'hotdog']
//passwordPart=passwordComponents.split('=') =< ['password, '123456]
//let username = usernamePart[1] => 'hotdog'
//let password = passwordPart[1] => '123456'
