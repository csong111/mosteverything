const express = require('express')
const app = express()

function getColor () {
    return Math.random()*255
}
app.get('/random', function (req, res) {res.send('<html><body bgcolor=rgb('+ getColor() + ',' + getColor()+ ',' + getColor() + ')>What is up</body></html>')})

app.listen(3000, function() {console.log('Question 2 on port 3000')})