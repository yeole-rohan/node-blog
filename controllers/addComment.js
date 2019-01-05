const mysql = require('mysql')
const express = require('express');
const post = require('./getPost')
var url = require('url');
var login = require('./login')
const bodyParser = require('body-parser')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'employee'
  });
  app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({
        extended: true
    }));
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... from addComment");
    } else {
        console.log("error ocurred",err);
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
    }
    });



module.exports = async(req,res) =>{
    var comment = req.body.exampleFormControlTextarea 
     var post_ids = req.body.post_id
     var userEmails = req.body.commnetPersonEmail
     var userNames = req.body.commnetPersonName
     console.log('From getComment')
var date = Date()
console.log(date)
     console.log(post_ids,comment)
    var value = [[comment,post_ids,userEmails,date,userNames]]
    var sql = "INSERT INTO comment (body,post_id,userEmail,date,userName) VALUES ?";
    connection.query(sql,[value],(error,results,fields)=>{
        if (error) {
            console.log("error ocurred",error);
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
        }else{
            console.log('The solution is: ', results);
            
          }
          });
          
          res.redirect('/home')
}