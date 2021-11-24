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
  multipleStatements: true
})

// Database Connection Check
mysqlConnection.connect((err)=>{
  if(!err) 
    console.log('DB connection succeded.');
  else
    console.log('DB connection failed /n Error : ' + JSON.stringify(err, undefined, 2));
})

// Handling Routes

app.get('/', (req, res) => {
  res.send('Hello World mere bai')
})

app.get('/time-logs', (req, res) =>{
  mysqlConnection.query('SELECT * FROM Time_Logs', (err, rows, fields)=>{
    if(!err){
      res.status(200).send(rows);
    }
    else{
      res.status(400).send('Something Went Wrong with Database');
    }
  })
})

app.delete('/time-logs/:id', (req,res) =>{
  mysqlConnection.query('DELETE FROM Employee WHERE EmpID=?',[req.params.id],(err,rows,fields)=>{
    if(!err){
      res.status(200).send('Delete Successfully');
    }
    else{
      res.status(400).send('Something Went wrong to delete');
    }
  })
})

app.post('/time-logs', (req,res)=>{
  
})
// Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})