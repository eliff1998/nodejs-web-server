var express = require("express");
var app = express();

app.get("/", function(req,res) {
    res.send("Express Merhaba");
})
    
    app.get("/hakkimda", function(req,res) {
        res.send("Hakkımda Sayfası");
})

app.use(express.static(__dirname + '/public'));

console.log(__dirname);



app.listen(3000);