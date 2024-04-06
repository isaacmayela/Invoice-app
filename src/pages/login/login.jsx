import { Link, useNavigate, } from 'react-router-dom';
import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import GoogleIcon from '../../icon/GoogleIcon';
import UserplusIcon from '../../icon/UserplusIcon';
import { useContext } from 'react';
import ThemeContext from '../../contexts/themesContext';


function Login() {

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/home")
    }

    const{ darkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <div className="min-h-screen text-gray-900 flex justify-center w-full">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-[#fff] shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden dark:bg-[#141625]"> {/* 1e213b dark */}
                    <div className="lg:w-1/2 xl:w-5/12 p-5 sm:p-12">
                        <div className='flex items-center justify-center px-2 gap-[1em]'>
                            <img src={ darkMode?imLogo:imLogoBlack } alt="invoice manager logo" className='w-12 h-12'/>{/*imLogog dark mode */}
                            <div className='font-bold text-[1em] text-[black] leading-[1em] dark:text-white'> {/* text-fff dark */}
                                <h1>INVOICE</h1>
                                <h1>MANAGER</h1>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[rgba(123,93,249,0.9)] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline dark:bg-[rgba(123,93,249,0.6)]"> {/*bg-[rgba(123,93,249,0.5)] dark */}
                                        <div className="bg-[#f5f6ff] p-2 rounded-full dark:bg-[#141625]"> {/* 1e213b dark */}
                                            <GoogleIcon/>
                                        </div>
                                        <span className="ml-4 text-gray-100 dark:text-gray-950">{/* text-gray-100 dark */}
                                            Connexion avec Google
                                        </span>
                                    </button>
                                </div>
            
                                <div className="my-8 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-700 tracking-wide font-medium bg-[#fff] transform translate-y-1/2 dark:bg-[#141625] dark:text-gray-100">{/*bg-[#1e213b] text-gray-100 dark */}
                                        Ou avec votre adrèsse E-mail
                                    </div>
                                </div>
            
                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(20 22 37 0.5)] dark:placeholder-gray-300"
                                        type="email" placeholder="Email" />{/*bg-[#1e213b] dark text-gray-300  border-[rgb(33, 36, 57)]*/}
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(20, 22, 37, 0.5)] dark:placeholder-gray-300 mt-5"
                                        type="password" placeholder="Password" />{/*bg-[#1e213b] dark text-gray-300  border-[rgb(33, 36, 57)]*/}
                                    <div className='flex justify-end text-[rgba(123,93,249,0.9)] mt-[1em] text-[0.9em] font-semibold'>
                                        <Link className='hover:underline'>
                                            Mot de passe oublié ?
                                        </Link>
                                    </div>
                                    <button
                                        onClick={handleNavigate}
                                        className="mt-5 tracking-wide font-semibold bg-[rgba(123,93,249,0.9)] text-gray-100 w-full py-4 rounded-lg hover:bg-[rgba(123,93,249,1)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none dark:bg-[rgba(123,93,249,0.6)] dark:hover:bg-[rgba(123,93,249,0.5)] dark:text-gray-950">{/* bg-[rgba(123,93,249,0.8)] hover:bg-[rgba(123,93,249,0.6)] text-white-500 dark*/}
                                        <UserplusIcon/>
                                        <span className="ml- text-gray-100 font-bold dark:text-gray-950"> {/*text-gray-100 dark */}
                                            Connexion
                                        </span>
                                    </button>
                                    <div className='text-center text-[rgba(123,93,249,0.9)] mt-[1em] text-[0.9em] font-semibold'>
                                        <Link className='hover:underline'>
                                            Vous n'avez pas de compte ?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-[rgba(123,93,249,0.5)] text-center hidden lg:flex">
                        <div className={`${darkMode?'bg-[url("src/assets/Tabletlogin-bro.png")]':'bg-[url("src/assets/Tabletlogin-rafiki.png")]'} m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat `}> {/* "src/assets/Tabletlogin-bro.png"  dark mode */}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login
