const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const portNum = 8088;

// 設定模板引擎
app.engine('html',hbs.__express);
// 設定模板 (template) 位置
app.set("views" , path.join(__dirname ,"application","views"));
// 設定靜態檔 位置
app.use(express.static(path.join(__dirname,"application")));

app.get("/" , (req,res)=>{
  // res.send("嗨嗨,  我是 Node.js server.");
  res.render("index.html");
});

app.listen(portNum , ()=>{
  console.log(`Server is running at localhost:${portNum}`);
});
