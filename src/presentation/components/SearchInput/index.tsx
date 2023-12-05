import React, { memo } from 'react'
import { Button, Icon, Input, SuggestionGroupItem, SuggestionItem } from '@ui5/webcomponents-react'
import '@ui5/webcomponents/dist/features/InputSuggestions.js'
import '@ui5/webcomponents-icons/dist/search'

type SearchInputProps = {
    className: string;
}

const SearchInput = ({className}: SearchInputProps) => {
    return (
        <>
            <Input
                accessibleName="search-movie-bar"
                accessibleNameRef="search-movie-bar"
                icon={null}
                name="search-bar"
                onChange={() => console.log('onChange')}
                onInput={() => console.log('onInput')}
                onSuggestionItemPreview={() => console.log('onSuggestionItemPreview')}
                onSuggestionItemSelect={() => console.log('onSuggestionItemSelect')}
                placeholder="Nome do filme que deseja buscar"
                showSuggestions
                className={className}
            >
                <SuggestionGroupItem text="A Group" />
                <SuggestionItem
                    additionalText="USA"
                    description="My Description"
                    icon="globe"
                    text="United States"
                />
                <SuggestionItem
                    icon="globe"
                    iconEnd
                    text="Bulgaria"
                />
                <SuggestionGroupItem text="Another Group Items" />
                <SuggestionItem
                    icon="globe"
                    text="Argentina"
                />
                <SuggestionItem
                    icon="globe"
                    text="Germany"
                />
                <SuggestionItem
                    icon="globe"
                    text="Iceland"
                />
                <SuggestionItem
                    icon="globe"
                    text="Moldova"
                />
            </Input>
            <Button
                icon="search"
                onClick={() =>alert('clicou')}
            >
            </Button>
        </>
    )
}

export default memo(SearchInput)