import express from"express";
const app=express();
const port= 3000;
let blogername="";
let blog="";

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("viewblog.ejs",{bolgs:blog,blogername:blogername})
})
app.get("/writeB",(req,res)=>{
    res.render("createblog.ejs")
})
app.post("/subit-blog",(req,res)=>{
    res.send("<h1>your blog is submited</h1>");
    blogername=req.body["bloger"];
    blog=req.body["textarea"];
})

app.listen(port,()=>{
    console.log("Listening port",port);
})
