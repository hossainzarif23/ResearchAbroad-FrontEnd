import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { InputField } from './InputFields/InputField';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const doLogin = async()=> {
    const res = await axios.post("http://localhost:8000/authentication/login", {username, password});
    const data = res.data;
    if (data.responseCode === 1) {
      navigate("/home", {state: {username: username, type: data.type}});
    }
  }
  return (
    <Box sx={{height: '45%', width: '15%', borderRadius: '15px', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <InputField type="text" value={username} setValue={setUsername} label="username"/>
        <InputField type="password" value={password} setValue={setPassword} label="password"/>
        <Button variant='contained' onClick={doLogin}>Login</Button>
    </Box>
  )
}

export default LoginForm