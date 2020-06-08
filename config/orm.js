var connection = require("../config/connection.js");

var orm = {

    //selectAll Method
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', function (err,result) {
            //logs error if an error occurs
            if (err) throw err; 
            //else return results
            cb(result);
               
        })

    },

    //insertOne Method
    insertOne: function(burger_name, cb) {
        
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false
        }, function(err, result) {
            if (err) throw err;
            cb(result);
            
        
        })
    },

    //updateOne Method
    updateOne: function(burgerId, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured:true}, {id:burgerId}], function(err, result) {
            if (err) throw err;
            cb(result);
            
        })
    }

}

module.exports = orm;