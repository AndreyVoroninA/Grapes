const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
   host: "localhost",
   port: "3306",
   user: "root",
   database: "db_grapes_app",
   password: "admin"
 });
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
/*app.get('/api', (req,res) => {
   const sqlInsert = "INSERT INTO coders (FIO, position) VALUES ('good','good');"
   pool.query(sqlInsert, (err, result) => {
      res.send(err);
   })
})*/

app.get('/api/get/users', (req,res) => {
   const sqlSelect = "SELECT * FROM coders";
   pool.query(sqlSelect, (err, result) => {
     res.send(result);
   })
})

app.post('/api/insert/users', (req, res) => {

   const nameUser = req.body.FIO
   const pos = req.body.position

   const sqlInsert = "INSERT INTO coders (FIO, position) VALUES (?,?)"
   pool.query(sqlInsert, [nameUser, pos], (err, result) => {
      console.log(result);
   })
})

app.delete('/api/delete/users/:FIO', (req, res)=> {
   const name = req.params.FIO;
   const sqlDelete = "DELETE FROM coders WHERE FIO = ?";
   pool.query(sqlDelete, name, (err,result) => {
     if (err) console.log(err)
   })
})
/* PUT */
app.put("/api/update/users/position", (req, res) => {
   const name = req.body.FIO;
   const posit = req.body.position;
   const sqlUpdate = "UPDATE coders SET position = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [posit, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/rating", (req, res) => {
   const name = req.body.FIO;
   const ratin = req.body.rating;
   const sqlUpdate = "UPDATE coders SET rating = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [ratin, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/frontend", (req, res) => {
   const name = req.body.FIO;
   const fr = req.body.frontend;
   const sqlUpdate = "UPDATE coders SET frontend = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [fr, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/backend", (req, res) => {
   const name = req.body.FIO;
   const fr = req.body.backend;
   const sqlUpdate = "UPDATE coders SET backend = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [fr, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/design", (req, res) => {
   const name = req.body.FIO;
   const fr = req.body.design;
   const sqlUpdate = "UPDATE coders SET design = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [fr, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/diftask", (req, res) => {
   const name = req.body.FIO;
   const fr = req.body.difficultTask;
   const sqlUpdate = "UPDATE coders SET difficultTask = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [fr, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/average", (req, res) => {
   const name = req.body.FIO;
   const fr = req.body.averageTask;
   const sqlUpdate = "UPDATE coders SET averageTask = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [fr, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/esaytask", (req, res) => {
   const name = req.body.FIO;
   const fr = req.body.easyTask;
   const sqlUpdate = "UPDATE coders SET easyTask = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [fr, name], (err, result) => {
      if (err) console.log(err);
   })
})
app.put("/api/update/users/lateness", (req, res) => {
   const name = req.body.FIO;
   const fr = req.body.lateness;
   const sqlUpdate = "UPDATE coders SET lateness = ? WHERE FIO = ?";

   pool.query(sqlUpdate, [fr, name], (err, result) => {
      if (err) console.log(err);
   })
})
/* ПРОЕКТЫ */
app.post('/api/post/project', (req, res) => {

   const nameProject = req.body.nameProjects
   const deadline = req.body.deadlineProject

   const sqlInsert = "INSERT INTO projects (nameProjects, deadlineProject) VALUES (?,?)"
   pool.query(sqlInsert, [nameProject, deadline], (err, result) => {
      console.log(result);
   })
})

app.get('/api/get/projects', (req,res) => {

   const sqlSelect = "SELECT * FROM projects";
   pool.query(sqlSelect, (err, result) => {
     res.send(result);
   })
})

/* Задачи*/
app.post('/api/post/tasks', (req, res) => {

   const nameTask = req.body.nameTask;
   const complexity = req.body.complexity;
   const performers = req.body.performers;
   const reqKnowlege = req.body.requiredKnowlege;
   const deadlineTask = req.body.deadkineTask;
   const curator = req.body.curator;
   const idProject = req.body.idProjects

   const sqlInsert = "INSERT INTO tasks (nameTask, complexity, performers, requiredKnowlege, deadkineTask, curator, idProjects) VALUES (?,?,?,?,?,?,?)"
   pool.query(sqlInsert, [nameTask, complexity, performers, reqKnowlege, deadlineTask, curator, idProject], (err, result) => {
      console.log(result);
   })
})

app.get('/api/get/tasks/:idProjects', (req,res) => {

   const idP = req.params.idProjects
   const sqlSelect = "SELECT * FROM tasks WHERE idProjects = ?";
   pool.query(sqlSelect, idP, (err, result) => {
     res.send(result);
   })
})


app.listen(3001, () => {
   console.log("running on port 3001");
});