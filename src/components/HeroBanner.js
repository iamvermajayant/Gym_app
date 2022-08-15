import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/assets/images/banner.png";
import HeroBannerImage2 from "../assets/assets/images/Title2.jpg";
import HeroBannerImage3 from "../assets/assets/images/Title3.jpg";
import HeroBannerImage4 from "../assets/assets/images/Title4.jpg";
import HeroBannerImage5 from "../assets/assets/images/Title5.jpg";
import HeroBannerImage6 from "../assets/assets/images/Title6.jpg";
import HeroBannerImage7 from "../assets/assets/images/Title7.jpg";




const HeroBanner = () => {
  const ImagesBanner = [
    HeroBannerImage,
    HeroBannerImage2,
    HeroBannerImage3,
    HeroBannerImage4,
    HeroBannerImage5,
    HeroBannerImage6,
    HeroBannerImage7,
  ];
  
  const [currentImage, setCurrentImage] = useState(HeroBannerImage2);
  
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentImage(ImagesBanner[Math.floor(Math.random() * ImagesBanner.length)])
    },10000)

    return () => clearInterval(intervalId);
  },[])
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
      direction="row"
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
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px 15px" }}
      >
        Explore exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#ff2625"
        fontSize="200px"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={currentImage} alt = {currentImage} className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
