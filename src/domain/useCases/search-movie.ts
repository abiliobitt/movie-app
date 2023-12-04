import { Movie } from '../models'

export interface SearchMovie {
    searchMovie: () => Promise<Movie[]>
}

