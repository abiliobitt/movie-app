
import SearchInput from '../SearchInput'
import'./styles.scss'

type BannerProps = {
    isMoviePage?: boolean
}

const Banner = ({isMoviePage}: BannerProps) => {
    return (
        <div className={`banner__wrapper ${isMoviePage ? '-moviepage' : ''}`}>
            <div className='banner__container'>
                {
                    !isMoviePage &&
                    <div className="content">
                        <h1>O lugar para pesquisar seus filmes!</h1>
                        <p className='text'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vero quaerat, repudiandae perferendis fugit alias beatae, commodi minima accusantium tenetur porro dolorum deserunt aliquid quo sint facilis quibusdam?
                        </p>
                    </div>
                }
                <div className="search">
                    <h2>Busque seu filme ou série</h2>
                    <SearchInput />
                </div>

            </div>
        </div>
    )
}

export default Banner