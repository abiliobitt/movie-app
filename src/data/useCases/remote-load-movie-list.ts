import { HttpClient, HttpStatusCode } from '../protocols/http'
import { UnexpectedError} from '../../domain/errors'
import { LoadMovieList } from '../../domain/useCases'
import { Movie } from '../../domain/models'

export class RemoteLoadMovieList implements LoadMovieList {
    constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
    ) {}

    async loadAll(): Promise<Movie[]> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get',
        })
        const remoteMovies = httpResponse.body || []
        switch (httpResponse.statusCode) {
        case HttpStatusCode.ok:
            return remoteMovies
        case HttpStatusCode.noContent:
            return []
        default:
            throw new UnexpectedError()
        }
    }
}
