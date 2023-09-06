import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Box, Stack, Button } from '@mui/material'

const ShortlistedTuples = (props) => {
  const location = useLocation();
  const username = location.state.username;
  const professorusername = props.professorusername;
  console.log(props.buttonClicked);
  const removeFromShortList = async() => {
    const res = await axios.post("http://localhost:8000/shortlist/remove", {username, professorusername});
    const data = res.data;
    props.setButtonClicked(props.buttonClicked + 1);
  }
  return (
    <Box height='10vh' borderBottom='1px solid #AB8C8C' sx={{backgroundColor: '#D9D9D9'}}>
        <Stack direction='row' px='20px' pt='20px' pb='10px' justifyContent='space-between'>
            <Link to={props.universitylink} color='#AB8C8C'>{props.college}</Link>
            <div><b>Supervisor:</b> <Link to={props.professorlink} color='#AB8C8C'>{props.professor}</Link></div>
        </Stack>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant='contained' size='small' onClick={removeFromShortList}>Remove From Shortlist</Button>
        </div>
    </Box>
  )
}

export default ShortlistedTuples