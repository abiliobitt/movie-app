import { makeApiUrl, makeAxiosHttpClient } from '../http'
import { SearchMovie } from '../../../domain/useCases'
import { RemoteSearchMovie } from '../../../data/useCases'

export const makeRemoteSearchMovie = (movieName: string): SearchMovie =>
    new RemoteSearchMovie(makeApiUrl(`movies/search?movieName=${movieName}`), makeAxiosHttpClient())