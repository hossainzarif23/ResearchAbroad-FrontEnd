import React from 'react'
import { useLocation } from 'react-router-dom'
import ProfessorHome from './ProfessorHome';
import StudentHome from './StudentHome';

const Home = () => {
  const location = useLocation();
  const username = location.state.username;
  const type = location.state.type;  
  return (
    <div className="container">
      {type === "student" ? (<StudentHome username={username}/>) : (<ProfessorHome username={username}/>)}
    </div>
  )
}

export default Home