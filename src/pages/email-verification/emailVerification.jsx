import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import ThemeContext from "../../contexts/themesContext"
import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import { useDispatch, useSelector } from "react-redux";
import WifiIcon from "../../icon/WifiIcon"
import CheckCheckIcon from "../../icon/CheckCheckIcon"
import CircleOffIcon from "../../icon/CircleOffIcon"


function Emailverification() {

    // const{ darkMode, toggleTheme } = useContext(ThemeContext)

    const darkMode = useSelector((state) => state.theme.value);

    return (
        <>
            <div className={`${darkMode && "dark"} w-full`}>
                <div className="min-h-screen text-gray-900 flex justify-center w-[inherit] dark:bg-[#1e213b]">
                    <div className="max-w-screen-xl m-0 sm:m-10 bg-[#fff] shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden dark:bg-[#141625]">
                        <div className="lg:w-1/2 xl:w-5/12 p-5 sm:p-12">
                            <div className='flex items-center justify-center px-2 gap-[1em]'>
                                <img src={ darkMode?imLogo:imLogoBlack } alt="invoice manager logo" className='w-12 h-12'/>
                                <div className='font-bold text-[1em] text-[black] leading-[1em] dark:text-white'>
                                    <h1>INVOICE</h1>
                                    <h1>MANAGER</h1>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col items-center">
                                <div className="w-full flex-1 mt-6">
                                    <div className="mx-auto max-w-xs">
                                        <div className="flex flex-col gap-[1em] items-center">
                                            <span className="text-[#198754]">
                                                <WifiIcon/>
                                            </span>
                                            <h1 className="text-[1.3em] font-semibold text-center dark:text-gray-100">Veuillez patienter, nous verfifions votre identité</h1>
                                            <p className="dark:text-gray-100 mt-[1em] text-black text-[1.1em] font-semibold">En attente...</p>
                                            <p className="dark:text-gray-100 mt-[1em] text-black text-[1.1em] font-semibold">Redirection</p>
                                            <div className="flex items-center gap-[0.5em]">
                                                <p className="text-center dark:text-gray-100 font-semibold">Verification réussie</p>
                                                <span className="text-[#198754]"><CheckCheckIcon/></span>
                                            </div>
                                            <div className="flex items-center gap-[0.5em]">
                                                <p className="text-center dark:text-gray-100 font-semibold">Echec de la verification</p>
                                                <span className="text-[red] dark:text-red-600"><CircleOffIcon/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[rgba(123,93,249,0.5)] text-center hidden lg:flex">
                            <div className={`${darkMode?'bg-[url("src/assets/Waiting-bro.png")]':'bg-[url("src/assets/Waiting-bro.png")]'} m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat `}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Emailverification
