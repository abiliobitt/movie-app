import { makeApiUrl, makeAxiosHttpClient } from '../http'
import { GetMovieById } from '../../../domain/useCases'
import { RemoteGetMovie } from '../../../data/useCases'

export const makeRemoteGetMovieById = (id: string): GetMovieById =>
    new RemoteGetMovie(makeApiUrl(`movies/${id}`), makeAxiosHttpClient())