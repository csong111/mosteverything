const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

let serverState = {
    items: {},
}
app.post('/getMsgs', (req, res) => {
    let body = JSON.parse(req.body.toString());
    if (!serverState.items[body.name]) serverState.items[body.name] = [];
    console.log(serverState.items[body.name])
    res.send(JSON.stringify(serverState.items[body.name]))
})

app.post('/updateMsgs', (req, res) => {
    let body = JSON.parse(req.body.toString());
    if (!serverState.items[body.name]) serverState.items[body.name] = [];
    serverState.items[body.name] = serverState.items[body.name].concat(body.input)
    res.send(JSON.stringify(serverState.items[body.name]))
})

app.listen(4000, ()=>console.log('doing it on port 4000'))