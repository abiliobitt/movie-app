import { HttpClient, HttpStatusCode } from '../protocols/http'
import { UnexpectedError} from '../../domain/errors'
import { GetMovieById } from '../../domain/useCases'
import { Movie } from '../../domain/models'

export class RemoteGetMovie implements GetMovieById {
    constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
    ) {}

    async getMovieById(): Promise<Movie> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get',
        })
        const remoteMovie = httpResponse.body || []
        switch (httpResponse.statusCode) {
        case HttpStatusCode.ok:
            return remoteMovie
        default:
            throw new UnexpectedError()
        }
    }
}
