var express = require('express')
var app = express()

var fs = require('fs')



app.get('/test1', function (req, res) {
    var html_file = fs.readFileSync("./website/home.html");
    html_file = html_file.toString();

    res.send(html_file);
})

app.get('/:room/get_msg', function(req, res){
    var room = req.params.room;//Get :room value
    
    var room_messages = fs.readFileSync("./room/room"+room+".json");
    room_messages = room_messages.toString();

    res.send(room_messages);
})

app.get('/', function (req, res) {
    var html_file = fs.readFileSync("./website/home.html");
    html_file = html_file.toString();

    res.send(html_file);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})