import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <div id="contact">
      <Box bgcolor={"#212121"} color={"gray"} p={9} mt={10}>
        <Container maxWidth={"lg"}>
          <Typography fontWeight={900} fontSize={{md:"3em",sm:"3em",xs:'1.2em'}} textAlign={"center"} color={'white'}>
            Get In Touch
          </Typography>
          <Grid container spacing={5} mt={8}>
            <Grid item md={6} sm={6}>
              <Typography p={2} fontSize={{md:"1.4em",sm:"1.4em",xs:'1em'}}>
                Get In Touch
              </Typography>
              <form action="#">
                <InputLabel Htmlfor={"text"}></InputLabel>
                <Input
                  placeholder="Your Name"
                  type="text"
                  id="text"
                  sx={{ bgcolor: "#9e9e9e", p: 1, borderRadius: 1, m: 1}}
                  fullWidth
                />
                <InputLabel Htmlfor={"email"}></InputLabel>
                <Input
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  sx={{ bgcolor: "#9e9e9e", p: 1, borderRadius: 1, m: 1 }}
                  fullWidth
                />
                <InputLabel Htmlfor={"number"}></InputLabel>
                <Input
                  placeholder="Your number"
                  type="number"
                  id="number"
                  sx={{ bgcolor: "#9e9e9e", p: 1, borderRadius: 1, m: 1 }}
                  fullWidth
                />
                <Input
                  multiline
                  rows={9}
                  placeholder="Your Message"
                  sx={{ bgcolor: "#9e9e9e", m: 1, borderRadius: 1 }}
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ borderRadius: "30px", p: 2, mt: 2 }}
                >
                  SEND MESSAGE
                </Button>
              </form>
            </Grid>
            <Grid item md={6} mt={4} sm={6}>
              <Typography p={4} fontFamily={"cursive"} fontSize={{md:"1.6em",sm:'1.2em',xs:'1.2em'}} color={'white'}>
                My Contact Details
              </Typography>
              <Typography color={"#ff7043"} fontSize={{md:"1.2em",sm:'1em',xs:'1em'}} p={2}>
                Email: <br /> <Link href={"#"}>zwandurdan@gmail.com</Link>
              </Typography>
              <Typography color={"#ff7043"} fontSize={{md:"1.2em",sm:'1em',xs:'1em'}} p={2}>
                Phone: <br />{" "}
                <span style={{ color: "gray", marginLeft: "10%" }}>
                  +923473912327
                </span>
              </Typography>
              <Typography color={"#ff7043"} fontSize={{md:"1.2em",sm:'1em',xs:'1em'}} p={2}>
                Adress: <br />
                <span style={{ color: "gray", marginLeft: "10%" }}>
                  :Bara Durushkhela
                </span>
                <br />
                <span style={{ color: "gray", marginLeft: "10%" }}>
                  :Swat
                </span>
                <br />
                <span style={{ color: "gray", marginLeft: "10%" }}>
                  :Pakistan
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Box display={'flex'} justifyContent={'center'} mt={8}>
          <Link href={"#"}>
            <Facebook sx={{p:1,bgcolor:'#6a1b9a',m:1,borderRadius:'50%',color:'white',}} fontSize="large"/>
          </Link>
          <Link href={"#"}>
            <Twitter sx={{p:1,bgcolor:'#6a1b9a',m:1,borderRadius:'50%',color:'white',}} fontSize="large"/>
          </Link>
          <Link href={"#"}>
            <Instagram sx={{p:1,bgcolor:'#6a1b9a',m:1,borderRadius:'50%',color:'white',}} fontSize="large"/>
          </Link>
          <Link href={"#"}>
            <LinkedIn sx={{p:1,bgcolor:'#6a1b9a',m:1,borderRadius:'50%',color:'white',}} fontSize="large"/>
          </Link>
          <Link href={"#"}>
            <Pinterest sx={{p:1,bgcolor:'#6a1b9a',m:1,borderRadius:'50%',color:'white',}} fontSize="large"/>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
