const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

let serverState = {
    items: {},
}

app.post('/items', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    if (!serverState.items[parsedBody.ln]) serverState.items[parsedBody.ln]=[]
    res.send(JSON.stringify(serverState.items[parsedBody.ln]));
})

app.post('/addItem', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    if (!serverState.items[parsedBody.ln]) serverState.items[parsedBody.ln]=[]
    serverState.items[parsedBody.ln] = serverState.items[parsedBody.ln].concat(parsedBody.input)
    res.send(JSON.stringify(serverState.items[parsedBody.ln]));
})

app.post('/reverse', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    res.send(JSON.stringify(serverState.items[parsedBody.ln].reverse()))
})

app.post('/delete', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    res.send(JSON.stringify(serverState.items[parsedBody.ln]=[]))
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))
