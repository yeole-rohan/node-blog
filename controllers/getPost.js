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
module.exports = async (req, res) => {
    var ids  = req.params.id
    console.log(ids)
     connection.query('SELECT * FROM blognode WHERE id =?',[ids],(error, resultOne, fields) =>{
        connection.query('select * from comment where post_id=?',[ids],(error, resultTwo, fields) =>{

        if (error) {
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
        }else{
            console.log(resultOne)
          res.render('post',{
              dataOne:resultOne,
              dataTwo:resultTwo,
              ids
          })
        }
    })
})
    // connection.query('select body from comment where post_id=?',[ids],(error, resultTwo, fields) =>{
    //     if (error) {
    //         res.send({
    //           "code":400,
    //           "failed":"error ocurred"
    //         })
    //     }else{
    //         console.log(resultTwo)
    //       res.render('post',{
    //          dataTwo: resultTwo
            
    //       })
    //     }
    // })
}


// select * from blognode,comment where blognode.id = comment.post_id