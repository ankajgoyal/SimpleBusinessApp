var express = require('express');
const path = require('path');
var app = express();
const port = process.env.PORT||3002;

var constPath  = path.join(__dirname,'/');
app.use(express.static(constPath));

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})