const express = require('express')
const app = express()

app.get('/home', (req, res) => res.send(req.query.foo))

app.listen(3000, ()=>console.log('Started on port 3000'))