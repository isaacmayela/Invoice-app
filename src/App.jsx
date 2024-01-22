import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>             
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Layout />}>
              <Route path='/home' element={<Home/>} />
              <Route path='/profile' element={<Profile/>}>
                  <Route path='' element={<ProfileUsername/>} />
                  <Route path=':username' element={<OtherProfiles/>} />
              </Route>
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
