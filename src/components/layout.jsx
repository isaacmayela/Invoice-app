import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import userLogo from "../assets/user_image.png"
import FormContext from '../contexts/displayFormContext';
import { useEffect, useState } from 'react';
import InvoiceForm from './invoice-form/invoice-form';
import imLogo from "../assets/im-logo2.png"
import { motion } from "framer-motion";
import LoadingBar from 'react-top-loading-bar';
import Sidebar from './Sidebar';
import Header from './Header';
import Loader from '../common/Loader';
import SearchPanel from './SearchPanel';
import SearchPanelContext from '../contexts/searchpanelContext';
import { jwtDecode } from "jwt-decode";
import refreshToken from '../config/tokenRefres';
import { useDispatch, useSelector } from "react-redux";

function Layout() {

    const darkMode = useSelector((state) => state.theme.value);

    const refresh = useSelector((state) => state.user.refresh);
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.user.access);
    const decoded = jwtDecode(accessToken);
    // console.log(accessToken);

    const [loadingToken, setLoadingToken ] = useState(true)

    useEffect(() => {
    
        let interval = setInterval(() => {
            if (accessToken) {
                refreshToken(dispatch, refresh)
            }
        }, 300000);
        
        // const interval = setInterval(refreshToken, 300000); // Rafraîchir toutes les 5 minutes 300000
        return () => clearInterval(interval);
    }, [accessToken, loadingToken]);


    const [loading, setLoading] = useState(true);
    const [isSearchPanleMenu, setIsSearchPanleMenu] = useState(false);
    const { pathname } = useLocation();
    const [progress, setProgress] = useState()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    useEffect(() => {
        setProgress(40)
        setTimeout(() => {
            setProgress(100)
        }, 2000);
    }, []);

    return (
        <>
            <div className={`${darkMode && "dark"} w-full`}>
                {
                    loading ? (
                        <Loader />
                    ) : (
                    <SearchPanelContext.Provider value={{isSearchPanleMenu, setIsSearchPanleMenu}}>
                        <div className='flex h-screen w-[inherit] antialiased dark:bg-[#1e213b]'>
                            <LoadingBar color='rgba(123,93,249,1)' progress={progress} onLoaderFinished={()=>{setProgress(0)}}/>
                            <Sidebar />
                            <div className='flex-1 h-full overflow-x-hidden overflow-y-auto'>
                                <Header />
                                <main>
                                    <Outlet/>
                                </main>
                            </div>
                            <SearchPanel/>
                        </div>
                    </SearchPanelContext.Provider>
                    )
                }
            </div>
        </>
    )
}

export default Layout
