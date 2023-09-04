import { Stack, Divider, Box, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { InputField } from '../Components/InputFields/InputField';
import RecommendedTuple from '../Components/RecommendedTuple';

const UniversityRecommendation = (props) => {
  const location = useLocation();
  const username = location.state.username;
  const [tuples, setTuples] = useState([])
  const [interests, setInterests] = useState([])
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [program, setProgram] = useState('');
  const [field, setField] = useState('');
  const [query, setQuery] = useState({username: username, interests: interests, country: country, state: state, city: city, program: program, field: field});
  const loadRecommendedTuples = async() => {
    //console.log(query);
    const res = await axios.post("http://localhost:8000/recommendation", {query});
    const data = res.data;
    if (data.responseCode === 1) {
      //console.log(data.tuples);
      setTuples(data.tuples);
    }
  }
  const loadInterests = async() => {
    const res = await axios.post("http://localhost:8000/recommendation/interests", {query});
    const data = res.data;
    if (data.responseCode === 1) {
      setInterests(data.interests);
    }
  }
  useEffect(() => {
    loadInterests();
  }, []);
  useEffect(() =>{
    loadRecommendedTuples();
  }, [query]);
  const doRecommendation = () => {
    setQuery({username, interests, country, state, city, program, field});
  }
  return (
    <>
      <Stack direction='row' spacing={4} divider={<Divider orientation="vertical" flexItem />}>
        <Box sx={{height: '70vh', width: '70%', pl: '60px'}}>
          <h2 style={{textAlign: 'center'}}>Recommended Colleges with Supervisors</h2>
          {tuples.map(tuple => (
            <div key={tuple.username}>
              <RecommendedTuple professorusername={tuple.username} college={tuple.uniname} professor={tuple.name}/>
            </div>
          ))}
        </Box>
        <Box sx={{height: '70vh', width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
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
            <Select value={field} label="field" onChange={(e) => setField(e.target.value)} style={{backgroundColor: 'white', width: '80%'}}>
              {interests.map(interest => (
                <MenuItem key={interest.interestfield} value={interest.interestfield}>{interest.interestfield}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant='contained' onClick={doRecommendation} style={{width: '80%'}}>Submit</Button>      
        </Box>
      </Stack>
    </>
  )
}

export default UniversityRecommendation