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