import React, { useState, useEffect } from 'react'
import { Stack, Divider, Box, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { InputField } from '../Components/InputFields/InputField';
import Sidebar from '../Components/Sidebar'
import Topbar2 from '../Components/Topbar2'
import RecommendedTuple from '../Components/RecommendedTuple'

const ProfessorExploration = () => {
  const location = useLocation();
  const username = location.state.username;
  const [tuples, setTuples] = useState([])
  const [interests, setInterests] = useState([])
  const [studentInterests, setStudentInterests] = useState([]);
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [program, setProgram] = useState('');
  const [field, setField] = useState('');
  const [department, setDepartment] = useState('');
  const [ranklow, setRanklow] = useState('');
  const [rankhigh, setRankhigh] = useState('');
  const [query, setQuery] = useState({username: username, interests: interests, country: country, state: state, city: city, program: program, field: field, department: department, ranklow: ranklow, rankhigh: rankhigh, studentInterests: studentInterests});
  const loadExploredProfessors = async() => {
    const res = await axios.post("http://localhost:8000/exploreprofessor", {query});
    const data = res.data;
    if (data.responseCode === 1) {
      //console.log(data.tuples);
      setTuples(data.tuples);
    }
  }
  const loadInterests = async() => {
    const res = await axios.post("http://localhost:8000/exploreprofessor/interests");
    const data = res.data;
    if (data.responseCode === 1) {
      //console.log(data.interests);
      setInterests(data.interests);
    }
  }
  const doProfessorExploration = () => {
    setQuery({username, interests, country, state, city, program, field, department, ranklow, rankhigh, studentInterests});
  }
  useEffect(() => {
    loadInterests();
  }, []);
  useEffect(() =>{
    loadExploredProfessors();
  }, [query]);
  return (
    <div>
      <Topbar2/>
      <Stack direction='row' spacing={4} divider={<Divider orientation="vertical" flexItem />}>
        <Sidebar selected="ProfExp"/>
        <Box sx={{minHeight: '70vh', width: '60%'}}>
          <h2 style={{textAlign: 'center'}}>Search Results</h2>
          {tuples.map(tuple => (
            <div key={tuple.username}>
              <RecommendedTuple professorusername={tuple.username} college={tuple.uniname} professor={tuple.name} professorlink={tuple.personalweblink} universitylink={tuple.link}/>
            </div>
          ))}
        </Box>
        <Box sx={{height: '70vh', width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <InputField type="text" value={country} setValue={setCountry} label="country"/>
          <InputField type="text" value={state} setValue={setState} label="state"/>
          <InputField type="text" value={city} setValue={setCity} label="city"/>
          <FormControl>
          <InputLabel id="demo-simple-select-standard-label">program</InputLabel>
            <Select value={program} label="program" onChange={(e) => setProgram(e.target.value)} style={{backgroundColor: 'white', width: '80%'}}>
              <MenuItem value="MS">MS</MenuItem>
              <MenuItem value="PhD">PhD</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
          <InputLabel id="demo-simple-select-standard-label">field</InputLabel>
          <Select value={studentInterests} label="interests" multiple onChange={(e) => setStudentInterests(e.target.value)} style={{backgroundColor: 'white', width: '80%'}}>
              {interests.map(interest => (
                <MenuItem key={interest.name} value={interest.name}>{interest.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <InputField type="text" value={department} setValue={setDepartment} label="department"/>
          <InputField type="text" value={ranklow} setValue={setRanklow} label="uni-rank-lower-limit"/>
          <InputField type="text" value={rankhigh} setValue={setRankhigh} label="uni-rank-higher-limit"/>
          <Button variant='contained' onClick={doProfessorExploration} style={{width: '80%'}}>Submit</Button>      
        </Box>
      </Stack>
      <div style={{height: '10vh'}}></div>
    </div>
  )
}

export default ProfessorExploration