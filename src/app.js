const express = require("express");
require("./db/bookstore.confg");
const bookmodel = require("./models/bookstore.schema");
const bookrouter = require("./router/bookstore.router");
const app = express();

app.use(express.json());
app.use(bookrouter);






const port = process.env.PORT || 8000;
app.get("/",(req,res)=>{
    console.log("server crated");
});



app.listen(port,()=>{
    console.log(`server run at the port ${port}`);
})