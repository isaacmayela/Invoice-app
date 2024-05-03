import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Sidebar from './Sidebar';
import Header from './Header';
import Loader from '../common/Loader';
import SearchPanel from './SearchPanel';
import SearchPanelContext from '../contexts/searchpanelContext';
import { jwtDecode } from "jwt-decode";
import refreshToken from '../config/tokenRefres';
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from '../config/axiosInstance';

function Layout() {

    const darkMode = useSelector((state) => state.theme.value);

    const refresh = useSelector((state) => state.user.refresh);
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.user.access);

    // console.log(accessToken);

    axiosInstance.interceptors.request.use(
        (config) => {
          if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
    );

    const decoded = jwtDecode(accessToken);

    const [loadingToken, setLoadingToken ] = useState(true)

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         if (refresh) {
    //             getRefreshToken();
    //         }
    //     }, 300000);
    //     ref.current = interval
    //     return () => clearInterval(interval);

    // }, []);



    useEffect(() => {
        const lastRefreshTime = localStorage.getItem('lastRefreshTime');
    
        if (accessToken) {
            const timeSinceLastRefresh = Date.now() - lastRefreshTime;
            const timeToNextRefresh = 300000 - timeSinceLastRefresh;
            // Si le temps écoulé depuis le dernier rafraîchissement est inférieur à 5 minutes,
            // on attend le reste du délai avant de rafraîchir à nouveau le token
            const timeout = timeToNextRefresh > 0 ? timeToNextRefresh : 0;
            const interval = setInterval(refreshToken(dispatch, refresh), timeout);
            return () => clearInterval(interval);
        }
    }, []);



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
                            <div className='flex-1 h-full overflow-x-hidden overflow-y-auto generalScrollbar'>
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
