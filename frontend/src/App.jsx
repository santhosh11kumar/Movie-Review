import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
