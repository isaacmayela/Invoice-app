import { Outlet } from 'react-router-dom';
import userLogo from "../assets/user_image.png"

function Layout() {

  return (
    <>
        <div className="main-container">
            <div className='sidebar-menu'>
                <div className="container-logo">
                    <div className="banner"></div>
                    <div className="logo">
                    </div>
                </div>
                <div className="profile-container">
                    <div className="mode">
                        <a href='#' className="icon"><ion-icon name="sunny"></ion-icon></a>
                       {/* <a href="#" className='icon'><ion-icon name="moon" className="icon"></ion-icon></a> */}
                    </div>

                    <img src={userLogo} alt="user logo" />
                </div>
            </div>
            <div className="elements-container">
                <div className='add-invoice-sidebar'></div>
                <div className="timeline">
                    <div className="container">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout
