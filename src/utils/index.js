const sql = require("../db/connection");

exports.addUser = (username, password) => {
    try {
        const user =  [username, password, username]
            
        sql.query("INSERT INTO users SET username = '?'; INSERT INTO passwords SET pass = '?', userID = (SELECT id FROM users WHERE username = '?') ", user)   
        // insert into users set username = "AndyB", pass = "goalbaros1"
    } catch (error) {
        console.log(error)
    }
};