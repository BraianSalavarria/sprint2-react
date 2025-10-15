import React from 'react'

const WatchListModal = ({ isModalOpen, setIsModalOpen, watchlist, setWatchList }) => {
  const onCloseModal = () => setIsModalOpen(false);

  const removeFromWatchlist = (id) => {
    const updateWatchlist = watchlist.filter(movie => movie.id !== id);
    setWatchList(updateWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updateWatchlist));
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Mi Watchlist</h1>

        {watchlist.length === 0 ? (
          <p className="font-semibold text-gray-700">No hay películas que mostrar</p>
        ) : (
          <div className="max-h-96 w-full overflow-y-auto space-y-4">
            {watchlist.map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 shadow-md"
              >
                <h3 className="font-semibold text-center">{movie.name}</h3>
                <img
                  src={movie.img}
                  alt={movie.name}
                  className="h-40 w-56 object-cover rounded-md mt-2"
                />
                <button
                  onClick={() => removeFromWatchlist(movie.id)}
                  className="mt-3 w-full rounded-2xl bg-red-500 py-2 text-white font-semibold 
                             transition-transform hover:scale-105 text-sm sm:text-base"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onCloseModal}
          className="mt-5 w-full rounded-2xl bg-amber-400 py-2 font-semibold 
                     transition-transform hover:scale-105 text-sm sm:text-base"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default WatchListModal;
