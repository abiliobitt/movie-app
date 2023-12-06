import { IllustratedMessage, } from '@ui5/webcomponents-react'
import'./styles.scss'

const MoviePage: React.FC = () => {
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