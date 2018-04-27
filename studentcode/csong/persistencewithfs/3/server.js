const express = require('express');
const app = express();
var fs = require('fs');

app.get('/sum', (req, res) => {
    let r = fs.readFileSync('../2/values.txt').toString().split('\n');
    let sum = 0;
    for (let i=0; i < r.length; i++) {
        sum = sum + Number(r[i]);
    }
    res.send('<div>' + sum + '</div>');
})

app.listen(3000, ()=>console.log('listening on 3000'))
