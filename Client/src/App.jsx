import React from 'react'
import { useContext } from 'react'
import AppContext from './Context/AppContext.jsx'
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home.jsx'
import { ToastContainer } from 'react-toastify';
import Login from'./Components/User/Login.jsx'
import Register from './Components/User/Register.jsx'

const App = () => {
  const { a } = useContext(AppContext);
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Register/>} />
        </Routes>
      </Router>
      {a}
    </div>
  )
}

export default App
