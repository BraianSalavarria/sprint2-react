import React from 'react'

const MovieCard = ({ id, name, img, watchlist, setWatchList, movie }) => {

  const addToWatchList = (movie) => {
    const exists = watchlist.some(item => item.id === movie.id);
    if (exists) {
      alert("Esta película ya está en tu Watchlist 🎬");
      return;
    }

    const updateWatchlist = [...watchlist, movie];
    setWatchList(updateWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updateWatchlist));
  };

  return (
    <div
      key={id}
      className="flex flex-col items-center justify-between gap-3 rounded-lg bg-gray-800 text-white 
                 p-4 shadow-md transition-transform hover:scale-105 sm:w-64 md:w-72 mx-auto"
    >
      <h1 className="text-lg sm:text-xl font-bold text-center">{name}</h1>
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover rounded-md"
      />
      <button
        onClick={() => addToWatchList(movie)}
        className="mt-3 w-full rounded-2xl bg-amber-400 py-2 text-sm font-semibold 
                   transition-transform hover:scale-105 sm:text-base"
      >
        Agregar a Watchlist
      </button>
    </div>
  );
};

export default MovieCard;
