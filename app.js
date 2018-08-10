var express = require("express");
var mongoo = require("mongoose");
var app = express();

app.set("view engine","ejs");
app.use(express.static('public'));


app.get("/",function(req, res){

    res.render('index');
});

app.listen(8000,function(req,res){
    console.log("Listening at port 8000");
})