var express=require('express');
var app=express();

app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome !!!!</h1>"
    +"<hr/>"
    +"<h3>Flowers</h3>"
    +"<br/>"
    +"<ol>"
    +"<h4>"
    +"<li>Rose</li>"
    +"<li>Lotus</li>"
    +"<li>Champa</li>"
    +"<li>Chameli</li></h4>"
    +"</ol>")
});
app.listen(3000);
console.log("server started at 3000 port");