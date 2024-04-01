import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import chart from "../../assets/dallee.webp"
import imLogog from "../../assets/im-logo2.png"
import userIcon from "../../assets/user-icon.webp"

function Register() {

    const inputStyles = 'w-full outline-none bg-[#1e213b] text-white font-semibold text-[0.9em] mt-[0.7em] p-[1em] rounded-[5px] border-2 border-solid border-[#383b54]'

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/home")
    }

    return (
        <>
            <div className='h-screen flex items-center justify-center gradient'>
                <div className='w-1/3 h-5/6 rounded-xl overflow-hidden drop-shadow-md'>
                    <div className='bg-[#1e213b] h-full col-[1_/_6] px-10 pt-5'>
                        <form action="">
                        <div className='flex items-center justify-center'>
                            <img src={imLogog} alt="invoice manager logo" className='w-14 h-14'/>
                            <h1 className='font-black w-20 text-[#fff] pr-[]'>INVOICE MANAGER</h1>
                        </div>
                        <div className='flex items-center rounded-full py-[0.2em] px-[1em] gap-3 mt-[2em]'>
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
                            <Link className='text-[#fff] pt-[0.5em]'>S'enregistrer</Link>
                        </div>

                        <div className='mt-[3em] flex items-center justify-center gap-10'>
                            <i class="fa-brands fa-facebook-f text-[#fff] text-3xl"></i>
                            <i class="fab fa-whatsapp text-[#fff] text-3xl"></i>
                            <i class="fa-brands fa-youtube text-[#fff] text-3xl"></i>
                        </div>
                        </form>
                    </div>
                    {/* <div className='h-full grid col-[6_/_13] bg-[url("src/assets/dallee6.webp")] bg-contain'></div> */}
                </div>
            </div>
        </>
    )
}

export default Register
