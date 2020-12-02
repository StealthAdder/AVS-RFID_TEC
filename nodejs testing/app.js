const http = require('http');
const express = require('express')
const app = express()

app.use(express.json())

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('AVS-RFID-TECH: ');
//     res.write(req.url)
//     res.end();
// }).listen(8080);

app.get('/:id',(req,res)=>{
    res.send(req.params)
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server is starting at ${port}`)
})