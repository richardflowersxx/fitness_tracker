var app = require("express").Router()
const { response } = require("express")
var db = require("../models")



app.get("/api/workouts",function(req,res){
    db.find({})
    .then(function(resp){
       console.log("GET routed",resp)
       res.json(resp)
    })
})
//Post-crete
app.post("/api/workouts ",function(req,res){
    db.create(req.body)
    .then(function(resp){
       console.log("created new record",resp)
       res.json(resp)
    })
})
//PUT-Update
app.put("/api/workouts/:id",function(req,res){
    db.findByIdAndUpdate(req.params.id,
        {$push:{exercises:req.body}},{new:true})
    .then(function(resp){
       console.log("put route",resp)
       res.json(resp)
    })
})

app.get("/api/workouts/range",function(req,res){
    db.find({}).limit(14).sort({id:-1})
    .then(function(resp){
       console.log("GET routed",resp)
       res.json(resp)
    })
})

module.export = app
