import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home/home'
import InvoiceDetail from './pages/invoice-detail/invoice-detail'

function App() {

  // expression regulière pour valider un email :
  // /(.+)@(.+){2,}\.(.+){2,}/.test("adresse@gmail.com")

  return (
    <>
      <Router>
        <Routes>             
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Layout />}>
              <Route path='/home' element={<Home/>} />
              <Route path='/invoice/:id' element={<InvoiceDetail/>}/>
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
