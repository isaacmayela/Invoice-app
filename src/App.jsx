import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home/home'
import InvoiceDetail from './pages/invoice-detail/invoice-detail'
import Login from './pages/login/login'
import Register from './pages/register/regster'
import Company from './pages/company/company'
import ThemeContext from './contexts/themesContext'
import { useState, useEffect } from 'react'
import Profile from './pages/profile/profile'
import CompagniesList from './pages/company-list/CompangiesList'
import EmailConfirm from './pages/email-confirm/EmailConfirm'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import ChangePassword from './pages/changePassword/changePassword'
import PrivateWrapper from './private-root/PrivateRoot'
import { useDispatch, useSelector, Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import PageNotFound from './pages/pageNotFound/page404'
import Emailverification from './pages/email-verification/emailVerification'

function App() {
  // localStorage.removeItem('theme');

  const isAuthenticated = true

  return (
    <>
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className='w-full bg-[#f5f6ff] flex justify-center items-center overflow-hidden'>
              <Router>
                <Routes>             
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/email-confirm" element={<EmailConfirm />} />
                  <Route path="/email-verification" element={<Emailverification />} />
                  <Route path="/forgotPassword" element={<ForgotPassword />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                  <Route path='*' element={<PageNotFound />}/>
                  <Route path="/" element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
                    <Route path='/home' element={<Home/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/company-list' element={<CompagniesList/>} />
                    <Route path='/company/details' element={<Company/>} />
                    {/* <Route path='/statitics' element={<Company/>} /> */}
                  </Route>
                  <Route path='/invoice' element={<InvoiceDetail/>}/>
                </Routes>
              </Router>
            </div>
          </PersistGate>
        </Provider>
      </div>
    </>
  )
}

export default App
