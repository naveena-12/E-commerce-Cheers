import express from 'express';
import { Router } from 'express';
import {personaldetailsSchema} from '../model/personaldetailsModel.js';
import mongoose from 'mongoose';
// import {registerDetails} from '../controller/detailsController.js';
// const details= require('../model/personaldetailsModel');
const detailRoute = (app)=>{
    const Details = mongoose.model('Details', personaldetailsSchema);

app.route('/details').get(async(req,res)=>{
    Details.find({}, (err, details) => {

        if (err) {
            res.send(err);
        }

        res.json(details);
    });

})
app.route('/addDetails').post(async(req,res)=>  {


    let newDetails = new Details({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        address2:req.body.address2,
        address1:req.body.address1,
        addresstype:req.body.addresstype,
        pincode:req.body.pincode,
        phonenumber:req.body.phonenumber
    });


    newDetails.save((err, details) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(details)
            newDetails.save()
                .then(() => res.send('successfully uploaded')).catch((err) => console.log(err));

        }
    })
});


//     const firstName=req.body.firstName;
//     const lastName=req.body.lastName;

//     const email=req.body.email;

//     const emailConfirm=req.body.emailConfirm;

// const newDetail = 


}
export default detailRoute;