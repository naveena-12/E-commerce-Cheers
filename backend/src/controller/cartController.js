import mongoose from "mongoose";
import multer from 'multer';
import fs from 'fs';
import { productSchema } from "../model/cartModel.js";
import products from '../products.js';



const Product = mongoose.model('Product', productSchema);

export const updateProductByID = (req, res) => {

    Product.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true },
        (err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
}

export const deleteProductByID = (req, res) => {

    Product.findByIdAndDelete({ _id: req.params.id },
        function(err, product){

            if (err) {
                res.send(err);
            }

            res.json({ message: "The product was deleted." });
        });

}