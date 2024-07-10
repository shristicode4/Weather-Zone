import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "../Styles/dashboard.scss";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BarChart } from "@mui/x-charts/BarChart";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import OpacityIcon from "@mui/icons-material/Opacity";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const WeatherIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(1),
}));

const WeatherDay = ({ day, icon, temp }) => (
  <Box>
    <Typography variant="h6">{day}</Typography>
    <WeatherIcon>{icon}</WeatherIcon>
    <Typography variant="body1">{temp}°C</Typography>
  </Box>
);

const WeatherForecast = () => {
  const forecast = [
    { day: "Mon", icon: <WbSunnyIcon fontSize="large" />, temp: 25 },
    { day: "Tue", icon: <CloudIcon fontSize="large" />, temp: 20 },
    { day: "Wed", icon: <AcUnitIcon fontSize="large" />, temp: 10 },
    { day: "Thu", icon: <OpacityIcon fontSize="large" />, temp: 15 },
    { day: "Fri", icon: <WbSunnyIcon fontSize="large" />, temp: 27 },
    { day: "Sat", icon: <CloudIcon fontSize="large" />, temp: 22 },
    { day: "Sun", icon: <AcUnitIcon fontSize="large" />, temp: 12 },
  ];

  return (
    <Grid container spacing={2}>
      {forecast.map(({ day, icon, temp }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={day}>
          <WeatherDay day={day} icon={icon} temp={temp} />
        </Grid>
      ))}
    </Grid>
  );
};

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
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Welcome to weather zone
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThermostatIcon sx={{ color: "white", mr: 1 }} />
              <DeviceThermostatIcon sx={{ color: "white" }} />
            </Box>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by city...."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button color="inherit" component={Link} to="/Home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/Login">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} sx={{ marginTop: 2, marginLeft: 2.5 }}>
        <Grid item xs={6.7}>
          <Item style={{ height: "270px" }}>xs=9</Item>
          <Item style={{ height: "250px" }} sx={{ marginTop: 2 }}>
            <Grid item>
              <img
                src="WeatherZone\public\images\weatherimg.jpg"
                alt="weather image "
                style={{ height: "250px" }}
              />
            </Grid>
            <BarChart
              series={[
                { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
                { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
                { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
                { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
                { data: [10, 6, 5, 8, 9], label: "Series C1" },
              ]}
              width={600}
              height={250}
            />
          </Item>
        </Grid>
        <Grid item xs={4.5}>
          <Item style={{ height: "550px", backgroundColor: "purple" }}>
            <WeatherForecast />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
