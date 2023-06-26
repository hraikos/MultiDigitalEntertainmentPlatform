const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '45Vexro?1',
  database: 'multiDigitalEntertainmentPlatform'
})

app.post('/employee_login_information', (req, res) => {
  const sql = "SELECT * FROM employee_login_information WHERE `username` = ? AND `password` = ?";
  connection.query(sql,[req.body.username, req.body.password], (err, data)=> {
            if(err) {
              return res.json("Error");
            }
            if(data.length > 0) {
              return res.json("Success");
            } else {
              return res.json("Failes");
            } 
        })
});

app.post('/ebook', (req, res) => {
  const sql = "INSERT into ebook (`name`, `author`, `genre`, `description`, `price`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.author,
    req.body.genre,
    req.body.description,
    req.body.price
  ]

  connection.query(sql, [values], (err, data) => {
    if(err){
      return res.json("Error");
    }
    return res.json(data);
  })
})

app.post('/videogame', (req, res) => {
  const sql = "INSERT into videogame (`name`, `author`, `genre`, `description`, `price`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.author,
    req.body.genre,
    req.body.description,
    req.body.price
  ]
  
  connection.query(sql, [values], (err, data) => {
    if(err){
      return res.json("Error");
    }
    return res.json(data);
  })
})

app.post('/movie', (req, res) => {
  const sql = "INSERT into movie (`name`, `author`, `genre`, `description`, `price`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.author,
    req.body.genre,
    req.body.description,
    req.body.price
  ]
  
  connection.query(sql, [values], (err, data) => {
    if(err){
      return res.json("Error");
    }
    return res.json(data);
  })
})

app.post('/music', (req, res) => {
  const sql = "INSERT into music (`name`, `author`, `genre`, `description`, `price`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.author,
    req.body.genre,
    req.body.description,
    req.body.price
  ]
  
  connection.query(sql, [values], (err, data) => {
    if(err){
      return res.json("Error");
    }
    return res.json(data);
  })
})

app.listen(1027, ()=>{
  console.log("listening");
})