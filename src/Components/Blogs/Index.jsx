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
            top: "20%",
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
                fontFamily: {
                  md: "cursive",
                  sm: "sans-serif",
                  xs: "sans-serif",
                },
                wordSpacing: { md: 3, sm: 1, xs: 0 },
                display: { md: "flex", sm: "flex", xs: "none" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              porro, mollitia, libero molestias doloribus ut cum voluptas
              eligendi laboriosam eius iste? Perspiciatis ut a odio libero
              corporis sed dignissimos rerum dolorum earum inventore voluptate
              neque ab maxime facere laboriosam consequatur animi obcaecati sunt
              accusantium voluptatibus aliquid totam, nemo vitae! Reprehenderit,
              fugit adipisci? Tempore natus tempora ipsam, aperiam dolorem porro
              ducimus incidunt laudantium numquam cum atque nostrum eius
              laboriosam aliquam consectetur dignissimos sint quasi laborum
              deserunt pariatur, commodi minus. Dolores natus voluptatem soluta
              atque excepturi, explicabo saepe corrupti ipsam debitis repellat
              culpa expedita nulla delectus architecto eaque facilis a cumque
              recusandae enim! Blanditiis maxime, dolore consequatur officiis
              facilis suscipit dolores reprehenderit dignissimos quos molestias
              porro molestiae repellendus. Labore, possimus asperiores vel
              debitis eius odit inventore voluptate porro eos pariatur culpa
              voluptatibus facilis, accusamus optio voluptatem, hic unde
              temporibus expedita ea id laborum vitae adipisci obcaecati?
              Ratione numquam atque, consequuntur dolores dignissimos sapiente
              hic quae, ut nostrum dolorum sed molestiae vel eum quod quisquam
              praesentium natus nesciunt nemo eius voluptates dicta veniam
              officia modi. Accusamus, laborum alias non omnis obcaecati, vero
              saepe voluptatum labore dolores quidem ullam magnam vel adipisci
              voluptate illo qui nihil recusandae praesentium tempora reiciendis
              nisi expedita consectetur excepturi.
            </Typography>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Blogs;
