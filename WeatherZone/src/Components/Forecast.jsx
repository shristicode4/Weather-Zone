import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiDayThunderstorm,
} from "react-icons/wi";
import backgroundImage from "../assets/weatherbg2.jpg";

const WeatherForecast = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ color: "black" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{
            height: "250px",
            padding: "10px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography variant="h6">India</Typography>
          <Typography variant="h6">Monday, 10 July</Typography>
          <WiDaySunny size={64} />
          <Typography variant="body1">10:00 AM</Typography>
          <Typography variant="body1">Sunny</Typography>
          <Typography variant="body1">Rainfall: 0 mm</Typography>
          <Typography variant="body1">Temperature: 25°C</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WeatherForecast;
