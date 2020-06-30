var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
  var connection = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net",
    port: 3306,
    user: "b66af4dbb4ed3d",
    password: "7f2f4ace",
    database: "heroku_655e7c343459e07"
  });

}


// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;

