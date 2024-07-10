import React from "react";
import logo from "../assets/weatherlogo.jpg";
import eyeIcon from "../assets/eye.png";
import "../Styles/login.scss";

const Index = () => {
  const spacing = 2;

  const containerStyle = {
    fontFamily: "Times New Roman, Times, serif",
    color: "#ffffff",
    backgroundColor: "#000000",
    padding: "20px",
    marginRight: spacing + "em",
    textAlign: "center",
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const welcomeTextStyle = {
    color: "#837b7b",
    marginBottom: "10px",
  };

  const logoStyle = {
    width: "300px",
    height: "auto",
    margintop: "-120px",
    marginLeft: "-120px",
    alignitems: "flex-start",
  };

  const inputStyle = {
    width: "300px",
    padding: "15px",
    borderRadius: "20px",
    paddingLeft: "10px",
    backgroundImage: `url(${eyeIcon})`,
    backgroundPosition: "right 10px center",
    backgroundSize: "20px 20px",
    backgroundRepeat: "no-repeat",
    margintop: "-120px",
  };

  return (
    <div style={containerStyle} className="container">
      <div className="header">
        <div className="text">
          <img src={logo} alt=" Logo" style={logoStyle} />
          <h2>
            <span style={welcomeTextStyle}>Welcome back </span>
          </h2>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your Mobile or Email ID"
          style={{
            width: "300px",
            padding: "15px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          style={inputStyle}
        />
      </div>
      <button
        style={{
          width: "330px",
          padding: "15px",
          borderRadius: "20px",
          backgroundColor: "#A9A9A9",
          color: "#ffffff",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        SignUp
      </button>
    </div>
  );
};

export default Index;
