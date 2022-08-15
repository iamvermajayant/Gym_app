import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/assets/icons/body-part.png";
import TargetImage from "../assets/assets/icons/target.png";
import Equiptment from "../assets/assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon : BodyPartImage,
      name : bodyPart,  
    },
    {
      icon : TargetImage,
      name : target,  
    },
    {
      icon : Equiptment,
      name : equipment,  
    }
  ]

  console.log(gifUrl);
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">{name}</Typography>
        <Typography variant="h6">
          Exercise keep you strong. {name} {` `} 
          is one of the best exercises to
          target your {target}. It will help you to improve mood and gain
          energy.
        </Typography>
        <Stack>
          {
            extraDetail.map((index) => (
              <Stack key={index.name} direction="row" gap='35px' alignItems="center">
                <Button sx={{background : '#fff2db', borderRadius : '50%', width : '100px' , height : '100px', marginBottom : '1rem'}}>
                  <img src={index.icon} alt={index.name} style={{width : '50px', height : '50px'}}/>
                </Button>
                <Typography variant = 'h6' textTransform = 'capitalize'>
                    {index.name}
                </Typography>
              </Stack>
            ))
          }
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
