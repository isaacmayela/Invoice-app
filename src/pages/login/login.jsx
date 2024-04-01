import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import chart from "../../assets/dallee.webp"
import imLogog from "../../assets/im-logo2.png"
import userIcon from "../../assets/user-icon.webp"
import googleLogo from "../../assets/google-logo.png"


function Login() {

    const inputStyles = 'w-full outline-none bg-[#1e213b] text-white font-semibold text-[0.9em] mt-[0.7em] p-[1em] rounded-[5px] border-2 border-solid border-[#383b54]'

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/home")
    }

    return (
        <>
            {/* <div className='h-screen flex items-center justify-center gradient'>
                <div className='w-1/3 h-5/6 rounded-xl overflow-hidden drop-shadow-md'>
                    <div className='bg-[#1e213b] h-full col-[1_/_6] px-10 pt-5'>
                        <form action="#">
                            <div className='flex items-center justify-center'>
                                <img src={imLogog} alt="invoice manager logo" className='w-14 h-14'/>
                                <h1 className='font-black w-20 text-[#fff] pr-[]'>INVOICE MANAGER</h1>
                            </div>
                            <div className='flex items-center rounded-full py-[0.2em] px-[1em] gap-3 mt-[4em]'>
                                <i class="fa-solid fa-user text-[#fff]"></i>
                                <input className={inputStyles} type="text" placeholder='USERNAME'/>
                            </div>
                            <div className='flex items-center rounded-full py-[0.2em] px-[1em] gap-3 mt-[1.6em]'>
                                <i class="fa-solid fa-lock text-[#fff]"></i>
                                <input className={inputStyles} type="text" placeholder='PASSWORD'/>
                            </div>
                            <div className='mt-[2em]'>
                                <button onClick={handleNavigate} className='font-bold bg-[#7b5df9] w-full text-[#fff] rounded-full py-[0.6em] text-lg'>LOGIN</button>
                            </div>
                            <div className='pt-[1.5em] px-[1em] flex items-center justify-between login-links'>
                                <Link className='text-[#fff] pt-[0.5em]'>Mot de passe oublié ?</Link>
                                <Link className='text-[#fff] pt-[0.5em]'>Créer un compte</Link>
                            </div>

                            <div className='mt-[3em] flex items-center justify-center gap-10'>
                                <i class="fa-brands fa-facebook-f text-[#fff] text-3xl"></i>
                                <i class="fab fa-whatsapp text-[#fff] text-3xl"></i>
                                <i class="fa-brands fa-youtube text-[#fff] text-3xl"></i>
                            </div>
                        </form>
                    </div>
                    <div className='h-full grid col-[6_/_13] bg-[url("src/assets/dallee6.webp")] bg-contain'></div>
                </div>
            </div> */}

            <div className='h-screen flex items-center justify-center gradient overflow-hidden'>
                <div className="flex flex-col bg-[#1e213b] shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-[#e8e9f0]">CONNECTER-VOUS</div>
                    <button className="relative mt-6 border border-[#777a8f] rounded-md py-2 text-sm text-[#e8e9f0] bg-[#35395c] hover:bg-[#2a2e4c]">
                        <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10">
                            <img src={googleLogo} alt="google logo" className='w-[1.5em]'/>
                        </span>
                        <span>Connexion avec Google</span>
                    </button>
                    <div className="relative mt-10 h-px bg-gray-300">
                        <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span className="bg-[#1e213b] px-4 text-xs text-[#b4b7cd] uppercase">Ou avec adrèsse Email</span>
                        </div>
                    </div>
                    <div className="mt-10">
                        <form action="#">
                            <div className="flex flex-col mb-6">
                            <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-[#b4b7cd]">E-Mail Address:</label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                </div>

                                <input id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 bg-[#1e213b]" placeholder="E-Mail Address" />
                            </div>
                            </div>
                            <div className="flex flex-col mb-6">
                            <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-[#b4b7cd]">Password:</label>
                            <div className="relative">
                                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <span>
                                    <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                </div>

                                <input id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 bg-[#1e213b]" placeholder="Password" />
                            </div>
                            </div>

                            <div class="flex items-center mb-6 -mt-4">
                            <div class="flex ml-auto">
                                <a href="#" className="inline-flex text-xs sm:text-sm text-[#7b5df9] hover:text-[#6f53de]">Mot de passe oublié ?</a>
                            </div>
                            </div>

                            <div class="flex w-full">
                            <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#7b5df9] hover:bg-[#6f53de] rounded py-2 w-full transition duration-150 ease-in" onClick={handleNavigate}>
                                <span class="mr-2 uppercase">Login</span>
                                <span>
                                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </span>
                            </button>
                            </div>
                        </form>
                    </div>
                    <div class="flex justify-center items-center mt-6">
                    <a href="#" target="_blank" className="inline-flex items-center font-bold text-[#7b5df9] hover:text-[#6f53de] text-xs text-center">
                        <span>
                        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        </span>
                        <span className="ml-2">Vous n'avez pas de compte ?</span>
                    </a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login
