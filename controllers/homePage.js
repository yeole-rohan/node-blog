var mysql      = require('mysql');
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
module.exports =  (req, res) => {
    connection.query('select * from blognode',(error, results, fields) =>{
        if (error) {
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
        }else{
            res.render('index',{
              
                data:results
            })
        }
    })
}