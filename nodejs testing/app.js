const http = require('http');
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) =>{
    console.log(req.query)
    res.send(req.query) // displays query string
})

app.get('/:id',(req,res)=>{
    res.send(req.params) // url id stuff
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server is starting at ${port}`)
})


// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('AVS-RFID-TECH: ');
//     res.write(req.url)
//     res.end();
// }).listen(8080);