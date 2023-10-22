import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home/Home'
import MoviesCat from './Pages/MovieCategory/MoviesCat';
import MovieDet from './Pages/MovieDetails/MovieDet';
import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="movieType/:type" element={<MoviesCat />} />
      <Route path="movieDetail/:id" element={<MovieDet />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider >
);
