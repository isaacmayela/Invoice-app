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

function App() {

  const [darkMode, setTheme] = useState(false)

  // useEffect(()=>{
  //   const savaTheme = localStorage.getItem("theme") || "light"
  //   setTheme(savaTheme)
  // },[])

  const toggleTheme = () =>{
    setTheme(!darkMode)
    // localStorage.setItem("theme", newTheme)
  }

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
          <div className='w-full bg-[#f5f6ff] flex justify-center items-center overflow-hidden dark:bg-[#1e213b]'>
            <Router>
              <Routes>             
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Layout />}>
                  <Route path='/home' element={<Home/>} />
                  <Route path='/company' element={<Company/>} />
                  <Route path='/invoice/:id' element={<InvoiceDetail/>}/>
                </Route>
              </Routes>
            </Router>
          </div>
        </ThemeContext.Provider>
      </div>
    </>
  )
}

export default App
