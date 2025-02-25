const mongoose=require("mongoose");
const menuItemSchema=new mongoose.Schema({
    dishName:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    }
});
const menu=mongoose.model("menu",restaurentSchema);
module.exports=menu;