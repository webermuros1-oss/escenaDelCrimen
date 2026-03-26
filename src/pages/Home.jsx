import "../style/Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carrusel from "../components/carrusel/Carrusel.jsx";
import HeroCarousel from "../components/HeroCarrousel/HeroCarrousel.jsx";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie.jsx";
import AppPromo from "../components/AppPromo/AppPromo.jsx";
import API_URL from '../config/api';

function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [mafiasYGangsters, setMafiasYGangsters] = useState([]);
  const [cineNegroClasico, setCineNegroClasico] = useState([]);
  const [thrillerPolicial, setThrillerPolicial] = useState([]);
  const [thrillerPsicologico, setThrillerPsicologico] = useState([]);
  const [misterioDetectives, setMisterioDetectives] = useState([]);
  const [terrorCriminal, setTerrorCriminal] = useState([]);
  const [thrillerModerno, setThrillerModerno] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get(`${API_URL}/movies`);
        const all = response.data;

        const byCategory = (cat) => all.filter(m => m.category === cat);

        setMafiasYGangsters(byCategory('mafiasYGangsters'));
        setCineNegroClasico(byCategory('cineNegroClasico'));
        setThrillerPolicial(byCategory('thrillerPolicial'));
        setThrillerPsicologico(byCategory('thrillerPsicologico'));
        setMisterioDetectives(byCategory('misterioDetectives'));
        setTerrorCriminal(byCategory('terrorCriminal'));
        setThrillerModerno(byCategory('thrillerModerno'));

        setFeaturedMovie(all[0] || null);
        setFeaturedMovies(all.filter(m => m.trailer));

      } catch (error) {
        console.error("Error cargando las películas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <>
      <div className="pageHome">
        {featuredMovies.length > 0 && (
          <HeroCarousel featuredMovies={featuredMovies} />
        )}
      </div>

      <div className="featuredMovie">
        {featuredMovie && (
          <FeaturedMovie movie={featuredMovie} />
        )}
      </div>

      <AppPromo 
        title="Descarga Nuestra App"
        subtitle="La escena del crimen en tu bolsillo"
        features={[
          "📱 Acceso desde cualquier dispositivo",
          "🎬 Catálogo completo actualizado",
          "⭐ Reserva tus películas favoritas"
        ]}
        appStoreUrl="#"
        playStoreUrl="#"
      />

      <div className="content-sections">
        {mafiasYGangsters.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Mafias y Gánsters</h2>
            <Carrusel movies={mafiasYGangsters} />
          </section>
        )}

        {cineNegroClasico.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Cine Negro Clásico</h2>
            <Carrusel movies={cineNegroClasico} />
          </section>
        )}

        {thrillerPolicial.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller Policial</h2>
            <Carrusel movies={thrillerPolicial} />
          </section>
        )}

        {thrillerPsicologico.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller Psicológico</h2>
            <Carrusel movies={thrillerPsicologico} />
          </section>
        )}

        {misterioDetectives.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Misterio y Detectives</h2>
            <Carrusel movies={misterioDetectives} />
          </section>
        )}

        {terrorCriminal.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Terror Criminal</h2>
            <Carrusel movies={terrorCriminal} />
          </section>
        )}

        {thrillerModerno.length > 0 && (
          <section className="carouselSection">
            <h2 className="carouselTitle">Thriller Moderno</h2>
            <Carrusel movies={thrillerModerno} />
          </section>
        )}
      </div>
    </>
  );
}

export default Home;