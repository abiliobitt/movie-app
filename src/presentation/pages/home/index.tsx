import { IllustratedMessage, } from '@ui5/webcomponents-react'
import SearchInput from '../../components/SearchInput'

import'./styles.scss'

const Home: React.FC = () => {

    return (
        <div className='home-wrapper'>
            <div className="search-input__wrapper">
                <SearchInput className="search-input" />
            </div>
            <IllustratedMessage
                titleText="Nenhuma busca feita :)"
                subtitleText="Que tal buscar o filme que gostaria de ver as informações?"
            />
                
        </div>
    )
}

export default Home