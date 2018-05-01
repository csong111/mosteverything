const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))


// The following two endpoints are so that the browser can load the HTML and Javascript
app.get('/', (req, res) => res.send(fs.readFileSync('./public/index.html').toString()))
app.get('/app.js', (req, res) => res.send(fs.readFileSync('./public/app.js').toString()))

// 
let serverState = {
    items: {},
    listName: 'grocery list',
}

app.post('/items', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let listName = parsedBody.listName;
    let items = serverState.items[listName];
    if(!items) items = []
    console.log(serverState.items)
    res.send(JSON.stringify(items));
})

app.post('/addItem', (req, res) => {
    // Remember: the body of an HTTP response is just a string.
    // You need to convert it to a javascript object
    let parsedBody = JSON.parse(req.body.toString())
    // This is just a convenience to save some typing later on
    let listName = parsedBody.listName;
    // If the list doesn't exist, create it
    if(!serverState.items[listName]) { serverState.items[listName] = [] }
    // The following could be rewritten in a shorter way using push.
    // Try rewriting it. It will help you understand it better.
    serverState.items[listName] = serverState.items[listName].concat(parsedBody.item)
    console.log(serverState.items)
    res.send(JSON.stringify(serverState.items[listName]));
})

app.post('/addList', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let listName = parsedBody.listName;
    if (listName) {serverState.listName=listName}
    res.send(JSON.stringify(serverState.listName))
})

app.post('/cleared', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let listName = parsedBody.listName;
    serverState.items[listName]=[];
    res.send(JSON.stringify(serverState.items[listName]));
})

app.post('/reversed', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let listName = parsedBody.listName;
    serverState.items[listName]=serverState.items[listName].reverse();
    res.send(JSON.stringify(serverState.items[listName]));
})

app.get('/getItemsLastList', (req, res) => {
    res.send(JSON.stringify({ln: serverState.listName, it: serverState.items[serverState.listName]}))
})

app.post('/allList', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let listRequested = parsedBody.listRequested;
    console.log(serverState.items[listRequested])
    serverState.items[serverState.listName] = serverState.items[serverState.listName].concat(serverState.items[listRequested])
    res.send(JSON.stringify(serverState.items[serverState.listName]));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
