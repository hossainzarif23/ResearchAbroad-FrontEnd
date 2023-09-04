import { Stack } from '@mui/material'
import React from 'react'

import LoginForm from '../Components/LoginForm'
const Login = (props) => {
  return (
    <Stack justifyContent='center' alignItems='center' height='70vh'>
        <LoginForm changeTopBar={props.changeTopBar}/>
    </Stack>
  )
}

export default Login