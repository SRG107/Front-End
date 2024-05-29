// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const images = [
  'https://imgs.search.brave.com/4_A0CIaZBe5lQfSU36TmM3b7GMzKvgvkQY4AJadSE4s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/bWVkaWEtMS5mcmVl/Y29kZWNhbXAub3Jn/L2ltYWdlcy8wKjdH/ZlVkU0lMWEJMeUFi/UXkucG5n',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button className="carousel-button right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
