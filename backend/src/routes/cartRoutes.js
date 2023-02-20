import {updateProductByID,deleteProductByID}
from '../controller/cartController.js';
import multer from 'multer';
import products from '../products.js';
import asyncHandler from "express-async-handler";
import { productSchema } from '../model/cartModel.js';
import mongoose from 'mongoose';

const Product = mongoose.model('Product', productSchema);

const allRoutes = (app)=>
{
    app.route('/product')
    .get(
        asyncHandler(async(req,res)=>{
            const productitems = await Product.find({});
            res.json(productitems);
        })
    )
    .post(
        async(req,res)=>{
            const importProduct =  await Product.insertMany(products);
            res.send({importProduct});
        }
    );
    
    app.route('/product/:id')
    .get(  async(req,res)=>{
        const product =  await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }
        else{
            res.status(404)
            throw new Error("Product not found");
        }
       
    }
)
    .put(updateProductByID)
    .delete(deleteProductByID);
}

export default allRoutes;