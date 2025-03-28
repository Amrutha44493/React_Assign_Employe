
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Employee from './components/Employee'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <BrowserRouter basename="/React_Assign_Employe">
      <Routes>
        <Route index element={<Home />} />
        
        <Route path="home" element={<Home />} />
        <Route path="employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>  
   </>
  )
}



export default App;
