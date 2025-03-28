
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Employee from './components/Employee'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/employee' element={<Employee/>}> </Route>
  </Routes>   
   </>
  )
}



export default App;
