const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

let serverState = {
    items: [],
}

let userInfo = {};

let sessionInfo = {};

app.post('/getMsgs', (req, res) => {
    let body = JSON.parse(req.body.toString());
    if (body.sessionID in sessionInfo) {
        res.send(JSON.stringify(serverState.items))
    } else {
        res.send(JSON.stringify('fail'))
    }
})

app.post('/updateMsgs', (req, res) => {
    let body = JSON.parse(req.body.toString());
    if (body.sessionID in sessionInfo){
        serverState.items = serverState.items.concat({ username: sessionInfo[body.sessionID], content: body.input })
        if (serverState.items.length >10) serverState.items = serverState.items.slice(Math.max(serverState.items.length-10,1));
        res.send(JSON.stringify(serverState.items))
    } else {
        res.send(JSON.stringify('stop!'))
    }
    
})

app.post('/signup', (req, res)=> {
    let body = JSON.parse(req.body.toString())
    if (!body.name || !body.pw) return res.send(JSON.stringify('Please sign up before continuing'))
    let sessionID = Math.floor(Math.random()*100000)
    if (userInfo[body.name]) res.send(JSON.stringify('account already created'))
    else { 
        userInfo[body.name] = body.pw;
        sessionInfo[sessionID] = body.name;
        res.send(JSON.stringify(sessionID))
    }
})

app.post('/signin', (req, res) => {
    let body = JSON.parse(req.body.toString())
    if (!body.name || !body.pw) return res.send(JSON.stringify('Incorrect credentials'))
    let sessionID = Math.floor(Math.random()*100000)
    if (userInfo[body.name] === body.pw) {
        sessionInfo[sessionID] = body.name;
        serverState.items = serverState.items.concat({username: "great news", content: body.name+ ' has joined'})
        res.send(JSON.stringify(sessionID))
    } 
    else res.send(JSON.stringify('login failed'))
})
app.listen(4000, ()=>console.log('doing it on port 4000'))