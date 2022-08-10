import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from './HorizontalScroll'

const SearchExercises = ({bodyPart, setBodyPart , setExercises}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData ]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
        //console.log(exerciseData);

        const searchedExercises = exerciseData.filter((exercise) =>
          exercise.name?.toLowerCase().includes(search) ||
          exercise.title?.toLowerCase().includes(search) ||
          exercise.equipment?.toLowerCase().includes(search) ||
          exercise.bodyPart?.toLowerCase().includes(search)
      );
      
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch("");
      setExercises(searchedExercises);
      // window.scrollTo({top : 1800, behavior : "smooth"})
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box mb="72px" display="flex" flex-direction="row">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1100px", md: "700px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          height="76px"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position : 'relative' , p : '20px' , width : '100%'}}>
          <HorizontalScrollBar data = {bodyParts} bodyPart = {bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
