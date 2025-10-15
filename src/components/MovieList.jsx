import React from 'react'
import MovieCard from './MovieCard'
import movies from '../../public/movies'

const MovieList = ({ watchlist, setWatchList }) => {



  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
        Lista de Películas
      </h2>
      <div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                   xl:grid-cols-5 place-items-center"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.name}
            img={movie.img}
            watchlist={watchlist}
            setWatchList={setWatchList}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
