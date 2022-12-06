const mongoose= require("mongoose")

const ClothSchema=new mongoose.Schema({
    title: {
        type:String,       
        required:true
    },
    brand: {
        type:String,       
    
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,

    },

    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    ,
    rating:{
        rate:{
            type:Number,
            
        },
        count:{
            type:Number
        }
    }
    
})

const cloth=mongoose.model("Cloth", ClothSchema);

module.exports=cloth;
