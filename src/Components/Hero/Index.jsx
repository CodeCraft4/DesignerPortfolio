import React from "react";
import DrawerAppBar from "./Navbar/Index";
import { Box } from "@mui/material";
import Header from "./Header/Index";
import CoverImg from "../../Images/6.jpg";

const Hero = () => {
  return (
    <div>
      <Box position={"relative"} height={900}>
        <img
          src={CoverImg}
          alt="coverPhoto"
          style={{
            width: "100%",
            filter: "brightness(60%)",
            objectFit: "cover",
            height: 900,
          }}
        />
      </Box>
      <DrawerAppBar />
      <Header />
    </div>
  );
};

export default Hero;
