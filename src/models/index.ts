import mysql from 'mysql'
const connection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root",
    database: "blog"
});

connection.connect()

export default connection