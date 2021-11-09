const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.get("/" , function(request,response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/" , function(request,response){

    var num1 = Number(request.body.number1);
    var num2 = Number(request.body.number2);
    
})
var result = num1 + num2;


app.send(result);



app.listen(3000 , function(){
    console.log("server is running")
});