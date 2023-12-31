import {
  Box,
  Button,
  Grid,
  Input,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Pinterest,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Firestore/firestore";

const Contact = () => {
  // Usestate hook for input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  // Refrence for input Form to store data in Firestore
  const userRefrence = collection(db, "ContactForm");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && number && message) {
      await addDoc(userRefrence, {
        name: name,
        email: email,
        number: number,
        message: message,
      });
      alert("Data has been Store in fireBase");
    } else {
      document.getElementById("name").innerHTML = "Please fill your Name";
      document.getElementById("email").innerHTML =
        "Please fill Email example@example.com";
      document.getElementById("number").innerHTML =
        "Please fill your Phone Number";
    }
  };

  return (
    <div id="contact">
      <Box bgcolor={"#212121"} color={"gray"} p={9} mt={10}>
        <Typography
          fontWeight={900}
          fontSize={{ md: "3em", sm: "3em", xs: "1.2em" }}
          textAlign={"center"}
          color={"white"}
        >
          Get In Touch
        </Typography>
        <Grid container spacing={8} mt={8}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography
              p={2}
              fontSize={{ md: "1.4em", sm: "1.4em", xs: "1em" }}
            >
              Get In Touch
            </Typography>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Enter your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ bgcolor: "#9e9e9e", p: 1, borderRadius: 1, m: 1 }}
                fullWidth
              />
              <span
                style={{
                  color: "orange",
                  fontSize: 14,
                  marginLeft: 10,
                  fontStyle: "italic",
                  fontWeight: "lighter",
                }}
                id="name"
              ></span>
              <Input
                placeholder="Enter your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ bgcolor: "#9e9e9e", p: 1, borderRadius: 1, m: 1 }}
                fullWidth
              />
              <span
                style={{
                  color: "orange",
                  fontSize: 14,
                  marginLeft: 10,
                  fontStyle: "italic",
                  fontWeight: "lighter",
                }}
                id="email"
              ></span>
              <Input
                placeholder="Enter your Phone Number"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                sx={{ bgcolor: "#9e9e9e", p: 1, borderRadius: 1, m: 1 }}
                fullWidth
              />
              <span
                style={{
                  color: "orange",
                  fontSize: 14,
                  marginLeft: 10,
                  fontStyle: "italic",
                  fontWeight: "lighter",
                }}
                id="number"
              ></span>
              <Input
                multiline
                rows={9}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                sx={{ bgcolor: "#9e9e9e", borderRadius: 1, m: 1 }}
                fullWidth
              />
              <Button
                variant="contained"
                color="warning"
                type="submit"
                sx={{ borderRadius: ",m:130px", p: 2, mt: 2 }}
              >
                SEND MESSAGE
              </Button>
            </form>
          </Grid>
          <Grid item md={6} mt={4} sm={12} xs={12}>
            <Typography
              p={4}
              fontFamily={"cursive"}
              fontSize={{ md: "1.6em", sm: "1.2em", xs: "1.2em" }}
              color={"white"}
            >
              My Contact Details
            </Typography>
            <Typography
              color={"Aqua"}
              fontSize={{ md: "1.2em", sm: "1em", xs: "1em" }}
              p={2}
            >
              <Email /> <br /> <Link href={"#"}>zwandurdan@gmail.com</Link>
            </Typography>
            <Typography
              color={"aqua"}
              fontSize={{ md: "1.2em", sm: "1em", xs: "1em" }}
              p={2}
            >
              <Phone />
              <br />
              <span style={{ color: "gray", marginLeft: "10%" }}>
                +92 347 3912 327
              </span>
            </Typography>
            <Typography
              color={"aqua"}
              display={"flex"}
              fontSize={{ md: "1.2em", sm: "1em", xs: "1em" }}
              p={2}
            >
              <LocationOn fontSize="large" />
              <br />
              <span style={{ color: "gray", marginLeft: "10%" }}>
                Durushkhela, <br />
                Tahsil: Matta,District:Swat
              </span>
            </Typography>
          </Grid>
        </Grid>

        <Box display={"flex"} justifyContent={"center"} mt={8}>
          <Link
            href={"https://www.facebook.com/ITXwaSImDuRdAn"}
            target="_blank"
          >
            <Facebook
              sx={{
                p: 1,
                bgcolor: "#6a1b9a",
                m: 1,
                borderRadius: "50%",
                color: "white",
              }}
              fontSize="large"
            />
          </Link>
          <Link
            href={"https://www.instagram.com/its_wasim_durdan"}
            target="_blank"
          >
            <Instagram
              sx={{
                p: 1,
                bgcolor: "#6a1b9a",
                m: 1,
                borderRadius: "50%",
                color: "white",
              }}
              fontSize="large"
            />
          </Link>
          <Link href={"https://www.pinterest.com/zwandurdan"} target="_blank">
            <Pinterest
              sx={{
                p: 1,
                bgcolor: "#6a1b9a",
                m: 1,
                borderRadius: "50%",
                color: "white",
              }}
              fontSize="large"
            />
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
