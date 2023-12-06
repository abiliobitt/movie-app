import { Button } from '@ui5/webcomponents-react'

import Banner from '../../components/Banner'
import './styles.scss'
const Home: React.FC = () => {
    return (
        <div className='home__wrapper'>
            <Banner />
            <div className="container">
                <div className="home-boxes__wrapper">
                    <div className="box">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sequi!</p>
                    </div>
                    <div className="box">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sequi!</p>
                    </div>
                    <div className="box">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sequi!</p>
                    </div>
                    <div className="box">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sequi!</p>
                    </div>
                    <div className="box">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sequi!</p>
                    </div>
                    <div className="box">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sequi!</p>
                    </div>
                </div>
            </div>
            <div className="home-call-to-action__wrapper">
                <div className="container">
                    <h1>Lorem ipsum dolor sit amet!</h1>
                    <Button className='home-call-to-action-button'>Click to action!</Button>
                </div>
            </div>
        </div>
    )
}

export default Home