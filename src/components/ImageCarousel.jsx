import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// ---------------------------
// 1. Imágenes predeterminadas
// Puedes reemplazar estas URLs con tus propias imágenes
// ---------------------------
const defaultImages = [
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
  "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
  "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
  "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg",
];

// ---------------------------
// 2. Keyframes para la animación de fade
// ---------------------------
const fadeIn = keyframes`
  from {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
`;

// ---------------------------
// 3. Styled Components
// ---------------------------

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 900px; /* Ancho máximo del carrusel */
  margin: 30px auto; /* Centrar y dar un poco de espacio */
  overflow: hidden; /* Oculta partes de las imágenes que se salen del contenedor */
  border-radius: 8px; /* Bordes ligeramente redondeados */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra para darle profundidad */
  position: relative; /* Necesario para posicionar el spinner de carga */
  background-color: #eee; /* Fondo claro mientras carga la imagen */
  min-height: 200px; /* Altura mínima para evitar saltos de contenido */

  @media (max-width: 768px) {
    margin: 20px auto;
    border-radius: 4px;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto; /* Mantiene la relación de aspecto */
  display: block; /* Elimina espacio extra debajo de la imagen */
  animation: ${fadeIn} 0.8s ease-in-out; /* Aplica la animación de fade */
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #c70000; /* Color del borde que gira */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite; /* Animación de giro */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Asegura que el spinner esté encima de la imagen */

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

// ---------------------------
// 4. Componente React del Carrusel
// ---------------------------

const ImageCarousel = ({ images = defaultImages, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Efecto para cambiar la imagen automáticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setLoading(true); // Reinicia el estado de carga al cambiar de imagen
    }, interval);

    // Limpieza del temporizador cuando el componente se desmonta
    return () => clearInterval(timer);
  }, [images.length, interval]); // Dependencias para reiniciar el efecto si cambian

  // Manejador para cuando la imagen termina de cargar
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <CarouselContainer>
      {loading && <LoadingSpinner />}{" "}
      {/* Muestra el spinner si está cargando */}
      <CarouselImage
        src={images[currentIndex]}
        alt={`Carousel slide ${currentIndex + 1}`}
        onLoad={handleImageLoad} // Llama a la función cuando la imagen carga
        style={{ opacity: loading ? 0 : 1 }} // Oculta la imagen mientras carga
      />
    </CarouselContainer>
  );
};

export default ImageCarousel;
