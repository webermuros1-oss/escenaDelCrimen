import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/catalog.css";

const categories = [
    { value: "all", label: "Todos" },
    { value: "mafiasYGangsters", label: "Mafias y Gangsters" },
    { value: "cineNegroClasico", label: "Cine Negro Clásico" },
    { value: "thrillerPolicial", label: "Thriller Policial" },
    { value: "thrillerPsicologico", label: "Thriller Psicológico" },
    { value: "misterioDetectives", label: "Misterio y Detectives" },
    { value: "terrorCriminal", label: "Terror Criminal" },
    { value: "thrillerModerno", label: "Thriller Moderno" }
];

export default function CatalogPage() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        fetchFilms();
    }, [selectedCategory]);

    const fetchFilms = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:8080/movies');
            const all = res.data;
            setFilms(selectedCategory === "all" ? all : all.filter(f => f.category === selectedCategory));
        } catch (err) {
            console.error(err);
            setFilms([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="catalog-container">
            <h1>ARCHIVO DE CASOS</h1>

            <div className="filters">
                {categories.map(cat => (
                    <button
                        key={cat.value}
                        className={selectedCategory === cat.value ? "active" : ""}
                        onClick={() => setSelectedCategory(cat.value)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {loading ? (
                <p className="loading">Cargando casos...</p>
            ) : (
                <ul className="films-grid">
                    {films.map(film => (
                        <li key={film.id} className="film-card">
                            <img src={film.img} alt={film.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/200x300?text=Sin+imagen'; }} />
                            <h3>{film.title}</h3>
                            <p>{film.director} · {film.year}</p>
                            <p>⭐ {film.filmAffinity_score}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
