import { IllustratedMessage, } from '@ui5/webcomponents-react'
import'./styles.scss'
import { useEffect } from 'react'
import { makeRemoteGetMovieById } from '../../../main/factories/useCases/remote-get-movie-by-id-factory'

const MoviePage: React.FC = () => {
    useEffect(() => {
        const remoteGetMovieById = makeRemoteGetMovieById('tt0205718')
        remoteGetMovieById.getMovieById()
            .then( (response) => {
                console.log(response)
            })
            .catch((error: any) => console.error('Error', error.message))
    },[])
    
    return (
        <div className='home-wrapper'>
            <IllustratedMessage
                titleText="Nenhuma busca feita :)"
                subtitleText="Que tal buscar o filme que gostaria de ver as informações?"
            />
        </div>
    )
}

export default MoviePage