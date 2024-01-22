import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <>
        <div className='menu'></div>
        <div className='add-invoice-sidebar'></div>
        <div className="timeline">
            <Outlet/>
        </div>
    </>
  )
}

export default Layout
