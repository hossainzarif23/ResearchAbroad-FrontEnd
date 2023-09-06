import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { Stack, Divider, Box} from '@mui/material'

import Sidebar from '../Components/Sidebar';
import ShortlistedTuples from '../Components/ShortlistedTuples';
import Topbar2 from '../Components/Topbar2';

const ShortLists = () => {
  const location = useLocation();
  const username = location.state.username;
  const [shortlists, setShortlists] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(0);
  const loadShortlists = async() => {
    const res = await axios.post("http://localhost:8000/shortlist", {username});
    const data = res.data;
    if (data.responseCode === 1) {
      console.log(data.shortlists);
      setShortlists(data.shortlists);
    }
  }
  useEffect(() => {
    loadShortlists();
  }, [buttonClicked]);
  return (
    <div>
      <Topbar2/>
      <Stack direction='row' spacing={4} divider={<Divider orientation="vertical" flexItem />}>
        <Sidebar selected="Shortlist"/>
        <Box sx={{height: '70vh', width: '60%'}}>
          <h2 style={{textAlign: 'center'}}>Shortlisted Colleges with Supervisors</h2>
          {shortlists.map(tuple => (
            <div key={tuple.username}>
              <ShortlistedTuples professorusername={tuple.username} college={tuple.uniname} professor={tuple.name} professorlink={tuple.personalweblink} universitylink={tuple.link} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>
            </div>
          ))}
        </Box>
      </Stack>
    </div>
  )
}

export default ShortLists