import mongoose from 'mongoose';

const schema = mongoose.Schema;
export const personaldetailsSchema =new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    country:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
    },
    pincode:{
        type:Number,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
    },
    addresstype:{
        type:String,
        required:true
    }
})

// module.exports = mongoose.model('Details',personaldetailsSchema)