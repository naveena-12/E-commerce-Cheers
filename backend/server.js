import allRoutes from './src/routes/cartRoutes.js';
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';
import detailRoute from './src/routes/detailsRoute.js';
// const mongoose =require("mongoose");
import cors from 'cors';
const app = express();
const PORT =4000;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/CartShopping',{

    useNewUrlParser: true, 
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

    app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
detailRoute(app);
allRoutes(app);
// mongoose.connect("mongodb://localhost:27017/cart")
// .then((db)=>{
//     console.log("DB Connected");
// })
// .catch((err)=>{
//     console.log(err);
// });
app.get('/',(req,res)=>
res.send(`node and express running on ${PORT}`)
);
app.listen(PORT,(req,res)=>{
    console.log("Server is running on the port "+ PORT);
});
