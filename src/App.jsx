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

  const [theme, setTheme] = useState("light")

  useEffect(()=>{
    const savaTheme = localStorage.getItem("theme") || "light"
    setTheme(savaTheme)
  },[])

  const toggleTheme = (newTheme) =>{
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className={`w-full bg-[#f5f6ff] flex justify-center items-center overflow-hidden`}>{/* #1e213b dark */}
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
    </>
  )
}

export default App
