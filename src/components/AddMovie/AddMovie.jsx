import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: '',
    poster: '',
    category: 'Mafias y Gangsters'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos a enviar:", formData);
    // Aquí conectarás luego el POST
  };

  return (
    <div style={{background: 'red', minHeight: '100vh'}}>
      <div className="movie-card">
        <h2>Agregar Nueva Película</h2>
        <form onSubmit={handleSubmit}>
          <label>Título de la Película:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>URL del Poster (Imagen):</label>
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            required
          />

          <label>Categoría:</label>
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
          >
            <option value="Mafias y Gangsters">Mafias y Gangsters</option>
            <option value="Crimen Real">Crimen Real</option>
            <option value="Documental">Documental</option>
          </select>

          <button type="submit" className="save-button">
            Guardar Película
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;