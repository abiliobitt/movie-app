import { Movie } from '../models'

export interface LoadMovieList {
    loadAll: () => Promise<Movie[]>
}

