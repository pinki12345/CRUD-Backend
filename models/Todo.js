const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
            maxLength:50,
        },
        Email: {
            type:String,
            required:true,
            maxLength:50,
        },
        Phone: {
            type:String,
            required:true,
            maxLength:50,
        },
        Address: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);