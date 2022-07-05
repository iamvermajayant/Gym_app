import React from 'react'
import {Box, Typography, Stack} from "@mui/material";
import Pagination from "@mui/material/Pagination";  
import {useState, useEffect} from 'react';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises, bodyPart }) => {
  console.log(exercises);
  return (
    <Box sx={{mt: {lg : '110px'}}}
    mt="50px"
    p="20px"
    >
    <Typography  variant="h3" mb="46px">
      Showing Results
    </Typography>
    <Stack direction="row" sx={{gap : {lg :  '110px', xs : '50px'}}} flexWrap="wrap" justifyContent="center">
      {exercises.map((exercise, index) => (
       <p>
        {exercise.name}
       </p>
      ))}
    </Stack>
    </Box>
  )
}

export default Exercises