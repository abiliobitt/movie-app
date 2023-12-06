import { ResponsiveGridLayout, Text } from '@ui5/webcomponents-react'
import { Rating } from 'react-simple-star-rating'
import'./styles.scss'
import React, { useEffect, useState } from 'react'
import { makeRemoteGetMovieById } from '../../../main/factories/useCases/remote-get-movie-by-id-factory'
import { Movie } from '../../../domain/models'
import Banner from '../../components/Banner'
import { convertRatingToScale5 } from './util'

const MoviePage: React.FC = () => {
    const [movie, setMovie] = useState<Movie|null>()
    useEffect(() => {
        const id = window.location.pathname.split('/').pop() || ''
        const remoteGetMovieById = makeRemoteGetMovieById(id)
        remoteGetMovieById.getMovieById()
            .then( (response) => {
                console.log(response)
                setMovie(response)
            })
            .catch((error: any) => console.error('Error', error.message))
    },[])
    
    return (
        <div className='movie-page__wrapper'>
            <Banner isMoviePage />
            <div className="container">            
                <ResponsiveGridLayout>
                    <div
                        className="responsiveGridLayoutItem"
                        style={{
                            gridColumn: 'span 10'
                        }}
                    >
                        <h1 className='movie-title'>{movie?.title}</h1>
                        <p className='movie-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur exercitationem quam eos eligendi iure corporis reiciendis cum rem distinctio voluptatem, enim accusamus odit consequatur architecto sunt. Nostrum quod eveniet accusamus nulla quibusdam, voluptatum distinctio reiciendis eaque voluptas, nihil officia. Ratione accusantium, quae autem omnis quas porro! Officia consectetur error mollitia harum porro modi. Atque soluta obcaecati unde laborum quaerat sed dolore molestias laudantium. Excepturi tenetur nobis veniam saepe accusamus voluptate iure vero assumenda atque. Incidunt delectus necessitatibus ratione possimus, culpa labore suscipit dolore, praesentium doloribus modi reiciendis, mollitia quam facere quo quidem natus repellat odio laborum quis totam inventore?
                        </p>
                        <h2 className='movie-subtitle'>Dados do filme:</h2>
                        <p>
                            <strong>Data de lançamento:</strong> {movie?.released}
                        </p>
                        <p>
                            <strong>Lingua original:</strong> {movie?.language}
                        </p>
                        <p>
                            <strong>Diretor:</strong> {movie?.director}
                        </p>
                        <p>
                            <strong>Roteiristas:</strong> {movie?.writer}
                        </p>
                        <p>
                            <strong>Atores:</strong> {movie?.actors}
                        </p>
                        <h2 className='movie-subtitle'>Avaliações</h2>
                        {
                            movie?.ratings && movie.ratings.map((rating, index) => (
                                <p key={index}><strong>Avaliador:</strong> { rating.Source} / <strong>Nota:</strong> { rating.Value}</p>
                            ))
                        }
                    </div>
                    <div
                        className="responsiveGridLayoutItem poster_wrapper"
                        style={{
                            gridColumn: 'span 4'
                        }}
                    >
                        <img
                            src={movie?.poster}
                            alt={`Movie ${movie?.title} poster`}
                            className='movie-page__poster'
                        />
                        {movie?.imdbrating && <Rating initialValue={convertRatingToScale5(movie?.imdbrating)} readonly/>}

                    </div>
                </ResponsiveGridLayout>
            </div>
        </div>
    )
}

export default MoviePage