import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar'
import Home from './Pages/Home/Home'
import MoviesCat from './Pages/MovieCategory/MoviesCat';
import MovieDet from './Pages/MovieDetails/MovieDet';

function App() {

  return (
    <div className="App">

      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movieType/:type' element={<MoviesCat />}></Route>
        <Route path='/movieDetail/:id' element={<MovieDet />}></Route>
        <Route path='/*'>Error</Route>
      </Routes>
    </div>
  )
}

export default App;
