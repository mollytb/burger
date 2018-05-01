//import connection
var connection = require("../config/connection.js");

//make an array of question marks like in the cat activity
function printQuestionMarks(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
};
//put into sql syntax
function objToSQL(ob){
    var arr = [];
    //make keys strings in the array
    for(var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            //make string if name has spaces
            if(typeof value === "string" && value.indexOf(" ")>= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    //comma separated string
    return arr.toString();
}
//ORM thing to make SQL statements interchangable even though
//I'm only using it on one database and
//I have to make three different functions anyway.
var orm = {
    all: function(tableInput, cb){
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        })
     }
}