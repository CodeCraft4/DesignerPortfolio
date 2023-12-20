import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Container, Divider, Link, Typography } from "@mui/material";
import DarkBtn from "./DarkBtn";

const drawerWidth = 250;
const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [bgColor, setBgColor] = React.useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 860) {
      setBgColor(true);
    } else setBgColor(false);
  };

  window.addEventListener("scroll", changeBgColor);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: "#212121",
        height: "150vh",
      }}
      component={"nav"}
    >
      <List sx={{ mx: 6 }}>
        <Typography
          fontWeight={900}
          pb={2}
          fontSize={24}
          color={"#ff7043"}
          textAlign={"start"}
        >
          WasimDurdan
        </Typography>
        <Divider />
        <ListItem>
          <Link href="#home" style={resLink}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#about" style={resLink}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#blogs" style={resLink}>
            Blogs
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#testimonial" style={resLink}>
            Event
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#contact" style={resLink}>
            Contact
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex", position: "relative" }}>
        <AppBar
          sx={{
            bgcolor: bgColor ? "#004d40" : "rgba(0,3,7,.3)",
          }}
          elevation={6}
        >
          <Container maxWidth="sm">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <List sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
                <ListItem>
                  <Link href={"#"} style={linkStyle}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#about"} style={linkStyle}>
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#blogs"} style={linkStyle}>
                    Blogs
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#testimonial" style={linkStyle}>
                    Event
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#contact" style={linkStyle}>
                    Contact
                  </Link>
                </ListItem>
              </List>
              <Box display={{md:'flex',sm:'flex',xs:'flex'}} justifyContent={'end'} mx={{md:0,sm:0,xs:'70%'}}>
                <DarkBtn />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
};
const resLink = {
  color: "white",
  textDecoration: "none",
};
