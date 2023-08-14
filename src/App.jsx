import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Cuisines from './pages/Cuisines'
import Navbar from './components/Navbar'
import Searched from './pages/Searched'
import All_recipe from './components/All_recipe'

function App() {

  return (
    <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allrecipe" element={<All_recipe />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/cuisines/:name" element={<Cuisines />} />
            <Route path="/search/:searched" element={<Searched />} />
          </Routes>


    </BrowserRouter>

  )
}

export default App
