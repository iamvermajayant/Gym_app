import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="50px"
        px="40px"
        pt="24px"
        py="40px"
        alignItems="center"
      >
        <img src={Logo} alt={Logo} width="350px" height="50px"></img>
        <Typography textTransform="capitalize" variant="h5">
         Made with ❤️ By Jayant Verma
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
