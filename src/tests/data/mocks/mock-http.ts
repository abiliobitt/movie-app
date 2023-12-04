import { HttpRequest, HttpResponse, HttpStatusCode, HttpClient } from '../../../data/protocols/http'

import { faker } from '@faker-js/faker'

export const mockHttpRequest = (): HttpRequest => ({
    url: faker.internet.url(),
    method: faker.helpers.arrayElement(['get', 'post', 'put', 'delete']),
    body: faker.helpers.objectValue({ myProperty: 'myValue' }),
    headers: faker.helpers.objectValue({ myHeader: 'myHeader' })
})

export class HttpClientSpy<R = unknown> implements HttpClient<R> {
    url?: string
    method?: string
    body?: unknown
    headers?: unknown
    response: HttpResponse<R> = {
        statusCode: HttpStatusCode.ok
    }

    async request (data: HttpRequest): Promise<HttpResponse<R>> {
        this.url = data.url
        this.method = data.method
        this.body = data.body
        this.headers = data.headers
        return this.response
    }
}
