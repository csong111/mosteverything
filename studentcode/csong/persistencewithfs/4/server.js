//const express = require('express');
//const app = express();
var fs = require('fs');

//app.get('/reverse', (req, res) => {
let r = fs.readFileSync('../2/values.txt').toString();
let r2 = r.split('\n').reverse().join('\n');
fs.writeFileSync('../2/values.txt', r2);
//})
console.log(r2)
//app.listen(3000, ()=>console.log('doing it on port 3000'));