import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect, useState} from "react";
import ShowMoreText from "react-show-more-text";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UNSAFE_DataStaticRouterContext, useNavigate,useParams } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({

  padding: '5px',
 textAlign:'start',
 boxShadow:'none',
 
}));


export default function ProductDetails({cart,setCart,badgeCount,handleCartCount,handleIncrementChange,handleDecrementChange}) {

let params = useParams();
let navigate =  useNavigate();

const [product, setProduct] = useState([]);
  const fetchData = () => {
    return axios.get("http://localhost:4000/product/"+params.id)
    .then((response) => setProduct(response.data));     
  }
 
  useEffect(() => {
    fetchData();
 
  },[]);

  axios.put("http://localhost:4000/product/"+params.id,product)
  .then((res)=>{
    if(res.status === 200){
    }
  })
  .catch((err)=>{
    console.log(err)
  })



const cartNavigate=()=>{
  navigate('/cart');
}
console.log(product.quantity);

console.log(product);
const [expand, setExpand] = useState(false);
const onClick = () => {
  setExpand(!expand);
};

const cartValue=()=>{
  badgeCount=badgeCount+1;
}

let total=product.quantity*product.points;

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container >
        <Grid item xs={6} lg={5} >
        <img alt="complex" key={product._id} src={product.image} width= '220px'
    height= '252px' style={{justifyContent:'center',border:'1px solid lightgray',padding:'10px', marginLeft: '10px', marginRight: '10px'}}></img>
        </Grid>
        <Grid item xs={6} lg={7}>
          <Grid>
          <Item>
              {product.name}
          </Item>
          <Item sx={{color:'darkbue',fontWeight:'bold',textTransform:'uppercase'}}>
              <Typography color={'#0606cd'}>{product.brand}</Typography>
          </Item>
          <Item >Price: {product.points}</Item>
          <Item><CheckCircleIcon sx={{fontSize:'medium',color:'green'}}></CheckCircleIcon> Item price includes shipping and handling</Item>
          </Grid>
          <Grid xs={12}>
            <Item sx={{display: 'flex'}}>
              <div className="input-group" style={{width:'100px',marginRight: '5px'}} >
              <button type="button" className="input-group-text" style={{border:' 1px solid black'}}onClick={()=>handleDecrementChange(product)}>-</button> 
              <div className="form-control text-center" style={{border:' 1px solid black'}}>{product.quantity}</div>
              <button type="button" className="input-group-text" style={{border:' 1px solid black'}} onClick={()=>handleIncrementChange(product)}>+</button>
          </div>
          <div>
          <Button variant="contained" size="small" sx={{height: '41px',
    padding: '4px'}} onClick={()=>handleCartCount(product)} >
              <ShoppingCartIcon></ShoppingCartIcon>
               Add to Cart
          </Button> </div>
        </Item>        
        </Grid>
          <Item>
          <Button sx={{textTransform:'capitalize'}}>
            <FavoriteBorderIcon></FavoriteBorderIcon>Add to WishList</Button>
          </Item>
          <Item><hr></hr>Total 
          <span style={{float:'right',fontWeight:'bold'}}>{total}Points</span><hr></hr></Item>
          <Item>
          <LocalShippingIcon></LocalShippingIcon>
            <Typography variant='p'sx={{fontWeight:'bold'}}>Usually ships within 7 business days</Typography>
          </Item>
          <Grid sx={{border:'1px solid lightgray'}}>
            <Item sx={{fontWeight:'bold'}}>Product description</Item>
            <Item>{product.name}</Item>
          <Item>
            <ShowMoreText
        // lines={3}
        textDecoration={'none'} 
        sx={{textAlign:'start',textDecoration: 'none'}}
        more={<div style={{display:'flex',color:'#0606cd',textDecoration: 'none'}}><p>See More</p><ExpandMoreIcon ></ExpandMoreIcon></div>}
        less={<div style={{display:'flex',color:'#0606cd',textDecoration: 'none'}}><p>See Les</p><ExpandLessIcon ></ExpandLessIcon></div>}
        onClick={onClick}
        expanded={expand}
        width={600}
        maxChar={20}
      >
       {product.description}
      </ShowMoreText>
      </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}