import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Electronics=({products,search})=>{
    const Item = styled(Paper)(({ theme }) => ({
     boxShadow:"none",
        padding: theme.spacing(1),
        textAlign: 'center',
      }));
     
      const navigate = useNavigate();
      const productDetails=(id)=>{
        navigate("/productDetails/"+id)
      }
return(
    <Box sx={{ flexGrow: 1,marginLeft:"14px" }}>
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
    { 
         products.filter((item)=>{
           return search.toLowerCase()===''?item:item.name.toLowerCase().includes(search);
         })
         .map((productObj) => {
          if(productObj.category=="electronics"){
            return(
                <Grid item xs={2} sm={4} md={4}>
                <Item> <Card raised
  sx={{
    maxWidth: 280,height:'400px',
    margin: "0 auto",boxShadow:"none", border:"1px solid grey",
    padding: "0.1em",
  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={productObj.image} height='250'sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          onClick={() => {productDetails(productObj._id)}}
        />
        <CardContent sx={{padding:0}}>
        <Typography gutterBottom variant="p" component="div" sx={{fontSize:"20px", textTransform:"uppercase",fontWeight:"bold"}}>
            {productObj.brand}
          </Typography>
          <Typography gutterBottom variant="p" component="div" sx={{fontSize:"13px"}}onClick={() => {productDetails(productObj._id)}}>
            {productObj.name}
          </Typography>
          <Typography gutterBottom variant="p" component="div" sx={{color:"#03038d",fontWeight:"bold"}}>
            {productObj.points}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          {productObj.points}
        </Button>
      </CardActions> */}
    </Card>
    </Item>
              </Grid>
                
            )
         }})
    }
    </Grid>
    </Box>
)

}
export default Electronics;