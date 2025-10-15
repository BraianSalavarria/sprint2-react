import React from 'react'
import logo from '../assets/logo.png'


const NavBar = ({setIsModalOpen}) => {
  
  const onOpenModal = () => setIsModalOpen(true)


    return (
    <nav className='flex flex-row justify-between  items-center bg-gray-900 text-white font-bold py-4'>
       <div className='flex flex-row items-center mx-3'>
            <img  src={logo} alt="logo de la pagina"/>
            <span className='text-xl'>PeliPlus</span>
       </div> 
        <button className='bg-amber-400 rounded-2xl py-2 px-2 mx-4 transition-transform hover:scale-105 cursor-pointer' onClick={onOpenModal} > Ver WatchList</button>
    </nav>
  )
}

export default NavBar
