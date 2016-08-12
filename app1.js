var express = require('express');
    app = express();
var port = 8000;
app.get('/', function(req,res){
    res.send("hello class");
});
app.get('/raghu', function(req,res){
    res.send("hello class");
});

app.use(function(req,res){
    res.sendStatus(404);
});
app.listen(port, function(){
    console.log("server running on port" +port);
});