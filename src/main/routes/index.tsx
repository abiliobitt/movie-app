import { Home } from '../../presentation/pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import MoviePage from '../../presentation/pages/movie'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/movie/:id" Component={MoviePage} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router