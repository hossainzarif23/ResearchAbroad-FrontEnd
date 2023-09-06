import React, { useEffect, useState } from 'react'
import { Stack, Divider, Box, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Topbar2 from '../Components/Topbar2'
import Sidebar from '../Components/Sidebar'
import University from '../Components/University';
import { InputField } from '../Components/InputFields/InputField';

const UniversityExploration = () => {
  const location = useLocation();
  const username = location.state.username;
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [ranklow, setRanklow] = useState('');
  const [rankhigh, setRankhigh] = useState('');
  const [program, setProgram] = useState('');
  const [query, setQuery] = useState({country: country, state: state, city: city, ranklow: ranklow, rankhigh: rankhigh, program: program});
  const loadExploredUniversities = async() => {
    const res = await axios.post("http://localhost:8000/exploreuniversity", {query});
    const data = res.data;
    if (data.responseCode === 1) {
      //console.log(data.universities);
      setUniversities(data.universities);
      //setTuples(data.tuples);
    }
  }
  const doUniversityExploration = () => {
    setQuery({country, state, city, ranklow, rankhigh, program});
  }
  useEffect(() => {
    loadExploredUniversities();
  }, [query])
  return (
    <div>
      <Topbar2/>
      <Stack direction='row' spacing={4} divider={<Divider orientation="vertical" flexItem />}>
        <Sidebar selected="UniExp"/>
        <Box sx={{height: '70vh', width: '60%'}}>
          <h2 style={{textAlign: 'center'}}>Search Results</h2>
          {universities.map(university => (
            <div key={university.name}>
              <University college={university.name} universitylink={university.link}/>
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
          <InputField type="text" value={ranklow} setValue={setRanklow} label="rank-lower-limit"/>
          <InputField type="text" value={rankhigh} setValue={setRankhigh} label="rank-higher-limit"/>
          <Button variant='contained' onClick={doUniversityExploration} style={{width: '80%'}}>Submit</Button>      
        </Box>
      </Stack>
    </div>
  )
}

export default UniversityExploration