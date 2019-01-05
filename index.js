const express = require('express');
var path = require('path')
const expressEdge = require('express-edge');
const bodyParser = require('body-parser')
const mysql = require('mysql')
var session = require('express-session')
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const getPostController = require('./controllers/getPost')
const storePostController = require('./controllers/storePost')
const getLoginController = require('./controllers/getLogin')
const loginController = require('./controllers/login')
const addCommentContoller = require('./controllers/addComment')
app = express()

app.use(express.static('public'));
app.use(expressEdge);
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));



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

const storePost = require('./middleware/storePost')
app.use('/posts/store', storePost)
app.get("/",getLoginController);
app.get("/post/:id", getPostController);
app.get("/posts/new", createPostController);
app.get('/home', homePageController);
app.post('/home/login', loginController)
app.post("/posts/store", storePostController);
app.post('/addComment',addCommentContoller)

app.listen(4000, () => {
    console.log('App listening on port 4000')
});
