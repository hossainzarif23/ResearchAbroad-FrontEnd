import { Avatar, Box, Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import university from '../Assets/Images/university.jpg'
import exploreuniversity from '../Assets/Images/exploreuniversity.jpg'
import guidelines from '../Assets/Images/guidelines.jpg'
import forumdiscussion from '../Assets/Images/forum&discussion.jpg' 

const StudentHome = (props) => {
    
    const navigate = useNavigate();
    const redirectToUniversityExploration = () => {
        navigate("/recommendation", {state: {username: props.username}})    
    }
    return (
        <Box sx={{height: '75vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <Stack direction='row' padding={6} justifyContent='space-between'>
                <Stack direction='row' spacing={2} width='30%'>
                    <Button startIcon={<Avatar src={university} alt='university recommendation' sx={{height: '150px', width: '150px', borderRadius: '35px'}}/>} sx={{width: '500px'}} onClick={redirectToUniversityExploration}/>
                    <div>
                        <h2 style={{marginTop: '0px'}}>University Recommendation</h2>
                        <h4 style={{fontWeight: '500'}}>Are you tired of searching for universities which is suitable for you? Here you can find your perfect match according to your academic and non academic preferences</h4>
                    </div>
                </Stack>
                <Stack direction='row' spacing={2} width='30%'>
                    <div>
                        <h2 style={{marginTop: '0px'}}>University Exploration</h2>
                        <h4 style={{fontWeight: '500'}}>Discover the world of higher education & select the best ones from your desired list</h4>
                    </div>
                    <Button startIcon={<Avatar src={exploreuniversity} alt='explore universities' sx={{height: '150px', width: '150px', borderRadius: '35px'}}/>} sx={{width: '250px'}}/>
                </Stack>
            </Stack>
            <Stack direction='row' padding={6} justifyContent='space-between'>
                <Stack direction='row' spacing={2} width='30%'>
                    <Button startIcon={<Avatar src={forumdiscussion} alt='forum and discussion' sx={{height: '150px', width: '150px', borderRadius: '35px'}}/>} sx={{width: '400px'}}/>
                    <div>
                        <h2 style={{marginTop: '0px'}}>Forum & Discussion</h2>
                        <h4 style={{fontWeight: '500'}}>Do you have questions regarding the whole process of your higher studies?Or do you want to have a discussion with the peers?</h4>
                    </div>
                </Stack>
                <Stack direction='row' spacing={2} width='30%'>
                    <div>
                        <h2 style={{marginTop: '0px'}}>Guidelines</h2>
                        <h4 style={{fontWeight: '500'}}>Explore guidelines about your research & higher study journey</h4>
                    </div>
                    <Button startIcon={<Avatar src={guidelines} alt='guidelines' sx={{height: '150px', width: '150px', borderRadius: '35px'}}/>} sx={{width: '200px'}}/>
                </Stack>
            </Stack>
        </Box>
    )
}

export default StudentHome