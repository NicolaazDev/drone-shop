import React from "react";
import { Container, Grid } from "./styles";

const AccessoriesSection = () => {
  return (
    <Container>
      <h1 className="title-section">ACESSÓRIOS</h1>
      <p className="info">
        Eleve sua experiência com câmeras avançadas, estabilizadores eficientes,
        baterias duradouras e controles com tela integrada.{" "}
      </p>
      <Grid>
        <div className="item control">
          <img src="/control2.png" alt="" className="product" />
          <div className="content">
            <h3 className="title">CONTROLES</h3>
            <p className="desc">
              Controle seu drone com precisão e visualize imagens ao vivo
              diretamente no controle remoto integrado com tela.
            </p>
          </div>
        </div>
        <div className="item cam">
          <img src="/cam2.png" alt="" className="product" />
          <div className="content">
            <h3 className="title">LENTES DE CAMERAS</h3>
            <p className="desc">
              Capture imagens nítidas e vídeos envolventes com câmeras de alta
              resolução projetadas para drones
            </p>
          </div>
        </div>
        <div className="item batery">
          <img src="/baw.png" alt="" className="product" />

          <div className="content">
            <h3 className="title">Baterias Duráveis </h3>
            <p className="desc">
              Mantenha seu drone no ar por mais tempo com baterias de longa
              duração, essenciais para sessões de voo prolongadas.
            </p>
          </div>
        </div>
        <div className="item gimbal">
          <img src="/gimbal.png" alt="" className="product" />

          <div className="content">
            {" "}
            <h3 className="title">ESTABILIZADORES P/ DRONE</h3>
            <p className="desc">
              Garanta imagens suaves e estáveis mesmo em condições adversas com
              estabilizadores avançados para drones.
            </p>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default AccessoriesSection;
