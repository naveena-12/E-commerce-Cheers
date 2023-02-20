import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Header from './Header';
import CelebrationIcon from '@mui/icons-material/Celebration';
import thankyou from '../images/celeb.jpg';
export default function BoxSx() {
  return (
      <Paper>
    <Container
      sx={{
      height:600,
        backgroundSize: '100%',
        backgroundImage: `url(${thankyou})`,
      backgroundRepeat:'no-repeat',
      }}
     
    >
        <Box sx={{paddingTop:'10%'}} >
        <h4><CelebrationIcon color={'red'}></CelebrationIcon> Your Order is Confirmed</h4>
         <p>You will be receiving email with order details</p>
        </Box>
      
        </Container></Paper>
  );
}
