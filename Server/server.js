const { Pool } = require('pg');
const express = require('express');
const { json } = require("body-parser");
const bodyParser = require('body-parser');
const app = express()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const PORT = process.env.PORT || 3000
let cors = require("cors");
app.use(cors());
const pool = new Pool({
  connectionString: 'postgres://qsqeniwbuaomlt:0a561d01d01e8c1f4b3659ae25e8b348657d14d7ae18e5141f119011020ace9a@ec2-52-30-75-37.eu-west-1.compute.amazonaws.com:5432/d3bi6fk0qqlq7d',
  ssl: true,
  user: 'qsqeniwbuaomlt',
  password: '0a561d01d01e8c1f4b3659ae25e8b348657d14d7ae18e5141f119011020ace9a',
  database: 'd3bi6fk0qqlq7d',
  host: 'ec2-52-30-75-37.eu-west-1.compute.amazonaws.com',
  port: '5432'
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    next();
  });
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', jsonParser, async (req, res) => {

  var password = req.body.password;
  var email = req.body.username;
  try {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM users WHERE username='" + email + "' AND password='" + password +"'");
  const results = { 'result': (result) ? result.rows : null };

  
  if (results.result.length > 0) {
   // session.loggedin = true;
   // session.email = email;
    res.send("1");
  } else {
    res.send("0");
  }
  client.release();
  
  } catch (err) {
    console.error(err);
  }
});

app.get('/item/:id', async (req, res) => {
    try {
    const client = await pool.connect();
    const result = await client.query("SELECT weekly_waste from waste where item = "+"'"+req.params.id+"'");
    const results = { 'results': (result) ? result.rows : null};
    res.send(results)
    client.release();
  } catch (err) {
    res.send("Error " + err);
  }
})


app.listen(3000); 


