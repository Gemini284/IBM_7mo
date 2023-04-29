import React from 'react'
import escribe from '../assets/escribe.jpg'

export default function Forgot() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 marx-w-4xl'>
          <div className='w-3/5 p-5 bg-blue-400 rounded-2x1 text-white rounded-bl-2xl rounded-tl-2xl'>
            <div className='text-left font-bold'>
              <span className='text-white'>IBM</span>
            </div>
            <img src={escribe} alt='persona escribiendo' />

            <h2 className='text-3xl font-bold mb-2'>¡Comienza tu viaje!</h2>
            <p className='text-white text-left'>Impulsando la tecnología</p>
          </div>
          {/*registrate sección empieza aqui*/}

          <div className='w-2/5 p-5 bg-purple-100 text-black rounded-br-2xl rounded-tr-2xl py-36 px-12 text-left'>
            <p className='text-9x1 font-bold mb-1'>Reestablece tu contraseña</p>
            <div className='border-2 w-10 border-black inline-block mb-2 text:sm'></div>
            <p>Ingresa tu correo y te enviaremos los pasos para restablecer tu contraseña </p>
            <div className='flex justify-center my-2'></div>
            <a href></a>
            <div className='flex flex-col item-center'>
              <div className='flex flex-col py-2'>
                <label className='text-gray-400 text-sm rounded-full' placeholder='Ingresa tu correo electrónico'>Correo electrónico:</label>
                <input className='border p-2' type="text" />
              </div>

              <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-md'>Restablece tu contraseña</button>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}
