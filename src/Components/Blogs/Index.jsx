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
            top:{md:'20%',sm:'20%',xs:'3%'},
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
                color: "white",
                letterSpacing: { md: 1, sm: 0, xs: 0 },
                fontSize:{md:16,sm:16,xs:12},
                fontFamily: {
                  md: "cursive",
                  sm: "sans-serif",
                  xs: "sans-serif",
                },
                wordSpacing: { md: 3, sm: 1, xs: 0 },
                display: { md: "flex", sm: "flex", xs: "block" },
              }}
            >
              Graphic designer blogs serve as valuable resources for both
              professionals and enthusiasts, offering insights, trends, and
              creative inspiration. These blogs showcase the latest design
              projects, share industry knowledge, and provide tutorials to
              enhance skills. For instance, the Coursera article explores the
              roles and skills of a graphic designer, guiding aspiring designers
              on their journey. Meanwhile, the blogonyourown.com list of the "23
              Best Graphic Design Blogs" is a treasure trove for staying updated
              on design trends and finding direction in the dynamic world of
              graphic design. Additionally, blogs like designwizard.com
              highlight the work of famous graphic designers, offering a glimpse
              into their creativity and impact on the industry.
            </Typography>
            <Typography
              sx={{
                color: "white",
                letterSpacing: { md: 1, sm: 0, xs: 0 },
                pt:{md:2,sm:2,xs:0},
                fontSize:{md:16,sm:16,xs:12},
                fontFamily: {
                  md: "cursive",
                  sm: "sans-serif",
                  xs: "sans-serif",
                },
                wordSpacing: { md: 3, sm: 1, xs: 0 },
                display: { md: "flex", sm: "flex", xs: "block" },
              }}
            >
              UI Designer Blogs: A Wealth of Knowledge and Inspiration.
              UI designer blogs offer a plethora of insights, tips, and
              resources for both beginners and seasoned professionals. The
              "Learn UI Design" blog provides a comprehensive list of "100
              Things a UX/UI Designer Should Know," covering a broad spectrum of
              topics essential for designers to master their craft[1]. The UX
              Design Institute's blog features a valuable "UI Glossary" with 100
              terms, creating a language resource to enhance designers'
              understanding and communication skills[2]. CareerFoundry's blog
              explains the roles and responsibilities of UI designers, offering
              a guide to the dynamic and varied nature of the profession[3]. For
              those seeking reading recommendations, Medium's list of "Ultimate
              UX, UI Design Books & Blogs" compiled by Christine Vallaure
              includes essential resources for staying updated in the field[4].
              Aspiring designers can also explore the differences between UX and
              UI design in CareerFoundry's guide, providing clarity on these
              distinct but interconnected disciplines[5].
            </Typography>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Blogs;
