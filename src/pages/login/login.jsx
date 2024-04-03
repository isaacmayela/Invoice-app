import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import chart from "../../assets/dallee.webp"
import imLogog from "../../assets/im-logo2.png"
import userIcon from "../../assets/user-icon.webp"
import googleLogo from "../../assets/google-logo.png"
import tabletLogin from "../../assets/Tablet login-bro.png"


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
                                <i class="fa-brands fa-youtube text-[#fff] text-3xl"></i>rgb(123,93,249)
                            </div>
                        </form>
                    </div>
                    <div className='h-full grid col-[6_/_13] bg-[url("src/assets/dallee6.webp")] bg-contain'></div>
                </div>
            </div> */}

            <div className='h-screen flex items-center justify-center gradient overflow-hidden'>
                <div className='max-w-screen-xl m-0 sm:m-10 bg-[#1e213b] shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden'>
                    <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex items-center'>
                        <div className="mt-5 flex flex-col items-center">
                            <div className='flex items-center py-4 px-2 gap-[1em]'>
                                <img src={ imLogog } alt="invoice manager logo" className='w-14 h-14 bg-[black] rounded-full'/>
                                <div className='font-bold text-[0.9em] text-[#fff] leading-[1em]'>
                                    <h1>INVOICE</h1>
                                    <h1>MANAGER</h1>
                                </div>
                            </div>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[rgba(123,93,249,0.5)] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-[#1e213b] p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4" />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853" />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04" />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335" />
                                            </svg>
                                        </div>
                                        <span className="ml-4 text-gray-100">
                                            Sign In with Google
                                        </span>
                                    </button>

                                </div>

                                <div className="my-12 border-b text-center">
                                    <div
                                        class="leading-none px-2 inline-block text-sm text-gray-100 tracking-wide font-medium bg-[#1e213b] transform translate-y-1/2">
                                        Or sign In with Cartesian E-mail
                                    </div>
                                </div>

                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-[rgba(123,93,249,0.8)] text-white-500 w-full py-4 rounded-lg hover:bg-[rgba(123,93,249,0.6)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="rgb(249 250 251)" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span class="ml- text-gray-100">
                                            Sign In
                                        </span>
                                    </button>
                                    <div className='text-center text-[rgba(123,93,249,0.8)] mt-[1em] text-[0.9em] font-semibold'>
                                        <Link className='hover:underline'>
                                            Vous n'avez pas de compte ?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 bg-[rgba(123,93,249,0.5)] justify-center items-center text-center hidden lg:flex'>
                        <img src={tabletLogin} alt="tablet pana" className='w-[27em] h-[24em] px-[1em]'/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login
