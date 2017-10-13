var express = require("express");
var mysql = require('mysql');
var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database: 'HP35'
});

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);

    connection.query('select * from Users where userID = ?', [jwt_payload.id], function (err, rows) {

        if (!err) {

            var user = rows[0]
            if (user) {
                next(null, user);
            } else {
                next(null, false);
            }

        } else
            console.log('Error while performing Query.');
    })


});

passport.use(strategy);

var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");


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

        if (!err) {
            var payload = { id: rows[0].userID };
            var token = jwt.sign(payload, jwtOptions.secretOrKey);
            console.log('The solution is: ', rows[0].userID);
            console.log('token====> ' + token)
            rows[0].token = token
            res.end(JSON.stringify(rows))


        } else
            console.log('Error while performing Query.');
    });
});

app.post("/signup/:email/:firstname/:lastname/:password", function (req, res, next) {
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

app.get("/program", passport.authenticate('jwt', { session: false }), function (req, res) {

    var userID = req.user.userID

    connection.query('SELECT * from Programs WHERE ownerUserID = ?', [userID], function (err, rows) {

        if (!err) {
            console.log('The solution is: ', rows);
            res.end(JSON.stringify(rows))
        } else
            console.log('Error while performing Query.');
    });
});

app.delete("/program/:programID",passport.authenticate('jwt', { session: false }), function (req, res) {

    // var userID = req.user.userID
    const programID = req.params.programID;

    connection.query('DELETE FROM programs WHERE programID = ? ', [programID], function (err, rows) {

        if (!err) {
            console.log('The row is: ', rows);
            res.end(JSON.stringify(rows))
        } else
            console.log('Error while performing Query.');
    });
});

app.post("/program/:programText/:name",passport.authenticate('jwt', { session: false }), function (req, res) {
     const sqlValues = {
        programID: req.params.programID,
        programText: req.params.programText,
        ownerUserID: req.user.userID,
        name: req.params.name
    };
    connection.query('insert into programs set ? ',[sqlValues] , function (err, rows) {

        if (!err) {
            console.log('The solution is: ', rows);
            res.end(JSON.stringify(rows))
        } else
            console.log('Error while performing Query.');
    });
});





app.listen(8888);


// sql_real_escape_string_quote‏