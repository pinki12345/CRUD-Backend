const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
    {
        Title:{
            type:String,
            required:true,
            maxLength:50,
        },
        Author: {
            type:String,
            required:true,
            maxLength:50,
        },
        ISBN: {
            type:Number,
            required:true,
            maxLength:50,
        },
        PublicationDate: {
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

module.exports = mongoose.model("Data",dataSchema);