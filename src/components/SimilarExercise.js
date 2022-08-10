import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScroll from "./HorizontalScroll";
import Loader from "./Loader";

const SimilarExercise = ({ similarExercise, equipmentExercise }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3" mb="3rem" textTransform="capitalize">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" mb="7rem" sx={{ p: "2", position: "relative" }}>
        {similarExercise.length ? (
          <HorizontalScroll data={similarExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb="3rem" textTransform="capitalize">
        Exercises that uses the same equipment 
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercise.length ? (
          <HorizontalScroll data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
