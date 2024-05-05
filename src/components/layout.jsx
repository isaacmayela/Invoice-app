import { Outlet, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
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
import { setAccessToken } from '../redux/slice/UserSlice';
import ErrorRequestModal from './modals/ErrorRequestModal';

function Layout() {

    const darkMode = useSelector((state) => state.theme.value);

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/login")
    }

    const refresh = useSelector((state) => state.user.refresh);
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.user.access);
    
    console.log(accessToken);

    const [access, setAccess] = useState(accessToken)

    const [ raf, setRaf] = useState("nonraf")

    console.log(raf);

    console.log(access);

    // axiosInstance.interceptors.request.use(
    //     (config) => {
    //     //   if (accessToken) {
    //         config.headers.Authorization = `Bearer ${access}`;
    //     //   }
    //       return config;
    //     },
    //     (error) => {
    //       return Promise.reject(error);
    //     }
    // );

    const decoded = jwtDecode(accessToken);

    const [ error, setError ] = useState(false)
    const [ message, setMessage ] = useState("")

    axiosInstance.interceptors.response.use(
        async (response) => {
            return response;
        },
        async (error) => {
            const originalRequest = error.config;
      
            if (error.response) {
                const { status } = error.response;
                console.log(error.response);
                if (status === 403) {
                    if (refresh) {
                        try {
                        const response = await axiosInstance.post("core/token/refresh/", { refresh: refresh });
                        const newAccessToken = response.data.access;
                        dispatch(setAccessToken(newAccessToken))
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return axiosInstance(originalRequest);
                        } catch (refreshError) {
                            dispatch(setAccessToken(""))
                            return Promise.reject(refreshError);
                        }
                    } else {
                        dispatch(setAccessToken(""))
                        return Promise.reject(error);
                    }
                }
            } else if (error.request) {
                setError(true)
                setMessage("Erreur de connection veuillez réessayer !")
                return Promise.reject(error);
            } else {
                setError(true)
                setMessage("Une erreur s'est produite lors de l'envoi de la requette !")
                return Promise.reject(error);
            }
        }
    );

    useEffect(() => {
        if (error) {
          const timeout = setTimeout(() => {
            setError(false);
          }, 10000);
    
          return () => clearTimeout(timeout);
        }
    }, [error]);

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
                            <ErrorRequestModal message={message} isError={error} setError={setError}/>
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
