import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CoverLogo from "../../Images/3.jpg";

const Blogs = () => {
  return (
    <div id="blogs">
      <Typography
        fontSize={{ md: "4em", sm: "4em", xs: "2em" }}
        fontWeight={899}
        p={6}
        color={"lightcoral"}
        textAlign={"center"}
        mt={9}
      >
        BLOG
      </Typography>
      <Box position="relative">
        <img
          src={CoverLogo}
          alt="coverLogo for blogs"
          width={"100%"}
          height={800}
          style={{ filter: "brightness(40%)", objectFit: "cover" }}
        />
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            top: { md: "20%", sm: "20%", xs: "3%" },
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography
              sx={{
                fontSize: "3em",
                sm: "3em",
                xs: "2em",
                color: "pink",
                fontWeight: 900,
                p: 3,
              }}
            >
              MY BLOGS
            </Typography>
            <Typography
              sx={{
                color: "orange",
                letterSpacing: { md: 1, sm: 0, xs: 0 },
                fontSize: { md: 30, sm: 26, xs: 20 },
                fontFamily: {
                  md: "cursive",
                  sm: "sans-serif",
                  xs: "sans-serif",
                },
                wordSpacing: { md: 3, sm: 1, xs: 0 },
                display: { md: "flex", sm: "flex", xs: "block" },
              }}
            >
              I have a lot of Skills.
            </Typography>
            <Typography
              sx={{
                color: "white",
                letterSpacing: { md: 1, sm: 0, xs: 0 },
                pt: { md: 2, sm: 2, xs: 0 },
                fontSize: { md: 16, sm: 16, xs: 12 },
                fontFamily: {
                  md: "cursive",
                  sm: "sans-serif",
                  xs: "sans-serif",
                },
                wordSpacing: { md: 3, sm: 1, xs: 0 },
                display: { md: "flex", sm: "flex", xs: "block" },
              }}
            >
              Graphic Designer With a foundation of two years in graphic design,
              my work reflects meticulous attention to detail and a robust
              portfolio spanning a spectrum of creative projects. <br />{" "}
              Microsoft Office Proficiency Excel at utilizing the Microsoft
              Office Suite, particularly adept at harnessing the power of Word
              for document processing and Excel for efficient project. <br />{" "}
              Data Entry and Management Efficiently manage data using Microsoft
              Word and Excel, ensuring seamless organization and accessibility .{" "}
              <br />
              Banner Posts Demonstrate prowess in creating visually captivating
              banner posts, merging design aesthetics with effective
              communication. <br /> Logo Making Bring over two decades of
              experience to logo design, translating brand identities into
              visually striking symbols of excellence. <br /> In essence, my
              skills combine creativity, technical finesse, and organizational
              acumen, making me a versatile professional ready to elevate any
              project.
            </Typography>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Blogs;
