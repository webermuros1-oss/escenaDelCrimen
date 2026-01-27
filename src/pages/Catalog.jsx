import { useEffect, useState } from "react";
import "../style/Catalog.css";

const Catalogo = () => {
    const [films, setFilms] = useState([]);
    const [category, setCategory] = useState("mafiasYGangsters");

    useEffect(() => {
        fetch(`http://localhost:3000/${category}`)
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.error("Error cargando catálogo:", err));
    }, [category]);

    return (
        <>
            <h1 className="catalogo-title">
                    Toda nuestra Filmografía
            </h1>

            <div className="catalogo-selector">
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="mafiasYGangsters">Mafias y Gángsters</option>
                    <option value="cineNegroClasico">Cine Negro Clásico</option>
                    <option value="thrillerPolicial">Thriller Policial</option>
                    <option value="thrillerPsicologico">Thriller Psicológico</option>
                    <option value="misterioDetectives">Misterio y Detectives</option>
                    <option value="terrorCriminal">Terror Criminal</option>
                    <option value="thrillerModerno">Thriller Moderno</option>
                </select>
            </div>

            <ul className="catalogo-grid">
                {films.map(film => (
                    <li key={film.rank} className="catalogo-card">
                        <img
                            src={`/${film.img}`}
                            alt={film.title}
                            className="catalogo-img"
                            onError={(e) => {
                                e.target.src =
                                    "https://via.placeholder.com/300x450/1a1a1a/00e5ff?text=Sin+Imagen";
                            }}
                        />

                        <h2 className="catalogo-title-film">
                            {film.title}
                        </h2>

                        <p className="catalogo-meta">
                            {film.director} · {film.year}
                        </p>

                        <p className="catalogo-desc">
                            {film.description}
                        </p>

                        <p className="catalogo-score">
                            ⭐ {film.filmaffinity_score}
                        </p>

                        <a
                            href={film.url}
                            target="_blank"
                            rel="noreferrer"
                            className="catalogo-link"
                        >
                            Ver tráiler ▶
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Catalogo;
