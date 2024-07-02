// DemoSection.js

import React from "react";
import { Container, Content, Image } from "./styles";

const AccessoriesSection = () => {
  return (
    <Container>
      <Image id="dronedemo" src="/dddd.png" />
      <h1>CAMÊRA</h1>

      <Content className="content">
        <div className="video-container">
          <video muted id="videodemo" autoPlay loop>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Content>
    </Container>
  );
};

export default AccessoriesSection;
