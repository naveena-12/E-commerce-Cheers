
import * as React from 'react';
import  { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from "../images/ctslogo.png";
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { useNavigate,useParams } from "react-router-dom";

import {
  Link as RouterLink
 
} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: (theme.palette.common.white, 0.15),
  border: '1px solid black',
  borderRadius: '30px',
  height:'auto',
  '&:hover': {
    backgroundColor: (theme.palette.common.black, 0.25),
  },
  marginRight:0,
  marginLeft: theme.spacing(2),
  width: '100%',
    [theme.breakpoints.up('xs')]: {
    width: 'auto',
  },
   [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing('3rem'),
    width: 'auto',
  },

   [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing('19rem'),
    width: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing('28rem'),
    width: 'auto',
  },
 

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  right:'0',
  pointerEvents: 'none',
  display: 'flex',
   alignItems: 'center',
  justifyContent: 'end',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
     paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    width: '100%',

  },
}));





const Header=({badgeCount,search,setSearch})=> {
   
  let navigate =  useNavigate();

  const cartPage = () => {
   
    navigate("/cart");
   }

   const searchbar = (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="search products" inputProps={{ 'aria-label': 'search' }} 
      onChange={(e) => setSearch(e.target.value)} />
    </StyledSearch>
  )
   const electronicsPage = () => {
   toggleDrawer(false);
    navigate("/electronics");
   }
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  
  return (
    
    <Box sx={{ flexGrow: 1 }} >
      <AppBar elevation={0} position="static" style={{backgroundColor:"white",color:"black"}}>
        <Toolbar>  
        <Box
            component="img"
            sx={{
            height: 64
            }}
            alt="cts"
            src={logo} onClick={()=>electronicsPage()}/>
        <Box>
        <Typography  variant="h6"
            noWrap
            component="div">
            | Cheers
        </Typography>
        </Box>
        
        <Box component="div" sx={{
              display: {
                 xs: 'none',
                 sm: 'block',
              }
            }} >
              {searchbar}
            </Box>
           
          <Box sx={{padding: '10px',display: {
                 xs: 'none',
                 sm: 'block',
              }}}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit" 
              
              >
              <AccountCircle />
            </IconButton>
            </Box>
            <Box sx={{padding: '10px',display: {
                 xs: 'none',
                 sm: 'block',
              }}}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit">
                <Badge badgeContent={badgeCount} color="primary">
                <ShoppingCartOutlinedIcon  onClick={()=>cartPage()}/>
                 </Badge>
              
            </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1,paddingLeft: '3rem',
                  mr: 2,
                display: {
                   xs: 'block',
                   sm: 'none',
                }
              }} >
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
              sx={{float: 'right'}}
            >
              <MenuIcon  />
            </IconButton>
          </Box>
          <Drawer
               anchor="right"
               open={open}
               onClose={toggleDrawer(false)}
               onChange={toggleDrawer(true)}>
                
                <Box sx={{
                  p: 2,
                  height: 1, display: { xs: 'block', sm: 'none' }
                  // backgroundColor: "#dbc8ff",
                }}>
       <ListItemButton >
                  <Box
            component="img" sx={{
            height: 64
            }} alt="cts" src={logo} onClick={()=>electronicsPage()}/>
                    <CloseIcon onClick={toggleDrawer(false)} />
                    </ListItemButton>

                  <Divider sx={{mb: 2}} />

                  <Box >
                    <ListItemButton >
                    <Link to="/electronics" component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}} onClick={toggleDrawer(false)}>Electronics</Link>
                       </ListItemButton>

                    <ListItemButton>
                    <Link to="/sports"component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}} onClick={toggleDrawer(false)}>Sports</Link>
                       </ListItemButton>

                    <ListItemButton>
                    <Link to="/outdoor"component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}} onClick={toggleDrawer(false)}>Outdoor</Link>
                     </ListItemButton>

                    <ListItemButton>
                    <Link to="/travel"component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}} onClick={toggleDrawer(false)}>Travel</Link>
                    </ListItemButton>
                      <ListItemButton>
                      <Link to="/health" component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}} onClick={toggleDrawer(false)}>Health</Link>
                      </ListItemButton>
                    {search} 
                    <ListItemButton>
                      <ListItemIcon>
                      <AccountCircle />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                       </ListItemButton>
                       <ListItemButton>
                      <ListItemIcon>
                      <ShoppingCartOutlinedIcon onClick={()=>cartPage()}/>
                      {/* <Typography>{props.cartNotificationCount}</Typography> */}
                      </ListItemIcon>
                      <ListItemText primary="Add to Cart" />
                       </ListItemButton> 
                  </Box>
                </Box>
              
            </Drawer>
          </Toolbar>
      </AppBar>
     <Box>
      {/* <div ></div> */}
    
     <Stack sx={{ display: { xs: 'none', sm: 'block' }}} ><hr style={{background:'blue',color:'blue'}} className="hrstyle" /></Stack>
      <Stack direction='row' spacing={6} m={1} marginLeft={6} sx={{ display: {
                 xs: 'none',
                 sm: 'block'
              },textAlign:'start'}}>
      <Link to="/electronics"  component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}}>Electronics</Link>
      <Link to="/sports" component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}}>Sports</Link>
      <Link to="/outdoor" component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}}>Outdoor</Link>
      <Link to="/travel" component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}}>Travel</Link>
      <Link to="/health"component={RouterLink} color="black" underline="hover" style={{fontWeight:'bold'}}>Health</Link>
      </Stack>
      <hr style={{background:'blue',color:'blue'}} />
      <Stack direction="row" m={1} spacing={1} marginLeft={6}>
      <Link to="/electronics" component={RouterLink} color="black"  underline="hover">Home</Link>
      <Link to="/cart"component={RouterLink} color="black" underline="hover">| Shopping Cart</Link>
      </Stack>
      </Box>
    
      </Box>
     
  );
}

export default Header;