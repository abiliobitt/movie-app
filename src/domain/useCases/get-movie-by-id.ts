import { Movie } from '../models'

export interface GetMovieById {
    getMovieById: () => Promise<Movie>
}

