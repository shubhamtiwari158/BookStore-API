const mongoose= require("mongoose");
const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author: { 
        type: String,
         required: true 
        },
    price: { 
        type: Number,
         required: true 
        },
    format: { 
        type: String, 
        required: true 
    },
    overview: { 
        type: String,
         required: false 
        }
});
const model = new mongoose.model("Book",Schema);
module.exports = model;