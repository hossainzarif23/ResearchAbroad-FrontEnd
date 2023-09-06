import React from 'react'
import { useLocation } from 'react-router-dom'

import ProfessorHome from './ProfessorHome';
import StudentHome from './StudentHome';
import Topbar2 from '../Components/Topbar2';

const Home = () => {
  const location = useLocation();
  const username = location.state.username;
  const type = location.state.type;  
  return (
    <div className="container">
      <Topbar2/>
      {type === "student" ? (<StudentHome username={username}/>) : (<ProfessorHome username={username}/>)}
    </div>
  )
}

export default Home