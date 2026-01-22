import React, { useState } from "react";
import "./Carrusel.css";

const MovieCarrusel = ({ movies }) => {
  const MOVIES_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

  const prev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const next = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const startIndex = currentPage * MOVIES_PER_PAGE;
  const currentMovies = movies.slice(startIndex, startIndex + MOVIES_PER_PAGE);

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prev}>
        ‹
      </button>

      <div className="carousel-grid">
        {currentMovies.map((movie) => (
          <div className="carousel-card" key={movie.rank}>
            <div className="img-wrapper">
              <img alt={movie.title} src={movie.img} />
            </div>

            <div className="card-content">
              <h3>{movie.title}</h3>
              <p><strong>Año:</strong> {movie.year}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p className="score">⭐ {movie.filmaffinity_score}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={next}>
        ›
      </button>
    </div>
  );
};

export default MovieCarrusel;
