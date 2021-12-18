const express = require("express");
const router  = express.Router();

router.get("/page",(req,res)=>{
  res.render("abotus.html");
});

module.exports = router;
