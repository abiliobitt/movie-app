import { configureStore } from '@reduxjs/toolkit'
import { moviesSearchSlice } from './movies'

export const store = configureStore({
    reducer: {
        searchMoviesList: moviesSearchSlice.reducer,
    }
})