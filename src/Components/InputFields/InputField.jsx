import React from 'react';
import { TextField } from '@mui/material';

export const InputField = (props) => {
  return (
    <TextField type={props.type} label={props.label} variant="outlined" value={props.value} onChange={(e) => {props.setValue(e.target.value)}} InputProps={props.InputProps} style={{backgroundColor: 'white', width: '80%'}}/>
  )
}