const express = require("express");
const mysql = require("mysql2");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

//mysql connect

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "expense_tracker"
});


db.connect(err => {
    if(err){
        console.error("db connection failed", err);
    }
    else{
        console.log("db connection successfully(expense_tracker)");
    }
});

//create user

app.post("/expenses", (req, res) => {
    const{title, amount, category, date}= req.body;
    const sql = "INSERT INTO expenses(title, amount, category, date) VALUES(?,?,?,?)";
    db.query(sql, [title, amount, category, date], (err, result) => {
        if(err)return res.status(500).json ({error:err.message});
        return res.status(201).json ({id:result.insertId,title, amount, category, date});
    });
});

//read all users

app.get("/expenses", (req, res) => {
    db.query("SELECT * FROM expenses", (err, result) => {
        if(err)return res.status(500).json ({error:err.message});
        return res.status(404).json ({error:"expenses not found"});
        res.json(result);
    });
});

//read one users

app.get("/expenses/:id", (req, res) => {
    db.query("SELECT * FROM expenses WHERE id =?", [req.params.id], (err, result) => {
        if(err)return res.status(500).json ({error:err.message});
        if(result.length === 0)return res.status(404).json ({error:"expenses not found"});
        res.json(result[0]);
    });
});

//update users

app.put("/expenses/:id", (req, res) => {
    const{title, amount, category, date}= req.body;
    const sql ="UPDATE expenses SET title=?, amount=?, category=?, date=? WHERE id=?";
    db.query(sql, [title, amount, category, date, req.params.id], (err, result) => {
         if(err)return res.status(505).json ({error:err.message});
    if(result.AffectedRows === 0)return res.status(404).json ({error:"expenses not found"});
    res.json({id:req.params.id, title, amount, category, date});
    });
});

//delete users

app.delete("/expenses/:id", (req, res) => {
    const sql = "DELETE FROM expenses WHERE id=?";
    db.query(sql, [req.params.id], (err, result) => {
        if(err)return res.status(505).json ({error:err.message});
        if(result.AffectedRows === 0){
            return res.status(404).json ({error:"expenses not found"});
        }
        res.json({message:"expenses deleted successfully"});
    });
});


//server runner

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
});