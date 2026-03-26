import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FormMovies.css';

const BASE_URL = '/movies';
const categories = [
    { id: 'mafiasYGangsters', label: 'Mafias y Gángsters' },
    { id: 'cineNegroClasico', label: 'Cine Negro Clásico' },
    { id: 'thrillerPolicial', label: 'Thriller Policial' },
    { id: 'thrillerPsicologico', label: 'Thriller Psicológico' },
    { id: 'misterioDetectives', label: 'Misterio y Detectives' },
    { id: 'terrorCriminal', label: 'Terror Criminal' },
    { id: 'thrillerModerno', label: 'Thriller Moderno' },
];

const initialFormData = {
    titulo: '',
    anio: '',
    rating: '',
    poster: '',
    sinopsis: '',
    director: '',
    ranking: '',
    url: '',
    main_cast: '',
    category: 'mafiasYGangsters',
};

const FormMovies = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [formData, setFormData] = useState(initialFormData);
    const [editId, setEditId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const respuesta = await axios.get(BASE_URL);
                const ordenadas = respuesta.data.sort((a, b) => b.ranking - a.ranking);
                setPeliculas(ordenadas);
            } catch (error) {
                console.error('Error al cargar las películas:', error);
            }
        };
        fetchPeliculas();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCastChange = (e) => {
        setFormData({ ...formData, main_cast: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.titulo || formData.anio === '' || formData.rating === '') {
            alert('Por favor, completa los campos obligatorios');
            return;
        }

        const payload = {
            title: formData.titulo.trim(),
            year: Number(formData.anio),
            filmaffinity_score: Number(formData.rating),
            img: formData.poster.trim() || '/images/films/placeholder.jpg',
            description: formData.sinopsis.trim() || 'Sin descripción.',
            ranking: Number(formData.ranking) || peliculas.length + 1,
            director: formData.director.trim() || 'Sin director',
            main_cast: formData.main_cast.trim(),
            url: formData.url.trim() || '',
            category: formData.category,
        };

        try {
            if (editId) {
                const respuesta = await axios.put(`${BASE_URL}/${editId}`, payload);
                setPeliculas(peliculas.map(p => (p.id === editId ? respuesta.data : p)));
                setEditId(null);
            } else {
                const respuesta = await axios.post(BASE_URL, payload);
                setPeliculas((prev) => [respuesta.data, ...prev]);
            }
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error al guardar:', error);
        }
    };

    const handleEdit = (pelicula) => {
        setFormData({
            titulo: pelicula.title ?? '',
            anio: pelicula.year ?? '',
            rating: pelicula.filmaffinity_score ?? '',
            poster: pelicula.img ?? '',
            sinopsis: pelicula.description ?? '',
            director: pelicula.director ?? '',
            ranking: pelicula.ranking ?? '',
            url: pelicula.url ?? '',
            main_cast: pelicula.main_cast ?? '',
            category: pelicula.category ?? 'mafiasYGangsters',
        });
        setEditId(pelicula.id);
    };

    const handleDelete = async (id) => {
        const confirmacion = window.confirm("⚠️ ¿Eliminar esta película permanentemente?");
        if (confirmacion) {
            try {
                await axios.delete(`${BASE_URL}/${id}`);
                setPeliculas(peliculas.filter(p => p.id !== id));
                if (editId === id) {
                    setFormData(initialFormData);
                    setEditId(null);
                }
            } catch (error) {
                console.error('Error al borrar:', error);
            }
        }
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setEditId(null);
    };

    return (
        <div className="form-movies-container">
            <div className="form-movies-overlay" />
            
            <div className="form-movies-content">
                <header className="form-movies-header">
                    <h1>{editId ? ' Editar Película' : ' Gestionar Películas'}</h1>
                    <div className="form-movies-divider"></div>
                </header>

                <main className="form-movies-main">
                    
                    <section className="form-section">
                        <form className="movie-form" onSubmit={handleSubmit}>
                            
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="titulo"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    placeholder="Título *"
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="number"
                                    name="anio"
                                    value={formData.anio}
                                    onChange={handleChange}
                                    placeholder=" Año *"
                                    min="1900"
                                    max="2030"
                                    className="form-input"
                                    required
                                />
                            </div>

                            
                            <div className="form-row">
                                <input
                                    type="number"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    placeholder="⭐ Rating (0-10) *"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="number"
                                    name="ranking"
                                    value={formData.ranking}
                                    onChange={handleChange}
                                    placeholder="🏆 Ranking (posición)"
                                    min="1"
                                    className="form-input"
                                />
                            </div>

                            
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="poster"
                                    value={formData.poster}
                                    onChange={handleChange}
                                    placeholder="🖼️ images/films/nombre.jpg"
                                    className="form-input"
                                />
                                <input
                                    type="url"
                                    name="url"
                                    value={formData.url}
                                    onChange={handleChange}
                                    placeholder="🔗 URL Trailer (opcional)"
                                    className="form-input"
                                />
                            </div>

                            
                            <input
                                type="text"
                                name="director"
                                value={formData.director}
                                onChange={handleChange}
                                placeholder="🎬 Director"
                                className="form-input full-width"
                            />


                            <input
                                type="text"
                                name="main_cast"
                                value={formData.main_cast}
                                onChange={handleCastChange}
                                placeholder="👥 Elenco (separar por comas: Actor1, Actor2, Actor3)"
                                className="form-input full-width"
                            />


                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="form-input full-width"
                            >
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>


                            <textarea
                                name="sinopsis"
                                value={formData.sinopsis}
                                onChange={handleChange}
                                placeholder="📜 Sinopsis completa..."
                                className="form-textarea"
                            />
                            
                            <div className="form-buttons">
                                <button type="submit" className="btn-primary">
                                    {editId ? '⚡ Guardar Cambios' : '🎬 Crear Película'}
                                </button>
                                {editId && (
                                    <>
                                        <button 
                                            type="button" 
                                            onClick={() => navigate(`/movies/${editId}`)}
                                            className="btn-secondary"
                                        >
                                            👁️ Ver Detalle
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={handleCancel}
                                            className="btn-cancel"
                                        >
                                            ❌ Cancelar
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </section>

                    
                    <section className="movies-grid-section">
                        <h2>Todas las Películas</h2>
                        <div className="movies-grid">
                            {peliculas.map((pelicula) => (
                                <article key={pelicula.id} className="movie-card">
                                    <div className="movie-poster">
                                        <img 
                                            src={pelicula.img || '/images/films/placeholder.jpg'} 
                                            alt={pelicula.title}
                                            className="poster-img"
                                        />
                                    </div>
                                    <div className="movie-info">
                                        <h3>{pelicula.title}</h3>
                                        <p className="movie-year">📅 {pelicula.year}</p>
                                        <p className="movie-rating">⭐ {pelicula.filmaffinity_score}</p>
                                        <p className="movie-rank">🏆 #{pelicula.ranking}</p>
                                        <p className="movie-director">🎬 {pelicula.director}</p>
                                        {pelicula.main_cast && pelicula.main_cast.length > 0 && (
                                            <p className="movie-cast">
                                                👥 {pelicula.main_cast.split(',').slice(0, 3).join(', ')}
                                                {pelicula.main_cast.split(',').length > 3 && '...'}
                                            </p>
                                        )}
                                    </div>
                                    <div className="movie-actions">
                                        <button onClick={() => handleEdit(pelicula)} className="btn-edit">
                                            ✏️ Editar
                                        </button>
                                        <button onClick={() => handleDelete(pelicula.id)} className="btn-delete">
                                            🗑️ Eliminar
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default FormMovies;
