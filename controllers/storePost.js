const mysql = require('mysql')
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
    
module.exports = (req,res) =>{
console.log(req.body)
    var title = req.body.title
    var username = req.body.username
    var description = req.body.description
    var content = req.body.content
    var datetime = new Date();
   
    var value = [[title, description,content,datetime,username]]
    console.log(value)
    
    var sql = "INSERT INTO blognode (title, description,content,date,username) VALUES ?";
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