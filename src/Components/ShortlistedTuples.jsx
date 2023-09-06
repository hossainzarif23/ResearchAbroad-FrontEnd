import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Box, Stack, Button } from '@mui/material'

const ShortlistedTuples = (props) => {
  const location = useLocation();
  const username = location.state.username;
  const professorusername = props.professorusername;
  const [university, setUniversity] = useState({});
  const [professor, setProfessor] = useState({});
  //console.log(props.buttonClicked);
  const [matchedInterestString, setMatchedInterestString] = useState('');
  const getCommonInterests = async() => {
    const res = await axios.post("http://localhost:8000/professor/matchinginterests", {username, professorusername});
    const data = res.data;
    if (data.responseCode === 1) {
      //setInterests(data.interests);
      console.log(data.interests);
      let interestString = '';
      for (let i = 0; i < data.interests.length - 1; i++) {
        interestString += data.interests[i].interestfield + ", ";
      }
      if (data.interests.length > 0) {
        interestString += data.interests[data.interests.length - 1].interestfield;
      }
      console.log(data.interests);
      console.log(interestString);
      setMatchedInterestString(interestString);
    }
  }
  const getUniversityInfo = async() => {
    const name = props.college;
    const res = await axios.post("http://localhost:8000/university", {name});
    const data = res.data;
    if (data.responseCode === 1) {
      setUniversity(data.university[0]);
    }
  }
  const getProfessorInfo = async() => {
    const res = await axios.post("http://localhost:8000/professor", {professorusername});
    const data = res.data;
    if (data.responseCode === 1) {
      setProfessor(data.professor[0]);
    }
  }
  const removeFromShortList = async() => {
    const res = await axios.post("http://localhost:8000/shortlist/remove", {username, professorusername});
    const data = res.data;
    props.setButtonClicked(props.buttonClicked + 1);
  }
  useEffect(() => {
    getUniversityInfo();
    getProfessorInfo();
    if (username !== undefined) { 
      getCommonInterests();
    }
  }, []);
  return (
    <Box minHeight='10vh' borderBottom='1px solid #AB8C8C' sx={{backgroundColor: '#D9D9D9'}}>
      <Stack direction='row' px='20px' pt='20px' pb='10px' justifyContent='space-between' alignItems='center'>
        <div>
          <Link to={props.universitylink} color='#AB8C8C'>{props.college}</Link>
          <div><b>Rank:</b> {university.ranking}</div>
          <div><b>OnCampusCost:</b> ${university.oncampuscost}/yr</div>
          <div><b>OffCampusCost:</b> ${university.offcampuscost}/yr</div>
          <div><b>Tutionfee: </b> ${professor.tutionfee}/yr</div>
        </div>
        <div style={{width: '250px'}}>
          <div><b>Supervisor: </b> <Link to={props.professorlink} color='#AB8C8C'>{props.professor}</Link></div>
          {props.matching !== undefined && matchedInterestString !== '' ? <div><b>Matching: </b>{props.matching}</div> : null}
          <div><b>Department: </b>{professor.deptname}</div>
          {matchedInterestString !== '' ? <div><b>Matched Interests: </b>{matchedInterestString}</div> : null}
        </div>
      </Stack>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button variant='contained' size='small' onClick={removeFromShortList}>Remove From Shortlist</Button>
      </div>
      <div style={{height: '2vh'}}></div>
    </Box>
  )
}

export default ShortlistedTuples