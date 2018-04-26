const express = require('express')
const app = express()

app.get('/hello', function (req, res) {res.send('<html><body><h1>Hello world</h1></body></html>')})

app.listen(3000, function () {
    console.log('Question 1 listening on port 3000!')})

