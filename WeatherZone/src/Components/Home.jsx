import React from "react";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Typography, Box } from "@mui/material";
import backgroundImage from "../assets/Homebackground.jpg";

const Home = () => {
  return (
    <>
      <Button
        variant="text"
        color="success"
        size="medium"
        component={Link}
        to="/Home"
        sx={{ ml: 130, mr: 0 }}
        startIcon={<HomeIcon />}
      >
        Home
      </Button>
      ~
      <Button
        variant="text"
        color="success"
        size="medium"
        component={Link}
        to="/Dashboard"
        sx={{ ml: 5, mr: 0 }}
        startIcon={<DashboardIcon />}
      >
        Dashboard
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        component={Link}
        to="/Login"
        sx={{ ml: 15 }}
      >
        Login
      </Button>
      <div>
        <Typography
          variant="h2"
          color="secondary"
          align="center"
          sx={{ mt: 30, fontWeight: "bold" }}
        >
          Welcome to WeatherZone
        </Typography>

        <Typography variant="h6" color="Primary" align="center" sx={{ md: 4 }}>
          Let's dive deep into the weather conditions of your choosen cities
        </Typography>
      </div>
    </>
  );
};

export default Home;
