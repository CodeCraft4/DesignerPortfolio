import React from "react";
import { Box, Typography } from "@mui/material";
import "./Slider.css";
import {
  ArrowRightAltOutlined,
} from "@mui/icons-material";

export const CardSlider = ({ img, Title, person, description }) => (
  <div>
    <Box
      mt={6}
      width={{ md: 510, xs: 296, sm: 450 }}
      boxShadow={"2px 15px 40px gray"}
      p={3}
      borderRadius={3}
    >
      <img
        src={img}
        alt="TestimonialImg"
        width={70}
        height={70}
        style={{ borderRadius: "50%", margin: 4 }}
      />
      <Typography
        sx={{
          fontStyle: "italic",
          fontSize: { md: 16, sm: 16, xs: 13 },
          wordWrap: "break-word",
        }}
      >
        {description}
      </Typography>

      <Typography
        fontWeight={"bold"}
        fontSize={{ md: 20, xs: 15 }}
        p={2}
        color={"orange"}
      >
        {person}
      </Typography>
      <ArrowRightAltOutlined fontSize="large" sx={{color:'GrayText'}}/>
    </Box>
  </div>
);
