const { Pool } = require('pg');
const express = require('express');
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

app.get('/data', async (req, res) => {
    try {
    const client = await pool.connect();
    const result = await client.query('SELECT * from waste');
    const results = { 'results': (result) ? result.rows : null};
    res.send(results)
    client.release();
  } catch (err) {
    res.send("Error " + err);
  }
})


