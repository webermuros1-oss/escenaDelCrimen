const API_BASE = 'http://localhost:8080/movies';

export const createMovie = async (movieData) => {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData)
    });
    if (!response.ok) throw new Error('Error creando película');
    return response.json();
};

export const updateMovie = async (id, movieData) => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData)
    });
    if (!response.ok) throw new Error('Error actualizando película');
    return response.json();
};

export const deleteMovie = async (id) => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Error borrando película');
};

export const fetchAllMovies = async () => {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error('Error cargando películas');
    return response.json();
};
