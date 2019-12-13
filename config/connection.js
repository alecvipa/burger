
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harry potter 8",
    database: "burgers_db"

});

connection.connect(function(err){
    if(err){
        throw(err);
    }else {
        console.log("Connected as id:" + connection.threadId);
    }
})

module.exports = connection;