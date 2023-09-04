import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Topbar from "./Components/Topbar";
import { Box } from "@mui/material";
import { useState } from "react";
import UniversityRecommendation from "./Pages/UniversityRecommendation";

function App() {
  // let firstButtonText = 'Login'
  // let secondButtonText = 'Signup'
  const [firstButtonText, setFirstButtonText] = useState('Login');
  const [secondButtonText, setSecondButtonText] = useState('SignUp');

  const changeTopBarButtonTexts = () => {
    console.log("topBarChanged")
    setFirstButtonText('Profile')
    setSecondButtonText('Logout')
  }

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#EDC150', height: '100vh', width: '100vw'}}>
        <Topbar firstButtonText={firstButtonText} secondButtonText={secondButtonText}/>
        <Routes>
          <Route path="/" exact element={<Login changeTopBar={changeTopBarButtonTexts}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/recommendation" element={<UniversityRecommendation/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
