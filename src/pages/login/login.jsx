import { Link, useNavigate, } from 'react-router-dom';
import imLogog from "../../assets/new-im-logo-white.png"
import GoogleIcon from '../../icon/GoogleIcon';
import UserplusIcon from '../../icon/UserplusIcon';


function Login() {

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/home")
    }

    return (
        <>
            <div className="min-h-screen text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-[#1e213b] shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className='flex items-center justify-center py-4 px-2 gap-[1em]'>
                                <img src={ imLogog } alt="invoice manager logo" className='w-12 h-12'/>
                                <div className='font-bold text-[1em] text-[#fff] leading-[1em]'>
                                    <h1>INVOICE</h1>
                                    <h1>MANAGER</h1>
                                </div>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[rgba(123,93,249,0.5)] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-[#1e213b] p-2 rounded-full">
                                            <GoogleIcon/>
                                        </div>
                                        <span className="ml-4 text-gray-100">
                                            Connexion avec Google
                                        </span>
                                    </button>
            
                                </div>
            
                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-100 tracking-wide font-medium bg-[#1e213b] transform translate-y-1/2">
                                        Ou avec votre adrèsse E-mail
                                    </div>
                                </div>
            
                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-[#1e213b] border border-[rgb(33, 36, 57)] placeholder-gray-300 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-300"
                                        type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-[#1e213b] border border-[rgb(33, 36, 57)] placeholder-gray-300 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-300 mt-5"
                                        type="password" placeholder="Password" />
                                    <div className='flex justify-end text-[rgba(123,93,249,0.8)] mt-[1em] text-[0.9em] font-semibold'>
                                        <Link className='hover:underline'>
                                            Mot de passe oublié ?
                                        </Link>
                                    </div>
                                    <button
                                        onClick={handleNavigate}
                                        className="mt-5 tracking-wide font-semibold bg-[rgba(123,93,249,0.8)] text-white-500 w-full py-4 rounded-lg hover:bg-[rgba(123,93,249,0.6)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <UserplusIcon/>
                                        <span className="ml- text-gray-100">
                                            Connexion
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
                    <div className="flex-1 bg-[rgba(123,93,249,0.5)] text-center hidden lg:flex">
                        <div className={`m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url("src/assets/Tabletlogin-bro.png")]`}>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login
