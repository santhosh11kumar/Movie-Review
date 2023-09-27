import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar'
import Popular from './Pages/Popular/Popular'
import TopRated from './Pages/TopRated/TopRated'
import UpComing from './Pages/Upcoming/UpComing'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="App">

      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies/popular' element={<Popular />}></Route>
        <Route path='/movies/top_rated' element={<TopRated />}></Route>
        <Route path='/movies/upcoming' element={<UpComing />}></Route>
      </Routes>
    </div>
  )
}

export default App;
