import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Recipe from './Recipe'
import Cuisines from './Cuisines'

//  can make page for route
function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="/cuisines/:name" element={<Cuisines />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Pages