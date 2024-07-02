// src/components/Button.jsx
import React from "react";
import { Container, Content } from "./styles";
import NavBar from "../navbar";

const Header = () => {
  return (
    <Container>
      <NavBar />
      <video autoPlay loop muted className="video">
        <source src="/as2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="center-header"></div> */}

      <Content>
        <img src="/pp2.png" />
        <span id="transparent">UNLOCK</span>
        <span>CREATIVE</span>
        <span>FREEDOM</span>
      </Content>
    </Container>
  );
};

export default Header;
