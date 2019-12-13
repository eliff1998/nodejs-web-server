var express = require("express");
var app = express();


    app.get("/hakkimda", function(req,res) {
        res.send("Hakkımda Sayfası");
})

app.get("/common/pagecontent/drcard", function(req,res) {
    res.send("Hakkımda Sayfası");
})

app.use(express.static(__dirname + '/public'));





app.listen(3000);