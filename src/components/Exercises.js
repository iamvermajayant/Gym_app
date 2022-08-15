import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const exerciseLastIndex = currentPage * exercisesPerPage;
  const exerciseFirstIndex = exerciseLastIndex - exercisesPerPage;

  const currentExercises = exercises.slice(exerciseFirstIndex, exerciseLastIndex);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({top : 1800 , behavior : 'smooth'})
  };

  useEffect(()=>{
      const fetchExercisesData = async () => {
        let exerciseData  = [];
        if(bodyPart === 'all'){
          exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        }
        else{
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
        setExercises(exerciseData);
      }
      fetchExercisesData();
      // eslint-disable-next-line
  },[bodyPart])
 
  return (
    <Box sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "90px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <p>
            <ExerciseCard exercise={exercise} key={index} />
          </p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            variant="outlined"
            color="secondary"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            size="large"
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
