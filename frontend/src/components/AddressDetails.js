import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import InfoIcon from '@mui/icons-material/Info';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';


const AddressDetails=({firstName,lastName,email,emailConfirm})=> {

    const phoneRegExp = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    const pincodeRegExp=/^[1-9][0-9]{5}$/;
    const schema  = yup.object().shape(
        {
    
        city: yup.string().required('City is required').min(4, 'City must be at least 4 characters')
        .max(15, 'City must not exceed 20 characters').test('Only letters', 'only aphabets is allowed', value => validateOnlyLetters(value)),
        

        addressline1: yup.string().required('Address is required').min(4, 'Address must be at least 4 characters')
        .max(20, 'Address must not exceed 20 characters').test('Only letters', 'only aphabets is allowed', value => validateOnlyLetters(value)),

        addressline2: yup.string(),
        pincode: yup.string().matches(pincodeRegExp, 'Pincode is not valid'),

        phonenumber1: yup.string().matches(phoneRegExp, 'Phone number is not valid'),

        stateValue:  yup.string(),
      });
     

      const validateOnlyLetters = (value: string | undefined): boolean => {
        if (value === undefined) return false;  
        return /^[A-Za-z]+$/.test(value);
      }
const navigate= useNavigate();
      const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),});
    const onSubmit = data => {
        const addressDetails = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            emailConfirm:emailConfirm,
          city: data.city,
          stateValue: data.stateValue,
          address1: data.addressline1,
          address2: data.addressline2,
          pincode: data.pincode,
          country:country,
          phonenumber: data.phonenumber1,
          addresstype: data.addresstype
        };
        console.log(addressDetails);
    
        axios
          .post("http://localhost:4000/addDetails", addressDetails)
          .then((res) => {
            console.log(res.data);
            
            setCity(addressDetails.city);
            setStateValue(addressDetails.stateValue);
            setAddress1(addressDetails.address1);
            setAddress2(addressDetails.address2);
            setCountry(addressDetails.country);
            setPhone(addressDetails.phonenumber);
            setPincode(addressDetails.pincode);
            setAddressType(addressDetails.addresstype);
          })
          .catch((error) => {
            console.log(error);
          });
        setBooked(true);
        console.log(data);
        navigate('/thankyou');
      }
      
      const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
       boxShadow:'none',
        color: theme.palette.text.secondary,
      }));

    
      const [city, setCity] = useState("");
      const [country, setCountry] = useState("India");
      const [stateValue, setStateValue] = useState("");
      const [address1, setAddress1] = useState("");
      const [address2, setAddress2] = useState("");
      const [addresstype, setAddressType] = useState("");
      const [pincode, setPincode] = useState("");
      const [phone, setPhone] = useState("");
      const [booked, setBooked] = useState(false);
      const onChangeCity = (e) => {
        setCity({ city: e.target.value });
      };
      const onChangeStateValue = (e) => {
        setStateValue({ stateValue: e.target.value });
      };
      const onChangeAddress1 = (e) => {
        setAddress1({ address1: e.target.value });
      };
      const onChangeAddress2 = (e) => {
        setAddress2({ address2: e.target.value });
      };
      const onChangeAddressType = (e) => {
        setAddressType({ addresstype: e.target.value });
      };
      const onChangePincode = (e) => {
        setPincode({ pincode: e.target.value });
      };
      const onChangePhone = (e) => {
        setPhone({ phone: e.target.value });
      };
      


  return (
    <Box sx={{ width:'100%'}}>
          <Alert sx={{marginLeft: "10px", padding:"0"}}severity="info">Note: All merchandise orders will require a signature on delivery. It will not be possible to deliver your order to a PO Box address.
           </Alert>
        <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
          <Stack>
        <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>*Country</InputLabel>
        </Item>
        <Item direction="row">
            <TextField  id="outlined-basic" name="country" fullWidth
            size="small" aria-readonly="readonly" disabled="disabled" 
            {...register("country")} sx={{float: 'left',width:"4rem",
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                }}}
            value="India"
            />
                <InfoIcon fontSize='small' color='disabled' sx={{float: 'left',
    paddingTop:'9px'}}/>
        </Item>
        </Stack>
      </Grid>
      <Grid item xs={6}>
          <Stack>
        <Item>  
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>*City</InputLabel>
            </Item>
            <Item><TextField  id="outlined-basic" name="City" fullWidth
            size="small" onChange={onChangeCity}sx={{float: 'left'}}
            {...register("city", {required :"City is required."})}
            variant="outlined"
            error={Boolean(errors.city)}
            helperText={errors.city?.message} 
            />
            </Item>
            </Stack>
      </Grid>
      <Grid item xs={6}>
      <Stack direction='row'>
                <Item>
                    <label>
                <input
              {...register('addresstype', { required: "Please select address type" })}
              type="radio"
              name="addresstype" 
              value="business"
              className="form-check-input"
              id="business"
              required={true}
              error={Boolean(errors.addresstype)}
              helperText={errors.addresstype?.message} 
            />Business</label>
                </Item>
                <Item> 
                    <label>
                <input
              {...register('addresstype', { required: "Please select address type"  })}
              type="radio"
              name="addresstype"
              required={true}
              value="residential"
              className="form-check-input" 
              id="residential"
              error={Boolean(errors.addresstype)}
              helperText={errors.addresstype?.message}
            />Residential
            </label>
                </Item>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
        <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>State</InputLabel>
            </Item>
            <Item><TextField  id="outlined-basic" name="stateValue" placeholder='Optional'fullWidth
            size="small" onChange={onChangeStateValue}sx={{float: 'left'}}
            {...register("stateValue")}
            variant="outlined"
            error={Boolean(errors.stateValue)}
            helperText={errors.stateValue?.message} 
            /></Item>
            </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
        <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>*Address Line 1</InputLabel>
            </Item>
            <Item><TextField  id="outlined-basic" name="addressline1" fullWidth
            size="small" onChange={onChangeAddress1}sx={{float: 'left'}}
            {...register("addressline1", {required :"Address is required."})}
            variant="outlined"
            error={Boolean(errors.addressline1)}
            helperText={errors.addressline1?errors.addressline1.message:"Flat/house number, floor, building, colony/society"} 
            /></Item>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
        <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>*Pin Code</InputLabel>
            </Item>
            <Item><TextField  id="outlined-basic" name="pincode" fullWidth
            size="small" onChange={onChangePincode}sx={{float: 'left'}}
            {...register("pincode", {required :"Pincode is required."})}
            variant="outlined"
            error={Boolean(errors.pincode)}
            helperText={errors.pincode?errors.pincode.message:'Enter a valid 6 digit code'} 
            /></Item>
            </Stack>
      </Grid>
      <Grid item xs={6}>
       <Stack>
       <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>Address Line 2</InputLabel>
            </Item>
            <Item><TextField  id="outlined-basic" name="addressline2" placeholder='Optional'fullWidth
            size="small" onChange={onChangeAddress2}sx={{float: 'left'}}
            {...register("addressline2", {required :"Address is required."})}
            variant="outlined"
            error={Boolean(errors.addressline2)}
            helperText={errors.addressline2 ? errors.addressline2.message: 'Street, locality/area, landmark'} 
            /></Item>
           </Stack>
      </Grid>
      <Grid item xs={6}>
          <Stack>
          <Item>
            <InputLabel htmlFor="component-simple" sx={{float: 'left'}}>*Cell Phone</InputLabel>
            </Item>
            <Item><TextField  id="outlined-basic" name="phonenumber1" fullWidth
            size="small" onChange={onChangePhone}sx={{float: 'left'}}
            {...register("phonenumber1", {required :"phonenumber is required."})}
            variant="outlined" defaultValue={'+91'}
            error={Boolean(errors.phonenumber1)}
            helperText={errors.phonenumber1?errors.phonenumber1.message:'Enter a valid 10 digit phone number'} 
            /></Item>
          </Stack>
      </Grid>
      <Grid item xs={12}>
          <hr/>
      <Stack direction ="row" spacing={1} sx={{float:"right"}}>
        <Button variant="contained" color="primary" type="reset" className="btns">
          Clear
        </Button>
        <Button variant="contained" color="primary" type="submit" className="btns">
          Continue
        </Button>
        </Stack>
      </Grid>
    </Grid>
    </form>
  </Box>
  );
}
export default AddressDetails;