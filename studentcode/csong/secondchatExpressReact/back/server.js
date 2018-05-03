const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.raw({ type: '*/*' }))

let serverState= {
    items: {}
}

app.post('/submit', (req, res) => {
    let bod = JSON.parse(req.body.toString());
    if (!serverState.items[bod.username]) serverState.items[bod.username] = [];
    serverState.items[bod.username] = serverState.items[bod.username].concat(bod.inputM);
    res.send(JSON.stringify(serverState.items[bod.username]));
})

app.post('/messages', (req, res) => {
    let bod = JSON.parse(req.body.toString());
    if (!serverState.items[bod.username]) serverState.items[bod.username] = [];
    res.send(JSON.stringify(serverState.items[bod.username]));
})

app.listen(5000)