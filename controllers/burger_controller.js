var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burger");
    
    
});

router.get("/burger", function(req, res) {
    burger.selectAll( function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json(result);
    });
});

router.post("/burger/eat/:id", function(req, res){
    burger.updateOne(req.params.id, function(){
        res.redirect("/burger")
    })
})

module.exports = router;