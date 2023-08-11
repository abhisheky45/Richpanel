const express = require("express");
const path = require("path");
const app = express();

require("./db/conn")
const Register = require("./models/registers");

const port = process.env.PORT || 3000;


const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.render("index");
});
// Creating a new user
app.post("/" , async(req,res)=>{
   try{
       const registerEmployee = new Register({
        FirstName: req.body.FirstName,
        Email: req.body.Email,
        password: req.body.password
       })


       const registered = await registerEmployee.save();
       res.status(201).render("index");
   }catch(error){
    res.status(400).send(error);
   }
})

app.get("/login" , (req,res) =>{
    res.render("login");
});
app.get("/monthly",(req,res)=>{
    res.render("monthly");
});
app.get("/yearly",(req,res)=>{
    res.render("yearly");
});




app.listen(port, ()=>{
    console.log(`Server is running at port no ${port}`);
})
