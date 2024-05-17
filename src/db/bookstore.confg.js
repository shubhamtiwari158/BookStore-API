const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/BookStore-api")
.then(() => {
    console.log("Database connected succesful")
}).catch((err) => {
    consolelog("connection failed",err);
});