import React from 'react'
import {Link} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";

const ExerciseCard = ({exercises}) => {
  return (
    <Link to={`/exercise/${exercises.id}`} className="exercise-card">
        <img src={exercises.gifUrl} alt={exercises.name} loading="lazy" />
    </Link>
  )
}

export default ExerciseCard;