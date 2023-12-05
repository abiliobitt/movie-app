import React, { memo } from 'react'

import'./styles.scss'

const NavBar: React.FC = () => {
    return (
        <div className='wrapper'><h1>Movie Star</h1></div>
    )
}

export default memo(NavBar)