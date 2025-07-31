import React from "react";
import styled from "styled-components";

// Estilos del contenedor principal del título
const NewspaperBanner = styled.header`
  background-color: white; /* Un negro profundo para el fondo */
  color: #e91b1e; /* Blanco suave para el texto */
  font-family: "Playfair Display", serif; /* Fuente elegante y clásica para el periódico */
  padding: 20px 0;
  text-align: center;
  border-bottom: 5px solid #4d2828; /* Borde inferior rojo vibrante */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra sutil para profundidad */
  margin-bottom: 30px;
`;

// Estilos del título principal
const MainTitle = styled.h1`
  font-size: 3.8em; /* Tamaño grande para el título */
  margin: 0;
  text-transform: uppercase; /* Mayúsculas para un impacto fuerte */
  letter-spacing: 5px; /* Espaciado entre letras */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra de texto para hacerlo resaltar */

  @media (max-width: 768px) {
    font-size: 2.5em; /* Ajuste para pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 1.8em; /* Ajuste para móviles */
  }
`;

// Estilos del subtítulo o lema
const Subtitle = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
  font-style: italic;
  color: #e91b1e; /* Un gris más claro para el subtítulo */

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const NewspaperTitle = ({ title, subtitle }) => {
  return (
    <NewspaperBanner>
      <MainTitle>{title}</MainTitle>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </NewspaperBanner>
  );
};

export default NewspaperTitle;
