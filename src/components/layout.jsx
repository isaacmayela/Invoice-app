import { Outlet, Link, NavLink } from 'react-router-dom';
import userLogo from "../assets/user_image.png"
import UsefulFeatures from '../utils/usefulFeatures';
import FormContext from '../contexts/displayFormContext';
import { useState } from 'react';
import InvoiceForm from './invoice-form/invoice-form';
import imLogo from "../assets/im-logo2.png"
import { motion } from "framer-motion";


function Layout() {

    const [formState, setFormState] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false)

    // UsefulFeatures.provideCrollbarState()

    // console.log(isEditForm);

    const logoVariants = {
        initial: { rotate: 0 },
        animate: { rotate: 360, transition: { duration: 2 } }
    };

    return (
        <>
            <div className="grid grid-cols-[repeat(100,1fr)]">
                <div className='col-[1_/_18] overflow-hidden relative bg-[#1e213b] border-r-[3px] border-r-[#383b54] border-solid'>
                    <div className='flex items-center pt-[1em]'>
                        <img src={imLogo } alt="invoice manager logo" className='w-14 h-14'/>
                        <h1 className='font-black w-20 text-[#fff]'>INVOICE MANAGER</h1>
                    </div>
                    <div className="h-full flex flex-col justify-between pb-[100px]">
                        <nav className='pt-[1.5em] pr-[1em]'>
                            <div>
                                <NavLink to={"/home"}  className={({ isActive }) =>isActive ? "text-[#fff] bg-[#7b5df9] rounded-[0_20px_20px_0] pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold" : "pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold text-[rgba(255,255,255,0.7)]"}>
                                    <i class="fa-solid fa-house text-[0.8em]"></i>
                                Accueil</NavLink>
                            </div>
                            <div>
                                <NavLink  to={"/"} className={({ isActive }) =>isActive ? "text-[#fff] bg-[#7b5df9] rounded-[0_20px_20px_0] pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold" : "pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold text-[rgba(255,255,255,0.7)]"}>
                                    <i class="fa-solid fa-chart-simple text-[0.8em]"></i>
                                    Statistiques
                                </NavLink>
                            </div>
                            <div>
                                <div className='px-[1em] text-[rgba(255,255,255,0.7)] flex items-center justify-between mt-[2em] mb-[0.6em]'>
                                    <h3>COMPAGNIES</h3>
                                    <button><i class="fas fa-plus"></i></button>
                                </div>
                                <NavLink to={"/company"} className={({ isActive }) =>isActive ? "text-[#fff] bg-[#7b5df9] rounded-[0_20px_20px_0] pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold" : "pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold text-[rgba(255,255,255,0.7)]"}>
                                    {/* <i class="fa-solid fa-chart-simple text-[0.8em]"></i> */}
                                    Kadea
                                </NavLink>
                                {/* <NavLink className="pl-[1.5em] text-[rgba(255,255,255,0.7)] font-semibold">Kadea</NavLink> */}
                            </div>
                        </nav>

                        {/* <div className='px-[1em]'>
                            <div className='bg-[#141625] text-[#fff] flex items-center justify-center gap-5 py-[0.7em] rounded-[8px]'>
                                <i class="fa-solid fa-sun"></i>
                                <div className='bg-[#7b5df9] py-[0.5em] w-[50px] rounded-[20px]'></div>
                                <i class="fa-solid fa-moon"></i>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="menu">
                        <div className="container-logo">
                            <div className="banner"></div>
                            <div className="logo">
                            </div>
                        </div>
                        
                        <div className="profile-container">
                            <div className="mode">
                                <a href='#' className="icon"><ion-icon name="sunny"></ion-icon></a>
                            
                            </div>

                            <img src={userLogo} alt="user logo" />
                        </div>
                    </div> */}
                </div>
                <FormContext.Provider value={{ formState, setFormState, isEditForm, setIsEditForm }} >
                    <div className="col-[18_/_101] pb-[4em]">

                        <div className='bg-[#1e213b] border-b-[3px] border-solid border-[#383b54] h-[70px] flex items-center justify-between pr-[2.5em]'>
                            <div></div>
                            <motion.div initial="initial"animate="animate" variants={logoVariants} className='text-[#fff]'>
                                <button>
                                    <i class="fa-solid fa-sun text-[2em] text-[#f9b200]"></i>
                                </button>
                            </motion.div>
                            <div className='flex items-center gap-3'>
                                <img src={userLogo} alt="user logo" className='w-[40px]'/>
                                <h3 className='text-[#fff] font-semibold flex items-center gap-2 text-[1.1em]'>Jonathan Doe <i class="fas fa-chevron-down"></i></h3>
                            </div>
                        </div>

                        {
                            formState ? (
                                <div className='popup-form-container'>
                                    <div className="sidebar">
                                        <div className="form-container">
                                            <InvoiceForm/>
                                        </div>
                                    </div>
                                </div>
                            ): (
                                <div className='popup-form-container un'>
                                    <div className="sidebar un_inf">
                                        <div className="form-container un">
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        
                        {/* <div className="timeline"> */}
                            {/* <div className="container"> */}
                        <Outlet/>
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </FormContext.Provider>
            </div>
        </>
    )
}

export default Layout
