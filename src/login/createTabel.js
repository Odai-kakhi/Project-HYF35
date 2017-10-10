var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database: 'HP35'
})

con.connect((error) => {
    if (error) {
        throw error
    }
    console.log('connected')
    
    const sqlStatments = `
CREATE DATABASE HP35;

CREATE TABLE Programs (
    programID INT NOT NULL AUTO_INCREMENT,
    programText VARCHAR (255),
    ownerUserID INT,
    FOREIGN KEY (ownerUserID) REFERENCES Users(userID),
    PRIMARY KEY (programID)
);

CREATE TABLE Users (
    userID  INT NOT NULL  AUTO_INCREMENT,
    email     VARCHAR(255)  ,
    last_name     VARCHAR(255) ,
    first_name    VARCHAR(255) ,
    passwordHashFromBcrypt VARCHAR(255),
    PRIMARY KEY(userID)  
);
`
    
    con.query(sqlStatments, (error, result) => {
        if (error) {
            throw error
        }
        console.log('tabel created !')
    })
})