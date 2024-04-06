import { Link, NavLink } from "react-router-dom"
import LinesIcon from "../icon/LinesIcon"
import imLogo from "../assets/new-im-logo-white.png"
import imLogoBlack from "../assets/new-im-logo-black.png"
import MoreIcon from "../icon/MoreIcon"
import MoonIcon from "../icon/MoonIcon"
import SunIcon from "../icon/SunIcon"
import BellIcon from "../icon/BellIcon"
import SearchIcon from "../icon/SearchIcon"
import SettingsIcon from "../icon/SettingsIcon"
import userIcon from "../assets/user-01.png"
import { useState } from "react"
import HomeIcon from "../icon/HomeIcon"
import ChartIcon from "../icon/ChartIcon"
import ComponentIcon from "../icon/ComponentIcon"
import { useContext } from "react"
import ThemeContext from "../contexts/themesContext"
 
function Header() {

    const{ darkMode, toggleTheme } = useContext(ThemeContext)

    const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false)
    const [isMobileMainMenuOpen, setIsMobileMainMenuOpen] = useState(false)

    function onMobileMenuOpen() {
        setIsMobileMainMenuOpen(false)
        setIsMobileSubMenuOpen(!isMobileSubMenuOpen);
    }

    function onMobileMainOpen() {
        setIsMobileSubMenuOpen(false)
        setIsMobileMainMenuOpen(!isMobileMainMenuOpen);
    }

    return (
        <>
            <header className="relative bg-[#fff] dark:bg-[#141625]">{/* #141625 dark*/}
                <div className="flex items-center justify-between p-2 border-b border-b-[#7b5df9]">
                    <button
                        onClick={onMobileMainOpen}
                        className="p-1 transition-colors duration-200 rounded-md text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] md:hidden focus:outline-none focus:ring dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]"
                    > {/* text-[rgba(123,93,249,1)]  bg-[#26293f] hover:text-grayhover:bg-[rgba(123,93,249,0.5)]-100  dark*/}
                        <span className="sr-only">Open main manu</span>
                        <span aria-hidden="true">
                            <LinesIcon/>
                        </span>
                    </button>
                    <Link to={"#"} className="inline-block tracking-wider">
                        <img src={ darkMode?imLogo:imLogoBlack } alt="invoice manager logo" className='w-11 h-11'/>
                    </Link>
                    <button
                        onClick={(onMobileMenuOpen)}
                        className="p-1 transition-colors duration-200 rounded-md text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] md:hidden focus:outline-none focus:ring dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]"
                    >
                        <span className="sr-only">Open sub manu</span>
                        <span aria-hidden="true">
                            <MoreIcon/>
                        </span>
                    </button>
                    <nav className="hidden space-x-2 md:flex md:items-center">
                        <button className="relative focus:outline-none" onClick={toggleTheme}>
                            <div className="w-12 h-6 transition rounded-full outline-none bg-[rgba(123,93,249,0.3)] dark:bg-[rgba(123,93,249,1)]"></div> {/* bg-[rgba(123,93,249,1)]  dark*/}
                            <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm translate-x-0 dark:translate-x-6 text-gray-800 bg-[#fff] dark:bg-[#343749] dark:text-gray-100"> {/* bg-[#343749]  text-gray-100 dark*/}
                                {
                                    darkMode ?
                                    <MoonIcon/>
                                    :<SunIcon/>
                                }
                                
                                {/* <SunIcon/> */}
                            </div>
                        </button>
                        <button
                            className="p-2 transition-colors duration-200 rounded-full text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] focus:outline-none focus:bg-primary-100 focus:ring-primary-darker dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]">
                            <span className="sr-only">Open Notification panel</span>
                            <BellIcon/>
                        </button>
                        <button
                            className="p-2 transition-colors duration-200 rounded-full text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] focus:outline-none focus:bg-primary-100 focus:ring-primary-darker dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]">
                            <span className="sr-only">Open Search panel</span>
                            <SearchIcon/>
                        </button>
                        <button
                            className="p-2 transition-colors duration-200 rounded-full text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] focus:outline-none focus:bg-primary-100 focus:ring-primary-darker dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]">
                            <span className="sr-only">Open Settings panel</span>
                            <SettingsIcon/>
                        </button>
                        <div className="relative">
                            <button
                                type="button"
                                className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                            >
                                <span className="sr-only">User menu</span>
                                <img className="w-10 h-10 rounded-full" src={userIcon} alt="user icon" />
                            </button>

                            {/* <div
                                class="absolute right-0 w-48 py-1 bg-[#343749] rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <a
                                href="#"
                                role="menuitem"
                                class="block px-4 py-2 text-sm text-gray-100 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                                >
                                Your Profile
                                </a>
                                <a href="#" role="menuitem" class="block px-4 py-2 text-sm text-gray-100 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                                    Settings
                                </a>
                                <a href="#" role="menuitem" class="block px-4 py-2 text-sm text-gray-100 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
                                    Logout
                                </a>
                            </div> */}
                        </div>
                    </nav>
                    {/* Mobile sub-menu */}

                    <nav
                        className={`absolute flex items-center p-4 bg-[#fff] dark:bg-[#141625] rounded-md shadow-lg top-16 inset-x-4 md:hidden transition duration-300 ease-in-out transform${isMobileSubMenuOpen ? 'opacity-100 translate-y-0 block' : 'opacity-0 -translate-y-full hidden'}`}
                    >{/*bg-[#141625] dark mode */}
                        <div className="space-x-2">
                            <button className="relative focus:outline-none" onClick={toggleTheme}>
                                <div className="w-12 h-6 transition rounded-full outline-none bg-[rgba(123,93,249,0.3)] dark:bg-[rgba(123,93,249,1)]"></div>
                                <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm translate-x-0 dark:translate-x-6 text-gray-800 bg-[#fff] dark:bg-[#343749] dark:text-gray-100">
                                {
                                    darkMode ?
                                    <MoonIcon/>
                                    :<SunIcon/>
                                }
                                    {/* <SunIcon/> */}
                                </div>
                            </button>
                            <button
                                className="p-2 transition-colors duration-200 rounded-full text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] focus:outline-none focus:bg-primary-100 focus:ring-primary-darker dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]"> {/*p-2 transition-colors duration-200 rounded-full text-[rgba(123,93,249,1)] bg-[#26293f] hover:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] focus:outline-none focus:bg-primary-100 focus:ring-primary-darker dark mode*/}
                                <span className="sr-only">Open Notification panel</span>
                                <BellIcon/>
                            </button>
                            <button
                                className="p-2 transition-colors duration-200 rounded-full text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] focus:outline-none focus:bg-primary-100 focus:ring-primary-darker dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]">
                                <span className="sr-only">Open Search panel</span>
                                <SearchIcon/>
                            </button>
                            <button
                                className="p-2 transition-colors duration-200 rounded-full text-[#383b53] bg-[#f5f6ff] hover:text-[#26293f] hover:bg-[#e8e9f3] focus:outline-none focus:bg-primary-100 focus:ring-primary-darker dark:text-[rgba(123,93,249,1)] dark:bg-[#26293f] dark:hover:text-gray-100 dark:hover:bg-[rgba(123,93,249,0.5)]">
                                <span className="sr-only">Open Settings panel</span>
                                <SettingsIcon/>
                            </button>
                        </div>
                        <div className="relative ml-auto">
                            <button
                                type="button"
                                className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                            >
                                <span className="sr-only">User menu</span>
                                <img className="w-10 h-10 rounded-full" src={userIcon} alt="user icon" />
                            </button>

                            {/* Modal comment div */}

                        </div>
                    </nav>
                </div>
                {/* Mobile main-menu */}
                <div className={`border-b border-b-[#7b5df9] md:hidden ${isMobileMainMenuOpen ? 'block' : 'hidden'}`}>
                    <nav className="px-2 py-4 space-y-2">
                    <div>
                            <NavLink to={"/home"}  className={({ isActive }) =>isActive ? "bg-[rgba(123,93,249,0.5)] dark:bg-[rgba(123,93,249,0.7)] dark:text-gray-100 rounded-md flex items-center gap-2 mt-[0.7em] text-light p-2 text-gray-900" : " p-2 flex items-center gap-2 mt-[0.7em] text-light text-gray-900 dark:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] dark:hover:bg-[rgba(123,93,249,0.7)] rounded-md"}> {/* dark cofr sidebar */}
                                <span><HomeIcon/></span>
                                <span>Accueil</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink  to={"/statistiques"} className={({ isActive }) =>isActive ? "bg-[rgba(123,93,249,0.5)] dark:bg-[rgba(123,93,249,0.7)] dark:text-gray-100 rounded-md flex items-center gap-2 mt-[0.7em] text-light p-2 text-gray-900" : " p-2 flex items-center gap-2 mt-[0.7em] text-light text-gray-900 dark:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] dark:hover:bg-[rgba(123,93,249,0.7)] rounded-md"}>
                                <span><ChartIcon/></span>
                                <span>Statistiques</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink  to={"/statistiques"} className={({ isActive }) =>isActive ? "bg-[rgba(123,93,249,0.5)] dark:bg-[rgba(123,93,249,0.7)] dark:text-gray-100 rounded-md flex items-center gap-2 mt-[0.7em] text-light p-2 text-gray-900" : " p-2 flex items-center gap-2 mt-[0.7em] text-light text-gray-900 dark:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] dark:hover:bg-[rgba(123,93,249,0.7)] rounded-md"}>
                                <span><ComponentIcon/></span>
                                <span>Compagnies</span>
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
