import mongoose from 'mongoose';

const schema = mongoose.Schema;
export const productSchema =new schema({
 
    brand:{
        type:String,
    },
    name:{
        type:String,
    },
    points:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    }

});