const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3306;

// Middleware
app.use(express.json());

// Database config
var mysqlConnection = mysql.createConnection({
  host: 'bz8qog4jpfmc0e7vgkdl-mysql.services.clever-cloud.com',
  user:'uhmrduzowsryr76c',
  password:'WKHTScJ1kUsbWzLs0IJk',
  database:'bz8qog4jpfmc0e7vgkdl',
})

// Database Connection Check
mysqlConnection.connect((err)=>{
  if(!err) 
    console.log('DB connection succeded.');
  else
    console.log('DB connection failed /n Error : ' + JSON.stringify(err, undefined, 2));
})

//
app.get('/', (req, res) => {
  res.send('Hello World mere bai')
})

// Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})