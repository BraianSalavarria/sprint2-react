import React, { useEffect, useState } from 'react'
import fondo from './assets/background.jpg'
import NavBar from './components/NavBar'
import WatchListModal from './components/WatchListModal'
import MovieList from './components/MovieList'

const App = () => {
  
  const [isModalOpen, setIsModalOpen]= useState(false)
  const [watchlist, setWatchList] =useState([])
  useEffect( ()=>{
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]' )
    setWatchList(savedWatchlist)  
  }, [] )
  
  const bgImagen ={
  backgroundImage: `url(${fondo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center", // desplaza el foco
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh",
  position: "relative"
}  
  return (
    <div style={bgImagen} className='overflow-hidden min-h-screen'>
      
      <NavBar setIsModalOpen={setIsModalOpen} />
      <WatchListModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} watchlist={watchlist} setWatchList={setWatchList} />
      <MovieList watchlist={watchlist} setWatchList={setWatchList} />
    </div>
  )
}

export default App
