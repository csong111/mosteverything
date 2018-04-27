const express=require('express')
const app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.raw({type: '*/*'}))

app.post('/blast', (req, res) =>{
    let contents = JSON.parse(req.body); //store JSON.parse(req.body) to not slow down the conditional evaluation
    if (contents.username === 'foo' && contents.password === 'bar') {
        res.send('success')
    }
    else res.send('failure')
} )

app.listen(3000, ()=> console.log('doing it on port 3000'))