const express = require('express');
const https = require('https');
const app = express();

const fs = require('fs');
const SERVER_OPTIONS = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }

app.get('/', (req, res) => {
  res.send('Hello HTTPS!');
})

app.get('/health', (req, res) => {
    res.send('UP');
})

https.createServer(SERVER_OPTIONS, app).listen(3000, () => {
  console.log('Listening...');
})