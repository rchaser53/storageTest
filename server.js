const path = require('path')
const cp = require('child_process');

const express = require('express')
const app = express()

app.use(express.static('./'))

app.get('/', function(req, res){
  res.send('need to input url "localhost:3000/1 or localhost:3000/2"')
})

app.get('/1', function(req, res){
  res.sendFile(path.resolve(__dirname, 'sessionTest', 'index1.html'))
})

app.get('/2', function(req, res){
  res.sendFile(path.resolve(__dirname, 'sessionTest', 'index2.html'))
})

app.get('/killStorage', function(req, res){
  res.sendFile(path.resolve(__dirname, 'sessionTest', 'killStorage.html'))
})

app.listen(3000, function(){
    console.log("Node.js is listening to PORT:3000");
    cp.exec('open http://localhost:3000/1');
});
