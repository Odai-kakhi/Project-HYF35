    var express = require("express");
    var mysql = require('mysql');
    var bcrypt = require('bcrypt');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '',
        database: 'HP35'
    });
    var app = express();
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... nn 8888");
        } else {
            console.log("Error connecting database ... nn");
        }
    });

    app.get("/login/:email", function (req, res) {
        const email = req.params.email;
        console.log('===>>' + email)
        connection.query('select * from Users where email = ?', [email], function (err, rows) {
            // connection.end();
            if (!err) {
                console.log('The solution is: ', rows);
                res.end(JSON.stringify(rows))
                // res.redirect('http://localhost:3000/')

            } else
                console.log('Error while performing Query.');
        });
    });

    app.post("/signup/:email/:firstname/:lastname/:password", function (req, res,next) {
        const email = req.params.email;
        const firstname = req.params.firstname;
        const lastname = req.params.lastname;
        const password = req.params.password;
        console.log('first name => ' + firstname);
        console.log('last name => ' + lastname);
        console.log('email => ' + email);
        console.log('password=>' + password);
        
        

        const sqlValues = {
            first_name: req.params.firstname,
            last_name: req.params.lastname,
            email: req.params.email,
            passwordHashFromBcrypt: password
        };
        connection.query('insert into Users set ?', sqlValues, (err, data) => {
            if (!!err) {
                throw err;
            }
            console.log(data);
        });
        res.end()

    });

    app.get("/program", function (req, res) {
        connection.query('SELECT * from Programs', function (err, rows) {
            // connection.end();
            if (!err) {
                console.log('The solution is: ', rows);
                res.end(JSON.stringify(rows))
            } else
                console.log('Error while performing Query.');
        });
    });




    app.listen(8888);