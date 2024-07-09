import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        sx={{ bgcolor: "Grey", color: "white" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="weather"
            sx={{ mr: 2 }}
          >
            <WbSunnyIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to weather zone
          </Typography>
          <Button color="inherit" component={Link} to="/Home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/Login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Dashboard;
