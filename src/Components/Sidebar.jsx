import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = (props) => {
  const location = useLocation();
  const username = location.state.username;
  //console.log(username);
  const navigate = useNavigate();
  //console.log(props.selected === 'Shortlist' ? 1 : 0);
  const redirectToShortList = () => {
    navigate("/shortlists", {state: {username: username}});
  }
  const redirectToRecommendation = () => {
    navigate("/recommendation", {state: {username: username}});
  }
  const redirectToProfessorExploration = () => {
    navigate("/professorexploration", {state: {username: username}});
  }
  const redirectToUniversityExploration = () => {
    navigate("/universityexploration", {state: {username: username}});
  }
  return (
    <Stack direction='column' spacing={2} pl={2} width='16%'>
        <Button variant='text' sx={{color: 'black', fontWeight: '700', backgroundColor: props.selected === 'Shortlist' ? '#d7a219' : 'transparent', ':hover': {backgroundColor: '#d7a219'}}} onClick={redirectToShortList}>Shortlist</Button>
        <Button variant='text' sx={{color: 'black', fontWeight: '700', backgroundColor: props.selected === 'Unirec' ? '#d7a219' : 'transparent', ':hover': {backgroundColor: '#d7a219'}}} onClick={redirectToRecommendation}>University Recommendation</Button>
        <Button variant='text' sx={{color: 'black', fontWeight: '700', backgroundColor: props.selected === 'UniExp' ? '#d7a219' : 'transparent', ':hover': {backgroundColor: '#d7a219'}}} onClick={redirectToUniversityExploration}>University Exploration</Button>
        <Button variant='text' sx={{color: 'black', fontWeight: '700', backgroundColor: props.selected === 'ProfExp' ? '#d7a219' : 'transparent', ':hover': {backgroundColor: '#d7a219'}}} onClick={redirectToProfessorExploration}>Professor Exploration</Button>
        <Button variant='text' sx={{color: 'black', fontWeight: '700', backgroundColor: props.selected === 'Guidence' ? '#d7a219' : 'transparent', ':hover': {backgroundColor: '#d7a219'}}}>Guidence</Button>
        <Button variant='text' sx={{color: 'black', fontWeight: '700', backgroundColor: props.selected === 'Forum' ? '#d7a219' : 'transparent', ':hover': {backgroundColor: '#d7a219'}}}>Forum</Button>
    </Stack>
  )
}

export default Sidebar