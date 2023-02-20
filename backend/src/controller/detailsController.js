import bcrypt from 'bcrypt';
import {personaldetailsSchema} from '../model/personaldetailsModel.js';

export const registerDetails = async(req,res)=>  {
    // const Details= personaldetailsSchema;
    try{
        if(!req.body){
            res.status(406).json({err:"fill the details"});
            return
        }
        let {firstName,lastName,email,emailConfirm}=req.body
        if(!firstName||!lastName || !email || !emailConfirm)
        return res.status(406).json({err:"all the fields are not filled"})
        if(email!=emailConfirm){
            res.status(406).json({err:"email must be the same"})
        }
        const newDetails= new personaldetailsSchema({
            firstName,
            lastName,
            email,
        })
        newDetails.save(newDetails)
        .then(register=>{
            res.json(register)
        })
        .catch(error=>{
            res.status(406).json({err:error.message||"something went wrong"})
        })
    }
    catch(error){
        res.status(500).json({err:error.message||"error while registration"})
    }
}