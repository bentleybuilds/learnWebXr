const fs = require('fs');
const cert = fs.readFileSync(__dirname + '/cert.pem');
const key = fs.readFileSync(__dirname + '/key.pem');

const express = require('express');
const https = require('https');
const app = express();
const server = https.createServer({key: key, cert: cert }, app);

app.use(express.static(__dirname + '/../'));

// app.get('/', (req, res) => {
//     console.log('ping') 
//     res.send('this is an secure serv') 
// });
server.listen(3001, () => { console.log('listening on 3001') });