import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Topbar from "./Components/Topbar";
import { Box } from "@mui/material";
import { useState } from "react";
import UniversityRecommendation from "./Pages/UniversityRecommendation";
import ShortLists from "./Pages/ShortLists";
import ProfessorExploration from "./Pages/ProfessorExploration";
import UniversityExploration from "./Pages/UniversityExploration";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#EDC150', minHeight: '100vh', width: '100vw'}}>
        {/* <Topbar firstButtonText={firstButtonText} secondButtonText={secondButtonText}/> */}
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/recommendation" element={<UniversityRecommendation/>}/>
          <Route path="/shortlists" element={<ShortLists/>}/>
          <Route path="/professorexploration" element={<ProfessorExploration/>}/>
          <Route path="/universityexploration" element={<UniversityExploration/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
