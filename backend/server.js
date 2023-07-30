const express = require ('express');
const mysql = require ('mysql');
const cors = require ('cors');
const bodyParser = require('body-parser');
const updateat = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toJSON().slice(0, 19).replace('T', ' ')
const app = express ();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tickets"
})

db.connect(function(err){
    if(err) throw err;
    console.log("connect");
});

app.get('/',(req,res) =>{
    const sql = 'SELECT * FROM users ';    
    db.query(sql,[],(err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get('/edit/:id',(req,res) =>{
    const sql = 'SELECT * FROM users WHERE id = ?'; 
    db.query(sql,[req.body.id],(err,data) => {
        if (err) {
            console.log(err);
          } else {
            res.send(data);
          }
    })
})

app.post('/edit/:id',(req,res) =>{
    const sql = 'INSERT INTO users (fname,lname,username,title,description,contract,information) VALUES (?,?,?)';    
    db.query(sql,[req.body.fname,req.body.lname,req.body.username,req.body.title,req.body.description,req.body.contract,req.body.information],(err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req,res) =>{
    const sql = 'SELECT * FROM login  WHERE email  = ? AND password = ?';    
    db.query(sql,[req.body.email,req.body.password ],(err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/creact',(req,res) =>{
    const sql = 'INSERT INTO users (fname,lname,username,title,description,contract,information) VALUES (?,?,?,?,?,?,?)';    
    db.query(sql,[req.body.fname,req.body.lname,req.body.username,req.body.title,req.body.description,req.body.contract,req.body.information],(err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/signup',(req,res) =>{
    const sql = 'INSERT INTO login (name,email,password) VALUES (?,?,?)';
    console.log(req.body)
    db.query(sql,[req.body.name,req.body.email,req.body.password],(err,data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0 ) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }

        })
    })  

app.listen(8081,() => {
    console.log("listenning")
})