const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
   host: "localhost",
   port: "3306",
   user: "root",
   database: "grapes_db",
   password: "admin"
 });
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req,res) => {
   const sqlSelect = "SELECT * FROM users";
   pool.query(sqlSelect, (err, result) => {
     res.send(result);
   })
})

app.post('/api/insert', (req, res) => {

   const nameUser = req.body.nameUser
   const pos = req.body.pos

   const sqlInsert = "INSERT INTO users (nameUser, pos) VALUES (?,?)"
   pool.query(sqlInsert, [nameUser, pos], (err, result) => {
      console.log(result);
   })
})



app.listen(3001, () => {
   console.log("running on port 3001");
});