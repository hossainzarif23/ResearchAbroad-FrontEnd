import { Stack } from '@mui/material'
import React from 'react'

import LoginForm from '../Components/LoginForm'
import Topbar from '../Components/Topbar'
const Login = (props) => {
  return (
    <>
      <Topbar/>
      <Stack justifyContent='center' alignItems='center' height='70vh'>
          <LoginForm/>
      </Stack>
    </>
  )
}

export default Login