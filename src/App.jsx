import './App.css';
import movies from './assets/films.json';
import MovieCarrusel from './components/carrusel/carrusel';

function App() {
  return (
    <>
      <MovieCarrusel movies={movies.movies} />
    </>
  );
}

export default App;