import React from 'react'

const Hobbies = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className='text-3xl font-bold'>Hobbies</h1>
        <img src={require('C:/Users/Michele Ungolo/Desktop/PortaFolio/alexalonso/src/assets/2222.jpg')} className="h-72 rounded-2xl mb-10 mt-10 shadow-xl"/>
        <h2 className='w-3/12'>Parte de mi tiempo lo utilizo para ver Rick y Morty, serie de dibujos que me encanta debido al argumento de la serie que gira alrededor de la ciencia</h2>
    </div>
  )
}

export default Hobbies