import { makeApiUrl, makeAxiosHttpClient } from '../http'
import { SearchMovie } from '../../../domain/useCases'
import { RemoteSearchMovie } from '../../../data/useCases'

export const makeRemoteSearchMovie = (): SearchMovie =>
    new RemoteSearchMovie(makeApiUrl(''), makeAxiosHttpClient())