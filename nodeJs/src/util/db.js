

const mysql = require("mysql")

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbnodejs",
    port:"3306" // 3306 || 
})

module.exports = db;