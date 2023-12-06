import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '../../domain/models'

export interface MoviesSearchState {
  moviesSearchResult: Movie[],
  loading: boolean
}

const initialState: MoviesSearchState = {
    moviesSearchResult: [],
    loading: false
}
export const moviesSearchSlice = createSlice({
    name: 'moviesSearchResult',
    initialState,
    reducers: {
        getMoviesFromSearch: (state, action) => {
            state.moviesSearchResult = [...action.payload]
        },
        setLoadingStatus: (state) => {
            state.loading = !state.loading
        }
    }
})

export const { getMoviesFromSearch, setLoadingStatus } = moviesSearchSlice.actions

export const selectMoviesSearchResult = (state: MoviesSearchState) => {
    return state.moviesSearchResult
}

export default moviesSearchSlice.reducer