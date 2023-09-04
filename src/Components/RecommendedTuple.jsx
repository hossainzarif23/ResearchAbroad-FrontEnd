import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

import '../Assets/Styles/RecommendedTuple.css'

const RecommendedTuple = (props) => {
  const location = useLocation();
  const username = location.state.username;
  const professorusername = props.professorusername;
  const [isShortlisted, setIsShorlisted] = useState(0);
  const addToShortList = async() => {
    const res = await axios.post("http://localhost:8000/shortlist/add", {username, professorusername});
    const data = res.data;
    if (data.responseCode === 1) {
      console.log("Professor Shortlisted");
      setIsShorlisted(1);
    }
  }
  const removeFromShortList = async() => {
    const res = await axios.post("http://localhost:8000/shortlist/remove", {username, professorusername});
    const data = res.data;
    if (data.responseCode === 1) {
      console.log("Professor Removed From ShortList");
      setIsShorlisted(0);
    }
  }
  const checkShortlisted = async() => {
    const res = await axios.post("http://localhost:8000/shortlist/check", {username, professorusername});
    const data = res.data;
    if (data.responseCode === 1) {
      console.log("Professor is ShortListed");
      setIsShorlisted(1);
    }
    else if (data.responseCode === 2) {
      console.log("Professor is not ShortListed");
      setIsShorlisted(0);
    }
  }
  useEffect(() => {
    checkShortlisted();
  }, []);
  return (
    <Box height='10vh' borderBottom='1px solid #AB8C8C' sx={{backgroundColor: '#D9D9D9'}}>
        <Stack direction='row' px='20px' pt='20px' pb='10px' justifyContent='space-between'>
            <Link to={`/college/${props.college}`} color='#AB8C8C'>{props.college}</Link>
            <div><b>Supervisor:</b> <Link to={`/professor/${props.professorusername}`} color='#AB8C8C'>{props.professor}</Link></div>
        </Stack>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {isShortlisted === 0 ? <Button variant='contained' size='small' onClick={addToShortList}>Add To Shortlist</Button> : <Button variant='contained' size='small' onClick={removeFromShortList}>Remove From Shortlist</Button>}
        </div>
    </Box>
  )
}

export default RecommendedTuple