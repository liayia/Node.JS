const express = require("express");
const app     = express();

app.get("/",function(req,res){
    res.send("HIHI , 我是 Node.js Server !!!");
});

app.get("/testqq",function(req,res){
    res.send("HIHI , 我是 /testqq 路徑");
});

app.get("/this-is-a-book",(req,res) => {
    res.send("This is a book ~~~");
});

app.get("/data",(req,res) => {
    let name = req.query.name;
    let age  = req.query.age;
    let message = req.query.message;
    console.log(name,age,message);
    //res.send("HIHI , " + name + " 您好~");
    res.send("HIHI , 您回傳的參數為: " + name + "/" + age + "/" + message );
});

app.listen(8088,function(){
    console.log("Server is running at http://localhost:" + String(8088));
});

// 程式執行後 , 進入 "等待" (Pending)