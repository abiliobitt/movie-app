import { makeApiUrl } from '../http'
import { LoadMovieList } from '../../../domain/useCases'
import { RemoteLoadMovieList } from '../../../data/useCases'
import { makeAxiosHttpClient } from '../http/'


export const makeRemoteLoadMovieList = (): LoadMovieList =>
    new RemoteLoadMovieList(makeApiUrl(''), makeAxiosHttpClient())