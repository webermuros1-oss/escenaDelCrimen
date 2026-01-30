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

    // ✅ FUNCIÓN para reservar película
    const handleReservar = (film) => {
        // Por ahora solo muestra alerta, después puedes conectar con backend
        alert(`🎬 ¡RESERVADA! "${film.title}" para tu videoclub\n\nDirector: ${film.director}\nAño: ${film.year}\n\n✅ Te contactaremos para coordinar la entrega`);
        
        // Opcional: aquí puedes hacer POST a tu API de reservas
        fetch('http://localhost:3000/reservas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(film)
        });
    };

    return (
        <div className="pageCatalog">
            <div className="catalogContainer">
                <h1 className="catalogTitle">
                    Nuestro Catálogo
                </h1>

                <div className="catalogSelector">
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="mafiasYGangsters">Mafias y Gánsters</option>
                        <option value="cineNegroClasico">Cine Negro Clásico</option>
                        <option value="thrillerPolicial">Thriller Policial</option>
                        <option value="thrillerPsicologico">Thriller Psicológico</option>
                        <option value="misterioDetectives">Misterio y Detectives</option>
                        <option value="terrorCriminal">Terror Criminal</option>
                        <option value="thrillerModerno">Thriller Moderno</option>
                    </select>
                </div>

                <div className="catalogGrid">
                    {films.map(film => (
                        <div key={film.rank} className="catalogCard">
                            <img
                                src={`/${film.img}`}
                                alt={film.title}
                                className="catalogImg"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/300x450/1a1a1a/00e5ff?text=Sin+Imagen";
                                }}
                            />

                            <h2 className="catalogTitleFilm">
                                {film.title}
                            </h2>

                            <p className="catalogMeta">
                                {film.director} · {film.year}
                            </p>

                            <p className="catalogDesc">
                                {film.description}
                            </p>

                            <p className="catalogScore">
                                ⭐ {film.filmaffinity_score}
                            </p>

                            <div className="catalogActions">
                                <a
                                    href={film.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="catalogLink"
                                >
                                    Ver tráiler ▶
                                </a>

                                {/* ✅ BOTÓN RESERVAR NUEVO */}
                                <button
                                    className="catalogReservarBtn"
                                    onClick={() => handleReservar(film)}
                                >
                                    Reservar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalogo;
