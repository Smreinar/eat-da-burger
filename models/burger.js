var orm = require("../config/orm.js");

var burger = {
    //selectAll call
    selectAll: function(cb){
        orm.selectAll( function(result) {
            cb(result);
        });
    },

    //insertOne call
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(result) {
            cb(result);
        });
    },

    //updateOne call
    updateOne: function(burger_id, cb) {
        orm.updateOne(burger_id, function(result) {
            cb(result);
        });
    }
}

module.exports = burger;