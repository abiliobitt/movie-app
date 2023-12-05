import React, { memo } from 'react'

import'./styles.scss'

const NavBar: React.FC = () => {
    return (
        <div className='navbar__wrapper'>
            <h1 className='navbar__title'>Movie Star</h1>
        </div>
    )
}

export default memo(NavBar)