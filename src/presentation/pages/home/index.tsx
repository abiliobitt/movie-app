import { IllustratedMessage, } from '@ui5/webcomponents-react'

const Home: React.FC = () => {
    return (
        <div>
            <IllustratedMessage
                titleText="Nenhuma busca feita :)"
                subtitleText="Que tal buscar o filme que gostaria de ver as informações?"
            />
        </div>
    )
}

export default Home