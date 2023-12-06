import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, InputDomRef, SuggestionGroupItem, SuggestionItem, Ui5CustomEvent } from '@ui5/webcomponents-react'
import { InputSuggestionItemSelectEventDetail } from '@ui5/webcomponents/dist/Input'
import '@ui5/webcomponents/dist/features/InputSuggestions.js'
import '@ui5/webcomponents-icons/dist/search'
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js'
import debounce from 'lodash.debounce'

import { Movie } from '../../../domain/models'
import { makeRemoteSearchMovie } from '../../../main/factories/useCases/remote-search-movie-factory'
import { getMoviesFromSearch, setLoadingStatus } from '../../../data/store/movies'

import'./styles.scss'

const SearchInput = () => {
    const { moviesSearchResult } = useSelector((state: any) => state.searchMoviesList)
    const [searchValue, setSearchValue] = useState<string>()
    const dispatch = useDispatch()

    const generateMoviesOptions = () => {
        return moviesSearchResult.map((movie: Movie, index: number) => (
            <SuggestionItem
                key={index}
                description={movie.year}
                text={movie.title}
                additionalText={movie.type}
                id={movie.imdbID}
            />
        ))
    }
    const debouncedSearch = useCallback(
        debounce((nextValue: string) => {
            if(nextValue.length < 3) {
                return ''
            }
            else {
                dispatch(setLoadingStatus())
                const remoteLoadMovies = makeRemoteSearchMovie(nextValue)
                remoteLoadMovies.searchMovie()
                    .then( (response) => {
                        console.log(response)
                        dispatch(getMoviesFromSearch(response))
                        dispatch(setLoadingStatus())
                    })
                    .catch((error: any) => console.error('Error', error.message))
            }
        }, 1000),
        [],
    )
    const handleChange = (event: Ui5CustomEvent<InputDomRef, never>) => {
        const { value: nextValue } = event.target
        console.log('nextvalue', nextValue)
        setSearchValue(nextValue)
        debouncedSearch(nextValue!)
    }

    return (
        <div className='search-input__wrapper'>
            <Input
                accessibleName="search-movie-bar"
                accessibleNameRef="search-movie-bar"
                icon={null}
                name="search-bar"
                onInput={(e) => handleChange(e)}
                onSuggestionItemPreview={() => console.log('onSuggestionItemPreview')}
                onSuggestionItemSelect={(e: Ui5CustomEvent<InputDomRef, InputSuggestionItemSelectEventDetail>) => console.log('onSuggestionItemSelect', e.detail.item.id)}
                placeholder="Nome do filme que deseja buscar"
                showSuggestions
                className='search-input'
                value={searchValue}
            >
                {
                    searchValue && searchValue.length >= 3 && <SuggestionGroupItem text={`${moviesSearchResult.length} resultados`} />
                }

                { searchValue && searchValue.length < 3 && <SuggestionItem text={ 'Digite pelo menos 3 letras'}/> }
                
                {
                    moviesSearchResult && <>{generateMoviesOptions()}</>
                }
            </Input>
        </div>
    )
}

export default SearchInput