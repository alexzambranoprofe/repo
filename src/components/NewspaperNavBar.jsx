import React from "react";
import styled from "styled-components";

// Contenedor principal del Navbar
const NewspaperNav = styled.nav`
  background-color: #333; /* Fondo gris oscuro, clásico de las barras de navegación */
  padding: 10px 0;
  border-bottom: 2px solid #c70000; /* Borde rojo que combina con el título del periódico */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra sutil para darle profundidad */
  text-align: center; /* Centra los elementos de la navegación */

  @media (max-width: 768px) {
    padding: 8px 0; /* Ajuste del padding para pantallas más pequeñas */
  }
`;

// Lista de elementos de navegación
const NavList = styled.ul`
  list-style: none; /* Quita los puntos de la lista */
  padding: 0;
  margin: 0;
  display: flex; /* Permite que los elementos se coloquen en fila */
  justify-content: center; /* Centra los elementos horizontalmente */
  gap: 30px; /* Espacio entre los ítems de navegación */

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Permite que los ítems se envuelvan en varias líneas */
    gap: 15px; /* Reduce el espacio entre ítems en móviles */
    padding: 0 10px; /* Añade un poco de padding lateral en móviles */
  }

  @media (max-width: 480px) {
    gap: 10px; /* Más reducción de espacio para pantallas muy pequeñas */
  }
`;

// Cada ítem de navegación
const NavItem = styled.li`
  a {
    color: #f0f0f0; /* Color de texto blanco suave */
    text-decoration: none; /* Quita el subrayado predeterminado del enlace */
    font-family: "Roboto Condensed", sans-serif; /* Fuente condensada para un look de periódico */
    font-size: 1.1em;
    font-weight: bold;
    text-transform: uppercase; /* Mayúsculas para los ítems */
    padding: 8px 15px;
    transition: all 0.3s ease; /* Suave transición para efectos hover */
    border-radius: 4px; /* Bordes ligeramente redondeados */
    letter-spacing: 1px; /* Espaciado entre letras para mejor legibilidad */

    &:hover {
      background-color: #c70000; /* Fondo rojo al pasar el mouse */
      color: #fff; /* Texto blanco puro al pasar el mouse */
      transform: translateY(-2px); /* Pequeño efecto de levantamiento */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Sombra al hacer hover */
    }

    &:active {
      background-color: #a00000; /* Color más oscuro al hacer clic */
      transform: translateY(0); /* Vuelve a su posición original */
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1em; /* Reduce el tamaño de fuente en pantallas pequeñas */
      padding: 6px 12px;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.9em; /* Más reducción para móviles */
      padding: 5px 10px;
    }
  }
`;

// Componente React de la Barra de Navegación
const NewspaperNavBar = () => {
  const navItems = [
    "Nacional",
    "Internacional",
    "Economía",
    "Deportes",
    "Cultura",
  ];

  return (
    <NewspaperNav>
      <NavList>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            {/* Usamos '#' como href ya que no hay redirección */}
            <a href="#">{item}</a>
          </NavItem>
        ))}
      </NavList>
    </NewspaperNav>
  );
};

export default NewspaperNavBar;
