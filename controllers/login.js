const mysql = require('mysql')
const express = require('express');
var session = require('express-session')

const bodyParser = require('body-parser')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'employee'
  });
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
    });
    app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
    extended: true
}));
module.exports = (req,res) =>{
  var password = req.body.password
  
}
 module.exports = (req,res) =>{
        var email = req.body.email
        console.log(email)
        var password = req.body.password
        console.log(password)
     connection.query('select * from users where email = ? and password = ?',[email,password],(error, results, fields) =>{
            if (error) {
                res.send({
                  "code":400,
                  "failed":"error ocurred"
                })
            }else{
                console.log('The solution is: ', results[0].id);
              t = results[0].id
              console.log(t)
                if(results.length >0){
                  if(results[0].password == password){
                    var meaasge = ({
                      "code":200,
                      "success":"login sucessfull"
                      
                        });
                        console.log(meaasge)
                        // res.sendFile(path.join(__dirname+'/post.html'))
                        // res.header()
                        res.redirect('/home')
                  }
                  else{
                    res.send({
                      "code":204,
                      "success":"Email and password does not match"
                        });
                  }
                }
                else{
                    res.send({
                      "code":204,
                      "success":"Email does not exits"
                        });
                    }}
        })
    }
    
