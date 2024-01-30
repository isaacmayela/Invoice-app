import { Outlet, Link } from 'react-router-dom';
import userLogo from "../assets/user_image.png"
import UsefulFeatures from '../utils/usefulFeatures';
import FormContext from '../contexts/displayFormContext';
import { useState } from 'react';
import InvoiceForm from './invoice-form/invoice-form';

function Layout() {

    const [formState, setFormState] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false)

    // UsefulFeatures.provideCrollbarState()

    console.log(isEditForm);

    return (
        <>
            <div className="main-container">
                <div className='sidebar-menu'>
                    <div className="menu">
                        <div className="container-logo">
                            <div className="banner"></div>
                            <div className="logo">
                            </div>
                        </div>
                        {/* <Link to={"/home"}>aller</Link> */}
                        <div className="profile-container">
                            <div className="mode">
                                <a href='#' className="icon"><ion-icon name="sunny"></ion-icon></a>
                            {/* <a href="#" className='icon'><ion-icon name="moon" className="icon"></ion-icon></a> */}
                            </div>

                            <img src={userLogo} alt="user logo" />
                        </div>
                    </div>
                </div>
                <FormContext.Provider value={{ formState, setFormState, isEditForm, setIsEditForm }} >
                    <div className="elements-container">

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
                        
                        <div className="timeline">
                            <div className="container">
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </FormContext.Provider>
            </div>
        </>
    )
}

export default Layout
