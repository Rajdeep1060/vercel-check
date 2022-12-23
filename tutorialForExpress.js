const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
// const path=require("path");
const port=3000;
// app.get("/",(req,res)=>{
//     // res.sendFile(path.join(__dirname+"/index.html"));
//     res.sendFile(__dirname+"/index.html");
// })
// app.post("/api/v1/login",(req,res)=>{
//     const b=req.body;
//     res.send("Your name is:- "+ b.name+ "\nYour course is:-"+b.course);
//     console.log(b);
// })
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/sample.html');
})
app.get("/resume",(req,res)=>{
    res.download(__dirname+"/Rajdeep.pdf");
})
app.listen(3000,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
