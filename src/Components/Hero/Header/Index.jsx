import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <div id="home">
      <Box
        position={"absolute"}
        top={{ md: "100%", sm: "130%", xs: "25%" }}
        textAlign={"center"}
        m={"auto"}
        left={{ md: "20%", sm: "20%", xs: "15%" }}
      >
        <Typography
          fontSize={{ md: "3em", sm: "2em", xs: "1.2em" }}
          color={"white"}
          lineHeight={"1px"}
        >
          Hello, I'm
        </Typography>
        <Typography
          fontSize={{ md: "6em", sm: "4em", xs: "1.5em" }}
          fontWeight={900}
          color={"pink"}
          p={{ md: 2, sm: 1, xs: 1 }}
        >
          Wasim Durdan
        </Typography>
        <Typography
          color={"white"}
          letterSpacing={{ md: 6, sm: 6, xs: 0 }}
          fontSize={{ xs: "12px" }}
        >
          AND THIS IS MY PORTFOLIO
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
