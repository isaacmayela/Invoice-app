import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home/home'
import InvoiceDetail from './pages/invoice-detail/invoice-detail'
import Login from './pages/login/login'
import Register from './pages/register/regster'
import Company from './pages/company/company'

function App() {

  // expression regulière pour valider un email :
  // /(.+)@(.+){2,}\.(.+){2,}/.test("adresse@gmail.com")

  return (
    <>
      <div className={`w-full bg-[#1e213b] flex justify-center items-center overflow-hidden`}>
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
    </>
  )
}

export default App
