import * as React from 'react';
import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from "../components/Header";
// import {useCart} from "react-use-cart";

const Img = styled('img')({
  // margin: 'auto',
  // display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
    // padding: '2rem',
});


export default function ShoppingCart({cart,setCart}) {

  const navigate = useNavigate();
  
const addressPage = () => {
  navigate("/address")
}

const productDetails=(id)=>{
  navigate("/productDetails/"+id)
}

const electronicsPage=()=>{
  navigate("/electronics");
}


const [price,setPrice]= useState(0);

const handleRemove =(id)=>{
  const arr = cart.filter((item)=>item._id!==id);
  setCart(arr);
  handlePrice();
  alert('Product removed from the cart');

}

const handlePrice=()=>{
  let temp=0;
  cart.map((item)=>(temp+=item.quantity*item.points));
  setPrice(temp);
}

useEffect(()=>{
  handlePrice();
})

 let totalPrice = 0;
 let points=0;
 function CartProducts() {
return(
  <>  <h5 style={{textAlign: 'start',
  paddingLeft: '44px'}}>My Shopping Cart</h5>{
  cart.map((productObj) => {
  
     points =productObj.quantity*productObj.points;
    //  totalPrice= totalPrice + points;
     
   return(
      
     <Grid container xs={12} sm={12}>
       <Grid width={"100%"} style={{ paddingLeft: '40px',paddingRight: '40px'}}>
       <hr></hr>
       </Grid>
       
     <Grid item xs={4} lg={3} width={"25%"}>
       <Box sx={{ width: 150, height: 150, border:"1px solid lightgray", margin :'15px',marginLeft:'50px'}}>
        <Img alt="complex" key={productObj._id} src={productObj.image} onClick={() => {productDetails(productObj._id)}}></Img>
     </Box>
     </Grid>
     <Grid item xs={6} lg={9} width="80%" container sx={{textAlign: 'left',marginTop:'15px', paddingLeft: { xs: '50px' ,  lg:'0px'}}}>
       <Grid item xs >
         <Grid item xs>
           <Typography sx={{textTransform:'uppercase'}} variant="p" component="div" key={productObj._id}>
           {productObj.name}
           </Typography>
         </Grid>
         <Grid  item xs container direction="row" sx={{paddingTop:'5px'}}>
         <Grid>
         <Typography variant="p" component="div" key={productObj._id}>
            Quantity: {productObj.quantity}
         </Typography>
         
         </Grid>
         <Grid >
           <Button sx={{textTransform : 'capitalize',color : '#0d5194',padding: { xs: '0' },paddingLeft:{xs:'58px'}}} onClick={()=>handleRemove(productObj._id)}>Remove</Button>
           </Grid>
         </Grid>
       </Grid>
       <Grid item sx={{textAlign: 'left',paddingRight:'90px'}}>
         <Typography variant="subtitle1" component="div" key={productObj._id} sx={{fontWeight:'bold'}}>
         {points} Points
         </Typography>
       </Grid>
      
     </Grid> 
   </Grid> )
})}
     <Grid width={"100%"} style={{ paddingLeft: '40px',paddingRight: '40px'}}>
       <hr></hr>
       </Grid>
  <Grid item xs={12} sm container sx={{textAlign: 'right',paddingRight:'90px'}}>
    <Grid item xs container direction="column" spacing={1}>
    <Grid item sx={{textAlign: 'right'}}>
          <Typography variant="subtitle1" component="div" sx={{fontWeight:'bold'}}>
          Total: {price} Points
          </Typography>
        </Grid>
        <Grid item sx={{textAlign: 'right'}}>
          <Typography variant="subtitle1" component="div" sx={{color: 'grey',fontSize:'12px'}}>
         Item price includes shipping and handling 
          </Typography>
        </Grid>
        <Grid container direction="row" spacing={2} sx={{justifyContent: 'end'}}>
        <Grid item >
          <Button size="small" sx={{textTransform : 'capitalize'}} onClick={()=>electronicsPage()}>Continue Shopping</Button>
        </Grid>
        <Grid item >
        <Button variant="contained" size="small" onClick={() => addressPage()} sx={{backgroundColor : '#0d5194',textTransform : 'capitalize'}}>
        Secure Checkout
      </Button>
        </Grid>
        </Grid>
  </Grid>    
  </Grid>
  </>
)
  
};

  return (
    <>
    <Paper sx={{boxShadow: 'none'}}> 
    
   <div>
      {cart.length===0 ? <div><h5 style={{margin:'5%'}}>Your cart is empty</h5>
      <Grid >
          <Button variant="contained" size="medium" sx={{textTransform : 'capitalize', float:'right',marginRight:'10%'}} onClick={()=>electronicsPage()}>Continue Shopping</Button>
        </Grid>
        </div>:<CartProducts/>}
    </div>

    </Paper>
    </>
  );
}
