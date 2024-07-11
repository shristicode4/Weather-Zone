import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Forecast from "./Components/Forecast";
import getFormattedWeatherData from "./Service/weatherService";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormattedWeatherData({ q: "india" });
      console.log(data);
      setWeatherData(data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forecast" element={<Forecast />} />
      </Routes>
    </Router>
  );
};

export default App;
