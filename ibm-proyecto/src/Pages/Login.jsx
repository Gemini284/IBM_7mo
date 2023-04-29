import React, { useState } from 'react'
import { FaFacebookF, FaLinkedin, FaGoogle, FaApple, FaEnvelope } from 'react-icons/fa';
import escribe from '../assets/escribe.jpg'
import Lottie from 'lottie-react'
import { useAuth } from '../context/AuthContext';

export default function Login() {

    const auth = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        auth.login(email, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>

            <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 marx-w-4xl'>
                    <div className='w-3/5 p-5 bg-blue-400 rounded-2x1 text-white rounded-bl-2xl rounded-tl-2xl'>
                        <div className='text-left font-bold'>
                            <span className='text-white'>IBM</span>
                        </div>
                        <img src={escribe} alt='persona escribiendo' />
                        <h2 className='text-3xl font-bold mb-2'>¡Bienvenido de vuelta!</h2>
                        <p className='text-white text-left'>Impulsando la tecnología</p>
                    </div>
                    {/*registrate sección empieza aqui*/}

                    <div className='w-2/5 p-5 bg-purple-100 text-black rounded-br-2xl rounded-tr-2xl py-36 px-12 text-left'>
                        <p className='text-3x1 font-bold mb-1'>Inicia Sesión</p>
                        <div className='border-2 w-10 border-black inline-block mb-2 text'></div>
                        <p>Si no tienes una cuenta...
                            ¡Puedes <div className='text-cyan-600'> Registrarte aquí! </div></p>

                        <form className='form'>
                            <div className='flex flex-col item-center'>
                                <div className='flex flex-col py-2'>
                                    <label className='text-gray-400 text-sm rounded-full'>Email</label>
                                    <input className='border p-2' type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-gray-400 text-sm rounded-full'>Password</label>
                                    <input className='border p-2' type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-md'
                                onClick={(e) => handleLogin(e)}
                                type='submit' >
                                Log In
                            </button>
                            <div className='flex justify-between'>
                                <p className='flex items-right text-gray-400 text-sm'><input className='mr-2 ' type="checkbox" />Recuerdame  </p>
                                <p className='item-left text-gray-400 text-sm'>¿Olvidaste tu contraseña?</p>
                            </div>
                        </form>

                        <div className='flex justify-center my-2'>

                            <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaApple className='text-sm' />
                            </a>
                            <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaFacebookF className='text-sm' />
                            </a>
                            <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaGoogle className='text-sm' />
                            </a>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
