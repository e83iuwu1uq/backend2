require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/google', (req, res) => {
  res.send('tree world');
});

app.get('/login', (req, res) => {
    res.send('<h1> Your are login </h1>')
})


app.get('/gaurav', (req, res) =>{
    res.send('<h1> You are at gaurav page')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
