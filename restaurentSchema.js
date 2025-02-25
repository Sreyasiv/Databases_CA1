const mongoose=require("mongoose");
const restaurentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    menuItemsArray:{
        type:Array,
        required:true
    }

});
const rest=mongoose.model("rest",restaurentSchema);
module.exports=rest;