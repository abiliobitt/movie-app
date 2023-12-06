type Movie = {
    title: string
    year: string
    imdbID: string
    type: string
    poster: string
    rated?: string
    released?: string
    runtime?: string
    genre?: string
    director?: string
    writer?: string
    actors?: string
    plot?: string
    language?: string
    country?: string
    awards?: string
    metascore?: string
    imdbrating?: string
    imdbvotes?: string
    dvd?: string
    boxoffice?: string
    production?: string
    website?: string
    response?: string
    ratings?: [{Source: string, Value: string}]
}

export default Movie