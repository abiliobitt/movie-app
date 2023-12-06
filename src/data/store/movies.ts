import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '../../domain/models'

export interface MoviesSearchState {
  moviesSearchResult: Movie[]
}

const initialState: MoviesSearchState = {
    moviesSearchResult: []
}
export const moviesSearchSlice = createSlice({
    name: 'moviesSearchResult',
    initialState,
    reducers: {
        getMoviesFromSearch: (state, action) => {
            state.moviesSearchResult = [...action.payload]
        }
    }
})

export const { getMoviesFromSearch } = moviesSearchSlice.actions

export const selectMoviesSearchResult = (state: MoviesSearchState) => {
    return state.moviesSearchResult
}

export default moviesSearchSlice.reducer