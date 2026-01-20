import React from 'react';
import './LegalPages.css';



function Home() {
  return (
    <div className="pageContainer">
      <h1>Bienvenido a Escena del Crimen</h1>
      <p>Tu plataforma de contenido de crímenes reales y misterios sin resolver.</p>
      <div className="homeCards">
        <div className="card">
          <h3>Casos Destacados</h3>
          <p>Explora los casos más impactantes de la historia criminal.</p>
        </div>
        <div className="card">
          <h3>Análisis Forense</h3>
          <p>Descubre cómo la ciencia resuelve los crímenes más complejos.</p>
        </div>
        <div className="card">
          <h3>Comunidad</h3>
          <p>Únete a nuestra comunidad de entusiastas del crimen real.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;