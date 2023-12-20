import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <div id="home">
      <Box
        position={"absolute"}
        top={{ md: "100%", sm: "130%", xs: "135%" }}
        textAlign={"center"}
        m={"auto"}
        left={{ md: "20%", sm: "20%", xs: "10%" }}
      >
        <Typography
          fontSize={{ md: "3em", sm: "2em", xs: "1.5em" }}
          color={"white"}
          lineHeight={"1px"}
        >
          Hello, I'm
        </Typography>
        <Typography
          fontSize={{ md: "6em", sm: "4em", xs: "2em" }}
          fontWeight={900}
          color={"pink"}
          p={{ md: 2, sm: 1, xs: 1 }}
        >
          Wasim Durdan
        </Typography>
        <Typography
          color={"white"}
          letterSpacing={{ md: 6, sm: 6, xs: 0 }}
          fontSize={{ xs: "10px" }}
        >
          AND THIS IS MY PORTFOLIO
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
