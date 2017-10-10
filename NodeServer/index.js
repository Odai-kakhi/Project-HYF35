    var express    = require("express");
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: "root",
      password: "123456",
      database: "HP35"
    });
    var app = express();
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn 8888");    
    } else {
        console.log("Error connecting database ... nn");    
    }
    });
    
    app.get("/program",function(req,res){
    connection.query('SELECT * from Programs', function(err, rows) {
    // connection.end();
    if (!err) {
        console.log('The solution is: ', rows);
        // res.send(rows)
        res.end(JSON.stringify(rows))
      }
          
      else
        console.log('Error while performing Query.');
      });
    });
    
    app.listen(8888);
    