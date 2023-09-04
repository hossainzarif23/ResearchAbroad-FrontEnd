import React from 'react'
import { Avatar, Stack, Button } from '@mui/material'

import topiconimage from '../Assets/Images/topiconimage.jpg'

const Topbar = (props) => {
  return (
    <Stack direction='row' justifyContent='space-between' padding={6}>
        <Stack direction='row' spacing={2}>
            <Avatar src={topiconimage} alt='topiconimage' sx={{height: '60px', width: '60px'}}/>
            <h1>ResearchAbroad</h1>
        </Stack>
        <Stack direction='row' spacing={2}>
            <Button variant='contained' sx={{height: '40px', width: '70px'}}>{props.firstButtonText}</Button>
            <Button variant='contained' sx={{height: '40px', width: '70px'}}>{props.secondButtonText}</Button>
        </Stack>
    </Stack>
  )
}

export default Topbar