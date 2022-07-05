import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from '../assets/assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography
        fontWeight={500}
        lineHeight="35px"
        sx={{ fontSize: { lg: "30px", xs: "22px" } }}
        mb={3}
      >
        Checkout the most Effective Exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: "#ff2625", padding : "10px 15px"}}>
        Explore exercises
      </Button>
      <Typography fontWeight="600" fontSize="" color="#ff2625" fontSize= "200px" sx={{opacity : 0.1, display : {lg : "block" , xs : 'none'}}}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="bannerimg"  className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
