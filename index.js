const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user:'amarpsp10',
  password:'password',
  database:'RecordDB',
})

mysqlConnection.connect((err)=>{
  if(!err) 
   console.log('DB connection succeded.');
  else
   console.log('DB connection failed /n Error : ' + JSON.stringify(err, undefined, 2));
})

app.get('/', (req, res) => {
  res.send('Hello World mere bai')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})