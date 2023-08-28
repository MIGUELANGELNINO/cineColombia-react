import React, { useEffect, useState } from 'react';
import buscadorIcono from './assets/buscador.svg';
import './App.css';
import TarjetaPelicula from './components/TarjetaPelicula';

//Api key: fda6055d
const APIURL = 'http://www.omdbapi.com/?apikey=fda6055d';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const buscadorCine = async (titulo) => {
    const response = await fetch(`${APIURL}&s=${titulo}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  }
  useEffect(() => {
    buscadorCine('');
  }, []);
  return (
    <div className='app'>
      <h1>Cine Colombia</h1>
      <div className='busqueda'>
        <input
          type="text"
          placeholder='Buscador de cine'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <img
          src={buscadorIcono}
          alt="Buscar"
          onClick={() => buscadorCine(busqueda)}
        />
      </div>
      <div className='targets'>
        {movies && movies.length > 0 ? (
                movies.map((movie) => <TarjetaPelicula key={movie.imdbID} movie1={movie} />)
              ) : (
                <div className='empty'>
                  <h2>No hay películas</h2>
                </div>
              )}
      </div>
      

    </div>
  );
}

export default App
