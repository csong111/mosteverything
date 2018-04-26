const express=require('express')
const app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.raw({type: '*/*'}))

app.post('/blast', (req, res) =>{
    if (JSON.parse(req.body).username === 'foo' & JSON.parse(req.body).password === 'bar') {
        res.send('success')
    }
    else res.send('failure')
} )

app.listen(3000, ()=> console.log('doing it on port 3000'))