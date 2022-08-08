import React from 'react';
import {Typography, Box, Stack} from '@mui/material';


const ExerciseVideos = ({exerciseVideos, name}) => {
  console.log(exerciseVideos);
  if(!exerciseVideos.length){
    return <Typography variant='h4'>Loading...</Typography>
  }
  return (
    <Box sx={{ marginTop: { lg : '200px' , xs : '20px'}}} p='20px'>
    <Typography variant="h3" textTransform="capitalize" mb="35px">
      Watch <span style={{color : 'red'}}>{name}</span> exercise Videos.
    </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection : {lg : 'row'},
          gap : {lg : '110px', xs : '0'}
        }}
        >
          {exerciseVideos?.slice(0,6).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{borderBottomLeftRadius : '35px' , borderTopRightRadius : '35px'}} />
              <Box>
                <Typography variant='h5' color='#000'>{item.video.title}</Typography>
                <Typography variant='h6' fontWeight="600" color='#000'>{item.video.channelName}</Typography>
              </Box>
            </a>
          ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos