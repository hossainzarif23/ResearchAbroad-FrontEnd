import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Box } from '@mui/material';

const University = (props) => {
  const location = useLocation();
  const username = location.state.username;
  const [university, setUniversity] = useState({});
  const getUniversityInfo = async() => {
    const name = props.college;
    //console.log(name);
    const res = await axios.post("http://localhost:8000/university", {name});
    const data = res.data;
    if (data.responseCode === 1) {
        //console.log(data.university[0].name);
        setUniversity(data.university[0]);
      }
  }
  useEffect(() => {
    getUniversityInfo();
  }, [])
  return (
    <Box height='11vh' borderBottom='1px solid #AB8C8C' sx={{backgroundColor: '#D9D9D9'}} pt='15px' pl='15px'>
        <Link to={props.universitylink} color='#AB8C8C'>{props.college}</Link>
        <div><b>Rank:</b> {university.ranking}</div>
        <div><b>OnCampusCost:</b> ${university.oncampuscost}/yr</div>
        <div><b>OffCampusCost:</b> ${university.offcampuscost}/yr</div>
    </Box>
  )
}

export default University