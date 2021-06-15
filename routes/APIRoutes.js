var app = require("express").Router()
const { response } = require("express")
var db = require("../models")



app.get("/api/workouts",function(req,res){
    db.find({})
    .then(function(resp){
       console.log("created new record",response)
    })
})

app.get("/api/",function(req,res){
    db.find({})
    .then(function(resp){
       console.log("created new record",response)
    })
})