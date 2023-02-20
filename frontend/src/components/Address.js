import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from "../components/Header";
import { Stack } from '@mui/system';
import AddressDetails from '../components/AddressDetails';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Alert  from '@mui/material/Alert';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Address(props) {
   const [value, setValue] = React.useState(0);
   const tabCount=2;
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  const schema  = yup.object().shape(
    {
  
    firstName: yup.string().required('First name is required').min(3, 'firstName must be at least 3 characters')
    .max(20, 'Username must not exceed 20 characters').test('Only letters', 'only aphabets is allowed', value => validateOnlyLetters(value)),
    lastName: yup.string().required('Last name is required').min(3, 'lastName must be at least 3 characters')
    .max(20, 'lastName must not exceed 20 characters').test('Only letters', 'only aphabets is allowed', value => validateOnlyLetters(value)),
    email: yup.string().email('Email is invalid').required('Email is required'),
    confirmEmail: yup.string().required('Please retype your email.').oneOf([yup.ref('email')], 'Your email do not match.')
  }
  )
  
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),});
  const onSubmit = data => {
     const personalDetails = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      emailConfirm: data.confirmEmail,
    };
    console.log(personalDetails);

        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setEmailConfirm(data.confirmEmail);
  
    setBooked(true);
    console.log(data);
    setValue((value + 1) % tabCount);
    reset();
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
   const validateOnlyLetters = (value: string | undefined): boolean => {
    if (value === undefined) return false;
  
    return /^[A-Za-z]+$/.test(value);
  }
  
   const  validateInputEmail = (value: string | undefined): boolean => {
    if (value === undefined) return false;
  
    return /^[a-zA-Z0-9.-/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
  }
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
   boxShadow:'none',
    color: theme.palette.text.secondary,
  }));
  
  const [booked, setBooked] = useState(false);
  
  const onChangeFirstName = (e) => {
    setFirstName({ firstName: e.target.value });
  };
  const onChangeLastName = (e) => {
    setLastName({ lastName: e.target.value });
  };
  const onChangeEmail = (e) => {
    setEmail({ email: e.target.value });
  };
  const onChangeEmailConfirm = (e) => {
    setEmailConfirm({ emailConfirm: e.target.value });
  };
  


  return (
     
    <Box sx={{ width: '100%'}}>
      <Stack direction="column" sx={{ borderBottom: 1, borderColor: 'divider',margin:"10px 40px" }}>
      <Typography sx={{ cursor: 'pointer',fontWeight:"bold",textAlign:"start"}} variant="h6">
            Add a new address
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Personal Details" {...a11yProps(0)} />
          <Tab label="Address Details" {...a11yProps(1)} />
        </Tabs>
      </Stack>
      <TabPanel value={value} index={0}>


    <Paper elevation={0}>
        <Alert sx={{marginLeft: "10px", padding:"0",textAlign:"start"}}severity="info">Note: All fields marked with asterisk * are madatory. You are being asked to provide this information so that we can process your order and such 
        information will only be used for this purpose.</Alert>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" sx={{marginLeft: "10px"}}>
            <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>*First Name</InputLabel>
            </Item>
            <Item>
            <TextField  id="outlined-basic" name="firstName" 
            size="small" onChange={onChangeFirstName}sx={{float: 'left',width: "50%"}}
            {...register("firstName", {required :"First Name is required.",maxLength: 15,pattern: /^[A-Za-z]+$/i})}
            variant="outlined"
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message} 
            />
            </Item>
            
            <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>*Last Name</InputLabel>   </Item>
            <Item>
            <TextField  id="outlined-basic" name="lastName" 
            size="small" onChange={onChangeLastName}sx={{float: 'left',width: "50%"}}
            {...register("lastName", {required :"Last Name is required.",maxLength: 15,pattern: /^[A-Za-z]+$/i})}
            variant="outlined"
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message} 
            />
            </Item>
         
            
            <Item> 
            <InputLabel htmlFor="component-simple"  sx={{float: 'left'}}>*Email Address</InputLabel> </Item>
            <Item><TextField id="outlined-basic" name="email" 
            size="small"onChange={onChangeEmail}
            {...register("email", {required :"Email Address is required."})}
            variant="outlined" sx={{float: 'left',width: "50%"}}
            error={Boolean(errors.email)}
            helperText={errors.email?.message} 
            /></Item>
            
          

            <Item>
            <InputLabel htmlFor="component-simple"  sx={{float: 'left'}}>*Confirm Email Address</InputLabel>  </Item>
           <Item > <TextField  id="outlined-basic" name="confirmEmail" size="small" onChange={onChangeEmailConfirm}
            {...register("confirmEmail", {required :"Confirm Email Address is required."})}
            variant="outlined" sx={{float: 'left',width: "50%"}}
            error={Boolean(errors.confirmEmail)}
            helperText={errors.confirmEmail?.message} rule='asterisk'
            /></Item>
          
        </Stack>
        <hr/>
        <Stack direction ="row" spacing={1} sx={{float:"right",marginBottom: '13px'}}>
        <Button variant="contained" color="primary" type="reset" className="btns">
          Clear
        </Button>
        <Button variant="contained" color="primary" type="submit" className="btns">
          Continue
        </Button>
        </Stack>
        </form>
  </Paper>



      </TabPanel>
      
      <TabPanel value={value} index={1}>
       {<AddressDetails firstName={firstName} lastName={lastName} email={email} emailConfirm={emailConfirm}/>}
      </TabPanel>
     
    </Box>
  );
}
