import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {exerciseOptions, fetchData , youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercise from '../components/SimilarExercise';


const ExerciseDetail = () => {
  const [exerciseDetail , setExercisesDetail] = useState({});
  const [exerciseVideos , setExercisesVideos] = useState([])
  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesDetail =  async () => {
      const exerciseDetailUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeDetailUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData  = await fetchData(`${exerciseDetailUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExercisesDetail(exerciseDetailData);

      const youtubeExerciseVideos = await fetchData(`${youtubeDetailUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExercisesVideos(youtubeExerciseVideos.contents);
    }
    fetchExercisesDetail();
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercise/>
    </Box>
  )
}

export default ExerciseDetail;