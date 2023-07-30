import Edit from './Components/Edit'
import Creact from './Components/Creact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Ticket from './Components/Ticket'
import Navbar from './Components/Navbar'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
          <Routes>
            <Route path="/edit/:id" element={<Edit/>}/><Route/>
            <Route path="/Creact" element={<Creact/>}/><Route/>
            <Route path="/login" element={<Login/>}/><Route/>
            <Route path="/signup" element={<Signup/>}/><Route/>
            <Route path="/" element={<Ticket/>}/><Route/>
          </Routes>
    </BrowserRouter>
  )
}

export default App
