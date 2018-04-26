const express = require('express')
const app = express()

app.get('/hi', function (req, res) {
    if (Number(req.param('foo')) > Number(req.param('chair'))) {
    res.send(req.query.foo)
    }else res.send(req.query.chair)})

app.listen(3000, ()=>console.log('Starting on port 3000'))