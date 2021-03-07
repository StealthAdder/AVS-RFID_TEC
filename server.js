const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=> {
  res.send('Welcome');
});

app.get('/api', (req, res)=> {
  res.send('Welcome').status(200);
});

app.post('/api', (req, res) => {
  console.log(req.headers.host);
  console.log(req.body);
  res.send(req.body).status(200);
}); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, '192.168.1.10', () => {
  console.log(`Server Started at http://192.168.1.10:3000`);
});