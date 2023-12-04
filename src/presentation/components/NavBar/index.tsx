import React, { memo } from 'react'

import { Wrapper } from './styles'

const NavBar: React.FC = () => {
    return (
        <Wrapper><h1>Logo</h1></Wrapper>
    )
}

export default memo(NavBar)