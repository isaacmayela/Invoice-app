import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import userLogo from "../assets/user_image.png"
import UsefulFeatures from '../utils/usefulFeatures';
import FormContext from '../contexts/displayFormContext';
import { useEffect, useState } from 'react';
import InvoiceForm from './invoice-form/invoice-form';
import imLogo from "../assets/im-logo2.png"
import { motion } from "framer-motion";
import LoadingBar from 'react-top-loading-bar';
import Sidebar from './Sidebar';
import Header from './Header';
import Loader from '../common/Loader';



function Layout() {

    const [loading, setLoading] = useState(true);
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
            {
                loading ? (
                    <Loader />
                ) : (
                <div className='flex h-screen w-full antialiased'>
                    <LoadingBar color='rgba(123,93,249,1)' progress={progress} onLoaderFinished={()=>{setProgress(0)}}/>
                    <Sidebar />
                    <div className='flex-1 h-full overflow-x-hidden overflow-y-auto'>
                        <Header />
                        <div className='dark:bg-[red] w-full h-[100px]'>
                            salaut
                        </div>
                    </div>
                </div>
                )
            }
        </>
    )
}

export default Layout
