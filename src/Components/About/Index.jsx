import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ABOUT_DATA } from "Constant/content";
import {
  ArrowRightAltOutlined,
} from "@mui/icons-material";

const About = () => {
  return (
    <div id="about">
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          fontSize={{ md: "4em", sm: "4em", xs: "2em" }}
          fontWeight={899}
          p={6}
          color={"lightcoral"}
        >
          ABOUT US
        </Typography>
        <Grid container spacing={2}>
          {ABOUT_DATA.map((item) => (
            <Grid item md={4} sm={6} xs={12}>
              <Box
                p={2}
                bgcolor={"black"}
                borderRadius={"40px 6px"}
                sx={{
                  outline:'1px solid gray',
                  "&:hover": {
                    mt: "-5px",
                    transition: "all ease-in .2s",
                    boxShadow: "4px 5px 10px gray",
                  },
                }}
              >
                <img
                  src={item.imgUrl}
                  alt="aboutImg"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  textAlign={"start"}
                  p={2}
                  color={"white"}
                  display={"flex"}
                  sx={{"&:hover":{
                    mx:1,
                    transition:'.5s'
                  }}}
                >
                  <ArrowRightAltOutlined />
                  <span
                    style={{ fontWeight: 800, color: "orange", marginLeft: 3 }}
                  >
                    {item.education}
                  </span>
                </Typography>
                <Typography fontStyle={"italic"} color={"gray"} p={1}>
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ borderRadius: "20px", px: 5, mb: 5 }}
                >
                  View More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default About;
